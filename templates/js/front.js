//($('#gmailDiv').hide(); 
//se crea una funcion


function abrirNoticias() {
    //	 
    $('#notiDiv').show();
    //
}

function cerrarNoticias() {
    //	 
    $('#notiDiv').hide();
    //
}

function abrirGmail() {
    //	 
    $('#gmailDiv').show();
    //
}

function cerrarGmail() {
    //	 
    $('#gmailDiv').hide();
    //
}



/*********************************************************/

if (annyang) {
    //se llama a la funcion con un comando de voz
    //en este caso decimos cualquier cosa, eso se guarda en etc
    //y comienza a escuchar valor y llama a la funcion dropdown
    var commands = {
        'abrir noticias': function() {
            cerrarGmail();
            abrirNoticias();
        },
        'cerrar noticias': function() {
            cerrarNoticias();
        },
        'abrir gmail': function() {
            cerrarNoticias();
            abrirGmail();
        },
        'cerrar gmail': function() {
            cerrarGmail();
        },


        //{ alert('Hello world!'); } //imprime un mensaje

    };
    //permite que se muestre el debug por consola
    annyang.debug();
    //añade los comandos
    annyang.addCommands(commands);
    //establece el idioma de escucha en español
    annyang.setLanguage("es");
    //comienza a escuchar
    annyang.start();
}

/*********************************************************************/
//$('#notiDiv').hide(); 
var limit = 0;



$.get("https://www.clarin.com/rss/lo-ultimo/", function(data) {
    var $xml = $(data);
    $xml.find("item").each(function(i) {
        var $this = $(this),
            item = {
                title: $this.find("title").text(),
                description: $this.find("description").text(),
                pubDate: $this.find("pubDate").text(),
            }
        //Do something with item here...
        //var month = item.pubDate.getUTCMonth() + 1; //months from 1-12
        //var day = item.pubDate.getUTCDate();


        $("#itemNot").append('<h3 class="smaller">' + item.title + '</h3>');
        $("#itemNot").append('<p class="date">' + item.pubDate + '</p>');
        $("#itemNot").append('<p>' + item.description + '</p>');
        $("#itemNot").append('<p>_______________________</p>');
        return i < 3

    });
});


//*****************************************************************************/
var clientId = '743981775055-clrerrd2cnq2adjjk4q2095srims0es8.apps.googleusercontent.com';
var apiKey = 'AIzaSyDsjV0utgJyzmKWLJy_idJOaZyBGZbGRJA';
var scopes = 'https://www.googleapis.com/auth/gmail.readonly';


function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth, 1);
}

function checkAuth() {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: true
    }, handleAuthResult);
}

function handleAuthClick() {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: false
    }, handleAuthResult);
    return false;
}

function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        loadGmailApi();
        $('#authorize-button').remove();
        $('.table-inbox').removeClass("hidden");
    } else {
        $('#authorize-button').removeClass("hidden");
        $('#authorize-button').on('click', function() {
            handleAuthClick();
        });
    }
}

function loadGmailApi() {
    gapi.client.setApiKey(apiKey);
    gapi.client.load('gmail', 'v1', displayInbox);
}

function displayInbox() {
    var request = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'labelIds': 'INBOX',
        'maxResults': 10
    });
    request.execute(function(response) {
        $.each(response.messages, function() {
            var messageRequest = gapi.client.gmail.users.messages.get({
                'userId': 'me',
                'id': this.id
            });
            messageRequest.execute(appendMessageRow);
        });
    });
}

function appendMessageRow(message) {
    $('.table-inbox tbody').append(
        '<tr>\
            <td>' + getHeader(message.payload.headers, 'From') + '</td>\
            <td>\
              <a href="#message-modal-' + message.id +
        '" data-toggle="modal" id="message-link-' + message.id + '">' +
        getHeader(message.payload.headers, 'Subject') +
        '</a>\
            </td>\
            <td>' + getHeader(message.payload.headers, 'Date') + '</td>\
          </tr>'
    );
    $('body').append(
        '<div class="modal fade" id="message-modal-' + message.id +
        '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
            <div class="modal-dialog modal-lg">\
              <div class="modal-content">\
                <div class="modal-header">\
                  <button type="button"\
                          class="close"\
                          data-dismiss="modal"\
                          aria-label="Close">\
                    <span aria-hidden="true">&times;</span></button>\
                  <h4 class="modal-title" id="myModalLabel">' +
        getHeader(message.payload.headers, 'Subject') +
        '</h4>\
                </div>\
                <div class="modal-body">\
                  <iframe id="message-iframe-' + message.id + '" srcdoc="<p>Loading...</p>">\
                  </iframe>\
                </div>\
              </div>\
            </div>\
          </div>'
    );
    $('#message-link-' + message.id).on('click', function() {
        var ifrm = $('#message-iframe-' + message.id)[0].contentWindow.document;
        $('body', ifrm).html(getBody(message.payload));
    });
}

