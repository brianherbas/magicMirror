jQuery(document).ready(function() {
var urlAjax = "http://10.3.87.97:8080/lz";

	jQuery("#interruptor1").click(function() {
		interruptor(1);
	});
	jQuery("#interruptor2").click(function() {
		interruptor(2);
	});
	jQuery("#interruptor3").click(function() {
		interruptor(3);
	});




	function interruptor(inNum,orden)
	{			
		var image = document.getElementById('interruptor'+inNum);
		var estado;
		
		if (orden=="apagar") {
        		image.src = "static/images/f"+inNum+".png";
			estado = "apagado"+inNum;
			jQuery("#val"+inNum).val("Apagado");
		}
		if (orden=="prender") {
        		image.src = "static/images/t"+inNum".png";
			estado = "encedido"+inNum;
			jQuery("#val"+inNum).val("Encendido");	
		}

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
		});
	}
