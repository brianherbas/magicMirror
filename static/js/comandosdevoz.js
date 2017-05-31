$(document).ready(function() {
responsiveVoice.setDefaultVoice("Spanish Latin American Female");
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
function pedirHora() {
    //	 

	responsiveVoice.speak( document.getElementById("hora").innerHTML);
    //
}
function pedirTemperatura() {
    //	 
	
	var temp=document.getElementById("temperatura").innerHTML;
	temp=temp.substring(0,temp.length-2);
	responsiveVoice.speak( temp + " grados");
    //
}
function pedirFecha() {
    //	 

	responsiveVoice.speak( document.getElementById("fecha").innerHTML);
    //
}
function pedirClima() {
    //	 

	responsiveVoice.speak( "está " + document.getElementById("clima").innerHTML);
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
		'qué hora es': function() {
            pedirHora();
        },
		'temperatura': function() {
            pedirTemperatura();
        },
		'fecha': function() {
            pedirFecha();
        },
		'clima': function() {
            pedirClima();
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
});