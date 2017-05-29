jQuery(document).ready(function() {
				jQuery(".button1").click(function() {
					var estado = jQuery(this).val();
					changeImage1()					
						if(estado == 'prender1')
						{
							this.disabled = true;
							document.getElementById('button2').disabled = false;
						}
						else
							if(estado == 'apagar1')
							{
							this.disabled = true;
							document.getElementById('button1').disabled = false;								
							}
					
					jQuery.ajax({
						url: "http://10.3.87.97:8080/lz", //modificar porque IP es dinamica
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
					
				});
			});
			
			
jQuery(document).ready(function() {			
			jQuery(".button2").click(function() {
					var estado = jQuery(this).val();
					changeImage2()					
						if(estado == 'prender2')
						{
							this.disabled = true;
							document.getElementById('button4').disabled = false;
						}
						else
							if(estado == 'apagar2')
							{
							this.disabled = true;
							document.getElementById('button3').disabled = false;								
							}					
					
					jQuery.ajax({
						url: "http://10.3.87.97:8080/lz", //modificar porque IP es dinamica
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
				});
			});		

jQuery(document).ready(function() {			
			jQuery(".button3").click(function() {
					var estado = jQuery(this).val();
					changeImage3()					
						if(estado == 'prender3')
						{
							this.disabled = true;
							document.getElementById('button6').disabled = false;
						}
						else
							if(estado == 'apagar3')
							{
							this.disabled = true;
							document.getElementById('button5').disabled = false;								
							}					
					
					jQuery.ajax({
						url: "http://10.3.87.97:8080/lz", //modificar porque IP es dinamica
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
				});
			});	
			
	function changeImage1() {
    var image = document.getElementById('myImage1');
    if (image.src.match("t1")) {
        image.src = "static/images/f1.png";
    } else {
        image.src = "static/images/t1.png";
		}
	}
		function changeImage2() {
    var image = document.getElementById('myImage2');
    if (image.src.match("t2")) {
        image.src = "static/images/f2.png";
    } else {
        image.src = "static/images/t2.png";
		}
	}
		function changeImage3() {
    var image = document.getElementById('myImage3');
    if (image.src.match("t3")) {
        image.src = "static/images/f3.png";
    } else {
        image.src = "static/images/t3.png";
		}
	}	
	
