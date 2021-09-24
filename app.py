import web #libreria para simular web-server
#try:
    #from urllib.parse import urlparse
#except ImportError:
import urlparse
import json
import requests
try:
    import RPi.GPIO as GPIO
except (ImportError,RuntimeError):
    print("")

def make_text(string):
    return string

#lista de directorios y la clase que abre en cada uno
urls = (
		'/', 'index',
		'/sw', 'luz',
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
    def GET(self):
        form = my_form()
        return render.luz()
		
        
    def POST(self):
		parsed = urlparse.urlparse(web.data())
		
		orden = urlparse.parse_qs(parsed.path)['orden'][0]
		NPin = int(urlparse.parse_qs(parsed.path)['NPin'][0])
  		#Definimos el sistema de numeracion que queremos(BCM o BOARD)
		GPIO.setmode(GPIO.BCM)
		#Definimos 'Npin' como salida
		GPIO.setup(NPin, GPIO.OUT)
 
		if(orden=="on"):
			#Le damos un valor logico alto para encender el led
			GPIO.output(NPin, GPIO.HIGH)
		if(orden=="off"):
			#Le damos un valor logico bajo para apagar el led
			GPIO.output(NPin, GPIO.LOW)						

		
#carga el render (/templates/index.html)
class index():
    def GET(self):
        return render.index()	

	
		

		

if __name__ == '__main__':
    app.run()

