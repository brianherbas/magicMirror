jQuery(document).ready(function() {


	jQuery("#interruptor1").click(function() {
		interruptorC(1,17);
	});
	jQuery("#interruptor2").click(function() {
		interruptorC(2,27);
	});
	jQuery("#interruptor3").click(function() {
		interruptorC(3,22);
	});
});

var urlAjax = "/sw";

	function interruptor(inNum,orden,NPin)
	{			
		jQuery.ajax({
			url: urlAjax, //modificar porque IP es dinamica
			type: "POST",
			dataType:'json',
			data: {"orden" : orden, "NPin" : NPin},
			success: function(data) {
				cambiarImg(orden,inNum);
			},
			error: function(data) {
				console.log(data);
			}
		});
	}
	function interruptorC(inNum,NPin)
	{			
		var orden;
		
		if (jQuery("#val"+inNum).text() == "Encendido") {
			orden = "off";
		}
		else if (jQuery("#val"+inNum).text() == "Apagado") {
    		orden = "on";
		}
		
		jQuery.ajax({
			url: urlAjax, //modificar porque IP es dinamica
			type: "POST",
			dataType:'json',
			data: {"orden" : orden, "NPin" : NPin},
			success: function(data) {
				cambiarImg(orden,inNum);
			},
			error: function(data) {
				console.log(data);
			}
		});
	}

    function cambiarImg(orden,inNum)
    {
        var image = document.getElementById('interruptor'+inNum);
        if (orden=="off") {
		    image.src = "static/images/f"+inNum+".png";
		    jQuery("#val"+inNum).text("Apagado");
    	}
	    else if (orden=="on") {
	        image.src = "static/images/t"+inNum+".png";
	        jQuery("#val"+inNum).text("Encendido");	
	    }   
    }