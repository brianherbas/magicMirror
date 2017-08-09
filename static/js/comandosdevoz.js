$(document).ready(function() {
responsiveVoice.setDefaultVoice("Spanish Latin American Female");
//($('#gmailDiv').hide(); 
//se crea una funcion
$(document).keyup(function(e) {
var key = e.key;
switch(key)
{
case "q":
	cerrarGmail();
    abrirNoticias();
	break;

case "a":
	cerrarNoticias();
	break;
	
case "w":
	cerrarNoticias();
	abrirGmail();
	break;
	
case "s":
	cerrarGmail();
	break;
	
case "e":
	 pedirHora();
	 break;
	 
case "d":
	 pedirFecha();
	 break;
	 
case "r":
	 pedirTemperatura();
	 break;
	 
case "f":
	 pedirClima();
	 break;
	 
case "t":
	 prenderLuz1();
	 break;
	 
case "g":
	 apagarLuz1();
	 break;
	 
case "y":
	 prenderLuz2();
	 break;
	 
case "h":
	 apagarLuz2();
	 break;

case "1":
	gmail(1);
	break;
	
case "2":
	gmail(2);
	break;
	
case "3":
	gmail(3);
	break;
		
case "4":
	gmail(4);
	break;
		
case "5":
	gmail(5);
	break;
		
case "6":
	gmail(6);
	break;
		
case "7":
	gmail(7);
	break;
		
case "8":
	gmail(8);
	break;
		
case "9":
	gmail(9);
	break;
		
case "0":
	gmail(10);
	break;
}
});


});
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
        'mostrar noticias': function() {
            cerrarGmail();
            abrirNoticias();
        },
        'cerrar noticias': function() {
            cerrarNoticias();
        },
        'abrir correo': function() {
            cerrarNoticias();
            abrirGmail();
        },
        'cerrar correo': function() {
            cerrarGmail();
        },
		'hora': function() {
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
		'prender luz': function() {
            prenderLuz1();
        },
		'apagar luz': function() {
            apagarLuz1();
        },
		'abrir canilla': function() {
            prenderLuz2();
        },
		'cerrar canilla': function() {
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

