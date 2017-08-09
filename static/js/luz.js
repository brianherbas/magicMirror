jQuery(document).ready(function() {


	jQuery("#interruptor1").click(function() {
		interruptorC(1);
	});
	jQuery("#interruptor2").click(function() {
		interruptorC(2);
	});
	jQuery("#interruptor3").click(function() {
		interruptorC(3);
	});
});

var urlAjax = "/sw";

	function interruptor(inNum,orden,NPin)
	{			
		var image = document.getElementById('interruptor'+inNum);
		var estado;

		
		jQuery.ajax({
			url: urlAjax, //modificar porque IP es dinamica
			type: "POST",
			//dataType:'json',
			data: {"orden" : orden, "NPin" : NPin},
			success: function(data) {				
				if (orden=="on") {
					image.src = "static/images/f"+inNum+".png";			
					if(inNum == 1)
						jQuery("#val"+inNum).text("Apagado");
					if(inNum == 2)			
						jQuery("#val"+inNum).text("Cerrado");
				}
				if (orden=="off") {
					image.src = "static/images/t"+inNum+".png";		
					if(inNum == 1)
						jQuery("#val"+inNum).text("Encendido");
					if(inNum == 2)			
						jQuery("#val"+inNum).text("Abierto");
				}
			},
			error: function(data) {
				console.log(data);
			}
		});
	}



	function interruptorC(inNum)
	{			
		var image = document.getElementById('interruptor'+inNum);
		var estado;
		
		if (jQuery("#val"+inNum).text() == "Encendido") {
        		image.src = "static/images/f"+inNum+".png";
			estado = "apagado"+inNum;
			jQuery("#val"+inNum).text("Apagado");
		}
		else if (jQuery("#val"+inNum).text() == "Apagado") {
        		image.src = "static/images/t"+inNum+".png";
			estado = "encedido"+inNum;
			jQuery("#val"+inNum).text("Encendido");	
		}
		/*
		jQuery.ajax({
			url: urlAjax, //modificar porque IP es dinamica
			type: "POST",
			dataType:'json',
			data: {"estado" : estado},
			success: function(data) {
				//alert(data.msg);
				//alert(data);
			},
			error: function(data) {
				console.log(data);
			}
		});*/
	}

