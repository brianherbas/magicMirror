# Entre el relé y el Raspberry Pi debemos hacer las siguientes conexiones:

|Módulo del relé   | Raspberry Pi   |
|---|---|
|VCC   |pin 2(5V PWR)   |
|IN   |pin 11(GPIO17)   |
|GND   |pin 6(GND)   |

## Conexión entre el relé y una lámpara:
En el relé hay tres puertos de conexión eléctrica para cada salida:

>**NO(normally open), COM(common), NC(normally close).**
![rele](https://i1.wp.com/www.peatonet.com/wp/wp-content/uploads/2014/11/PB080196.png?w=348)





>En COM debemos conectar el positivo de la toma eléctrica que alimentará la bomba de agua,      
>lámpara o electrodoméstico, y en uno solo de los otros
>dos el cable que va al positivo del mismo.     
>El negativo se conecta directamente de la toma eléctrica a la lámpara, bomba de agua, etc.      
![Connection](https://gitlab.com/17610/suizaMirror/raw/develop/static/images/DiagramaFullGpio.jpg)
