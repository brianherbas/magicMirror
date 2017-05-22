import web
import urlparse
import json
import RPi.GPIO as GPIO

def make_text(string):
    return string

urls = (
		'/', 'index',
		'/lz', 'luz'
		)
render = web.template.render('templates/')

app = web.application(urls, globals())

#my_form = web.form.Form(
#                web.form.Textbox('', class_='textfield', id='textfield'),
#                )

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
		
class index:
    def GET(self):
        return render.index()		
		

if __name__ == '__main__':
    app.run()

