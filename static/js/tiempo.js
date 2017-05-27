$(document).ready(function() {
	startTime();
setInterval(startTime, 1000);
});
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