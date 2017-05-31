import web #libreria para simular web-server
import urlparse
import json
import requests

#import RPi.GPIO as GPIO  #libreria para usar los pines de la raspberry

def make_text(string):
    return string

#lista de directorios y la clase que abre en cada uno
urls = (
		'/', 'index',
		'/lz', 'luz',
		'/noticias', 'noticias'
		)
		
#la carpeta a donde va a buscar el index.html		
render = web.template.render('templates/')

app = web.application(urls, globals())

#my_form = web.form.Form(
#                web.form.Textbox('', class_='textfield', id='textfield'),
#                )


class noticias():
    def GET(self):
        return requests.get("https://www.clarin.com/rss/lo-ultimo/")

#control de los pines (17)
class luz():
    #def GET(self):
        #form = my_form()
	#	return render.luz()
		
        
    def POST(self):
		parsed = urlparse.urlparse(web.data())
		estado = urlparse.parse_qs(parsed.path)['estado'][0]
		
		if(estado=="prender1"):
		    #Definimos el sistema de numeracion que queremos(BCM o BOARD)
			GPIO.setmode(GPIO.BCM) 
			#Definimos el pin GPIO 17 como una salida
			GPIO.setup(17, GPIO.OUT)
			#Le asignamos como valor logico
			GPIO.output(17, GPIO.HIGH)
		else:
			if(estado=="apagar1"):		
				GPIO.setmode(GPIO.BCM)
				GPIO.setup(17, GPIO.OUT)
				GPIO.output(17, GPIO.LOW)
				GPIO.cleanup(17)

		if(estado=="prender2"):
			GPIO.setmode(GPIO.BCM)
			GPIO.setup(27, GPIO.OUT)
			GPIO.output(27, GPIO.HIGH)
		else:
			if(estado=="apagar2"):
				GPIO.setmode(GPIO.BCM)
				GPIO.setup(27, GPIO.OUT)
				GPIO.output(27, GPIO.LOW)
				GPIO.cleanup(27)			
	
		
		if(estado=="prender3"):
			GPIO.setmode(GPIO.BCM)
			GPIO.setup(22, GPIO.OUT)
			GPIO.output(22, GPIO.HIGH)
		else:
			if(estado=="apagar3"):
				GPIO.setmode(GPIO.BCM)
				GPIO.setup(22, GPIO.OUT)
				GPIO.output(22, GPIO.LOW)
				GPIO.cleanup(22)			
	
		return json.dumps({'msg': estado})		

		
#carga el render (/templates/index.html)
class index():
    def GET(self):
        return render.index()	

	
		

		

if __name__ == '__main__':
    app.run()