function getHeader(headers, index) {
    var header = '';
    $.each(headers, function() {
        if (this.name === index) {
            header = this.value;
        }
    });
    return header;
}

function getBody(message) {
    var encodedBody = '';
    if (typeof message.parts === 'undefined') {
        encodedBody = message.body.data;
    } else {
        encodedBody = getHTMLPart(message.parts);
    }
    encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
    return decodeURIComponent(escape(window.atob(encodedBody)));
}

function getHTMLPart(arr) {
    for (var x = 0; x <= arr.length; x++) {
        if (typeof arr[x].parts === 'undefined') {
            if (arr[x].mimeType === 'text/html') {
                return arr[x].body.data;
            }
        } else {
            return getHTMLPart(arr[x].parts);
        }
    }
    return '';
}

/******************************************************************************************/
$(document).ready(function() {
    //variables clima
    var temperatura;
    var clima;
    var myImage = new Image(100, 100);
    myImage.src = "Images/nube1.png";
    var urlimg;
    //variables clima
    setInterval(startClima, 3000);
    setInterval(startTime, 1000);
});

function startClima() {
    //TEMPERATURA
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=3436397&APPID=eb04032d821d146ed981d60f5ac3a756', function f_temperatura(data) {
        //alert(data.list[0].main.temp);
        temperatura = data.main.temp - 273.15; //conversion de kelvin a celsius
        clima = data.weather[0].main; //clima 
        switch (clima) { //traduccion del clima y cambio de imagen
            case "Clear":
                clima = "Despejado";
                urlimg = "Images/nube1.png";
                break;

            case "Rain":
                clima = "Lluvioso";
                urlimg = "Images/nube2.png";
                break;
            case "Clouds":
                clima = "Nublado";
                urlimg = "Images/nube3.png";
                break;
            case "Snow":
                clima = "Nevado";
                urlimg = "Images/nube4.png";
                break;
            case "Drizzle":
                clima = "Lluvioso";
                urlimg = "Images/nube2.png";
                break;
        }
        document.getElementById('temperatura').innerHTML = temperatura.toFixed(1) + "&ordm " //pasar temperatura al html
        document.getElementById("myImg").src = urlimg; //pasar source de la img al html
        document.getElementById('clima').innerHTML = clima; //pasar clima al html
    });
    //TEMPERATURA
}


function startTime() {


    //FECHA Y HORA	
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    var day = new Date();
    var dia = day.getDay();
    var mes = day.getMonth();

    switch (mes) {
        case 0:
            mes = "Enero";
            break;
        case 1:
            mes = "Febrero";
            break;
        case 2:
            mes = "Marzo";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Mayo";
            break;
        case 5:
            mes = "Junio";
            break;
        case 6:
            mes = "Julio";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Septiembre";
            break;
        case 9:
            mes = "Octubre";
            break;
        case 10:
            mes = "Noviembre";
            break;
        case 11:
            mes = "Diciembre";
            break;
    }
    switch (dia) {
        case 0:
            dia = "Domingo ";
            break;
        case 1:
            dia = "Lunes ";
            break;
        case 2:
            dia = "Martes ";
            break;
        case 3:
            dia = "Miercoles ";;
            break;
        case 4:
            dia = "Jueves ";
            break;
        case 5:
            dia = "Viernes ";
            break;
        case 6:
            dia = "Sabado ";
            break;
    }
    document.getElementById('fecha').innerHTML = dia + day.getDate() + " de " + mes; //devolver fecha
    document.getElementById('hora').innerHTML = h + ":" + m; //devolver hora
    var t = setTimeout(startTime, 500);
}

function checkTime(i) { //agregar 0 si es menor a 10
    if (i < 10) {
        i = "0" + i
    };
    return i;
}
//FECHA Y HORA