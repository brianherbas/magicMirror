import web #libreria para simular web-server
import urlparse
import json
#import RPi.GPIO as GPIO  #libreria para usar los pines de la raspberry

def make_text(string):
    return string

#lista de directorios y la clase que abre en cada uno
urls = (
		'/', 'index',
		'/sw', 'luz'
		)
		
#la carpeta a donde va a buscar el index.html		
render = web.template.render('templates/')

app = web.application(urls, globals())

#my_form = web.form.Form(
#                web.form.Textbox('', class_='textfield', id='textfield'),
#                )


#control de los pines (17)
class luz():
    #def GET(self):
        #form = my_form()
	#	return render.luz()
		
        
    def POST(self):
		parsed = urlparse.urlparse(web.data())
		estado = urlparse.parse_qs(parsed.path)['orden']['NPin']
  		#Definimos el sistema de numeracion que queremos(BCM o BOARD)
		GPIO.setmode(GPIO.BCM)
		#Definimos 'Npin' como salida
		GPIO.setup(NPin, GPIO.OUT)
 
	if(orden=="on"):
		#Le damos un valor logico alto para encender el led			
		GPIO.output(NPin, GPIO.HIGH)
			if(estado=="apagar1"):
				#Le damos un valor logico bajo para apagar el led
				GPIO.output(NPin, GPIO.LOW)						

		
#carga el render (/templates/index.html)
class index():
    def GET(self):
        return render.index()	

	
		

		

if __name__ == '__main__':
    app.run()

