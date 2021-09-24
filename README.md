# MagicMirror
# Baño Inteligente
## Contenidos
1. Descripción
2. Instalación (software)
3. Ensamblaje (ver ASSEMBLY.MD)

## Descripción
El proyecto consiste en un espejo, que en la parte de atrás hay un Raspberry Pi 3 conectado a un monitor, el cual muestra:

* Fecha y Hora
* Temperatura y Clima
* Noticias
* Gmail (Sólo lectura)
* Activación de interruptores eléctricos (Lámparas, bombas de agua, etc.)

Todas estas funciones son controladas mediante comandos de voz.

## Instalación

Para instalar el Sistema Operativo Raspbian en el Raspberry se puede usar [NOOBS](https://www.raspberrypi.org/documentation/installation/noobs.md).

Python ya viene instalado en el Raspbian, pero en caso de no tenerlo podemos ver [esta página](https://tecadmin.net/install-python-2-7-on-ubuntu-and-linuxmint/), o sino descargar el instalador en la [página oficial de Python](https://www.python.org/downloads/) ver.2.7.x. 
Luego para instalar los paquetes necesitaremos el PIP, que es un administrador de paquetes especialmente para Python. Para poder bajarlo usaremos el siguiente comando (con Python 2.7.13 ya viene instalado):

	sudo apt-get install python-pip
	
Ahora que tenemos el PIP seguiremos con la instalación de las distintas librerias.

**Web.py** es la librería que nos permite usar nuestra aplicación python como un servidor web (web server). Se instala con:

	sudo pip install web.py

**json** esta librería ya viene instalada con Python

**urlparse** se instala con:
	
	sudo pip install urlparse2

**requests (versión: 2.18.1 ó superior)** el comando es:

	sudo pip install requests
	

Ya instalamos todas las librerías por lo que la aplicación ya está lista para funcionar. 
Lo primero que tenemos que hacer para ejecutar el servidor web es ir a la carpeta raíz del proyecto y luego ejecutar *app.py* con python:

    cd magicMirror
    python app.py
    
Al ejectuarlo nos saldrá

    0.0.0.0:puerto
    
Por defecto el puerto es *8080*.

Para poder entrar a nuestra aplicación web, vamos al navegador (preferiblemente Google Chrome), en la barra de búsquedas ingresamos localhost:8080 (reemplazar *8080* por el puerto que elegimos), presionamos *enter* y ya nos debería aparecer nuestra página.


**_______________________________Source__________________________________**

**Files to the webpage when making a Magic Mirror.**

**These files are originally created by Christoffer Orre at PC för alla.**
**[http://pcforalla.idg.se/2.1054/1.601411/sa-bygger-du-en-magisk-spegel-som-visar-klockslag-och-nyheter/sida/3/finjustering-innan-montering]**

**I've translated some of it to english and put them here to make them avalible without having to search for them on a Swedish site.**