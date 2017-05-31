$(document).ready(function() {
//$('#notiDiv').hide(); 
});

var limit = 0;


/*
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
*/


$.ajax({
    url: "noticias",
    dataType: "xml",
    success: function( data ) {
console.log( data ); // server response
var xml = $(data.childNodes[0]);

xml = xml[0].innerHTML;


  xmlDoc = $.parseXML( xml ),
  $xml = $( xmlDoc ),

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
        var fecha = String(item.pubDate);
	var mydate = new Date(fecha);
	var mes;
	switch (mydate.getMonth()) {
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


        $("#itemNot").append('<h3 class="smaller">' + item.title + '</h3>');
        $("#itemNot").append('<p class="date">'+mydate.getDate() +" de "+ mes +" l "+mydate.getHours()+":"+mydate.getMinutes()+'</p>');
        $("#itemNot").append('<p>' + item.description + '</p>');
        $("#itemNot").append('<p>_______________________</p>');
        return i < 3

    });
         
    },
error: function( response ) {
        console.log( "Error" ); // server response
        console.log( response ); // server response
    }

});

