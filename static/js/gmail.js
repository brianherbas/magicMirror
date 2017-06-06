jQuery(document).ready(function() {
jQuery('.container').hide();
});

var clientId = '743981775055-clrerrd2cnq2adjjk4q2095srims0es8.apps.googleusercontent.com';
var apiKey = 'AIzaSyDsjV0utgJyzmKWLJy_idJOaZyBGZbGRJA';
var scopes = 'https://www.googleapis.com/auth/gmail.readonly';
var voiceid =1;
var mails= Array();


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
var fecha = getHeader(message.payload.headers, 'Date');
var myDate = new Date(fecha);
switch (myDate.getMonth()) {
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

mails[voiceid]=message.id; 
    $('.table-inbox tbody').append(
        '<tr>\
	    <td>'+voiceid+'</td>\
            <td>' + getHeader(message.payload.headers, 'From') + '</td>\
            <td id="' + voiceid++ +'">\
              <a href="#message-modal-' + message.id +
        '" data-toggle="modal" id="message-link-' + message.id + '" ">' +
        getHeader(message.payload.headers, 'Subject') +
        '</a>\
            </td>\
            <td>' + myDate.getDate() +" de "+ mes +" l "+myDate.getHours()+":"+myDate.getMinutes()+  '</td>\
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
