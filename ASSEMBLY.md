# Entre el relé y el Raspberry Pi debemos hacer las siguientes conexiones:

|Módulo del relé   | Raspberry Pi   |
|---|---|
|VCC   |pin 2(5V PWR)   |
|IN   |pin 11(GPIO17)   |
|GND   |pin 6(GND)   |

## Conexión entre el relé y una lámpara:
En el relé hay tres puertos de conexión eléctrica para cada salida: COM(common), NO(normally open), NC(normally close).
En COM debemos conectar el positivo que va a la toma eléctrica que alimentará a la lámpara, y en uno solo de los otros dos el cable que va al
positivo de la lámpara, dependerá de si lo conectamos a normalmente abierto,o a normalmente *cerrado si la lámpara quedara encendido o apagado
en caso de apagarse el Raspberry. El negativo se conecta directamente de la toma eléctrica a la lámpara. 
