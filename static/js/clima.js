var urlimgCONF = 'static/images/';
$(document).ready(function() {
    //variables clima
//return false;
    var temperatura;
    var clima;
    var myImage = new Image(100, 100);
    //myImage.src = "images/nube1.png";
    //variables clima
	startClima();
    setInterval(startClima, 60000);
    
});

function startClima() {
    //TEMPERATURA
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=3436397&APPID=eb04032d821d146ed981d60f5ac3a756', function f_temperatura(data) {
	var urlimg;
        //alert(data.list[0].main.temp);
        temperatura = data.main.temp - 273.15; //conversion de kelvin a celsius
        clima = data.weather[0].main; //clima 
        switch (clima) { //traduccion del clima y cambio de imagen
            case "Clear":
                clima = "Despejado";
                urlimg = "nube1.png";
                break;

            case "Rain":
                clima = "Lluvioso";
                urlimg = "nube2.png";
                break;
            case "Clouds":
                clima = "Nublado";
                urlimg = "images/nube3.png";
                break;
            case "Snow":
                clima = "Nevado";
                urlimg = "images/nube4.png";
                break;
            case "Drizzle":
                clima = "Lluvioso";
                urlimg = "images/nube2.png";
                break;
        }
	urlimg = urlimgCONF+urlimg;

        document.getElementById('temperatura').innerHTML = temperatura.toFixed(1) + "&ordm " //pasar temperatura al html
        document.getElementById("myImg").src = urlimg; //pasar source de la img al html
        document.getElementById('clima').innerHTML = clima; //pasar clima al html
    });
    //TEMPERATURA
}
