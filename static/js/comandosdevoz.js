$(document).ready(function() {
responsiveVoice.setDefaultVoice("Spanish Latin American Female");
//($('#gmailDiv').hide(); 
//se crea una funcion
var NPinA = 17;
var NPinB = 27;
var NPinC = 22;
var numero=0;


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
    $('.container').show();
    //
}

function cerrarGmail() {
    //	 
    $('.container').hide();
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
function prenderLuz1() {
    //	 
    interruptor(1,"on",NPinA);
    //
}
function apagarLuz1() {
    //	 
    interruptor(1,"off",NPinA);
    //
}
function prenderLuz2() {
    //	 
    interruptor(2,"on",NPinB);
    //
}
function apagarLuz2() {
    //	 
    interruptor(2,"off",NPinB);
    //
}
function prenderLuz3() {
    //	 
    interruptor(3,"on",NPinC);
    //
}
function apagarLuz3() {
    //	 
    interruptor(3,"off",NPinC);
    //
}
function gmail(numero) {
    //	 
    $("#message-link-"+mails[numero]).click();
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
		'prender luz 1': function() {
            prenderLuz1();
        },
		'apagar luz 1': function() {
            apagarLuz1();
        },
		'prender luz 2': function() {
            prenderLuz2();
        },
		'apagar luz 2': function() {
            apagarLuz2();
        },
		'prender luz 3': function() {
            prenderLuz3();
        },
		'apagar luz 3': function() {
            apagarLuz3();
        },
		'mail *numero': function(numero) {
            gmail(numero);
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
