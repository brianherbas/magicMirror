import web #libreria para simular web-server
import urlparse
import json
#import RPi.GPIO as GPIO  #libreria para usar los pines de la raspberry

def make_text(string):
    return string

#lista de directorios y la clase que abre en cada uno
urls = (
		'/', 'index',
		'/lz', 'luz'
		)
		
#la carpeta a donde va a buscar el index.html		
render = web.template.render('templates/')

app = web.application(urls, globals())

#my_form = web.form.Form(
#                web.form.Textbox('', class_='textfield', id='textfield'),
#                )


#control de los pines (17)
class luz:
    def GET(self):
        #form = my_form()
        return render.luz()
        
    def POST(self):
		parsed = urlparse.urlparse(web.data())
		estado = urlparse.parse_qs(parsed.path)['estado'][0]
		
		if(estado=="prender"):
			GPIO.setmode(GPIO.BCM)
			GPIO.setup(17, GPIO.OUT)
			GPIO.output(17, GPIO.HIGH)
		
		else:
			GPIO.setmode(GPIO.BCM)
			GPIO.setup(17, GPIO.OUT)
			GPIO.output(17, GPIO.LOW)
			GPIO.cleanup()
	
		return json.dumps({'msg': estado})
		
		
#carga el render (/templates/index.html)
class index:
    def GET(self):
        return render.index()		
		

if __name__ == '__main__':
    app.run()

