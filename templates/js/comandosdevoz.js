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