# LunarLander-js

El enlace de Rawgit: https://rawgit.com/xavic01/LunarLander-js/master/lunarlander.html
Esta es la versión del juego Lunar Lander que contiene JavaScript.
El juego está compuesto por:
- 1 archivo html.
- 2 archivos css, divididos con el css para pantalla de ordenador y el css para la pantalla del móvil.
- 1 archivo JavaScript.

He añadido unos marcadores en la parte superior izquierda que nos indican la altura, la velocidad y el fuel que queda en la nave para conseguir aterrizar de manera correcta. Estos marcadores van variando, la altura varía dependiendo de la posición que ocupa la nave dentro de la pantalla, la velocidad varía dependiendo de la velocidad a la que la nave se acerca a la luna y el fuel varía porque cada vez que utilizamos la barra espaciadora se enciende el motor de la nave. Por lo tanto, cada vez que pulsamos la barra espaciadora hace que el marcador del fuel baje a medida del tiempo que está encendido el motor.

En la parte superior derecha he puesto el botón de instrucciones, el botón de pausa y el botón de play. El botón de instrucciones al pulsar-lo nos sale un mensaje que nos dice cómo se juega, además, dentro de esta pantalla de instrucciones, en la parte superior derecha hay otro botón que permite cerrar esa pantalla para seguir jugando. El botón de pausa, al pulsarlo, pausa el juego y automáticamente el botón se cambia por un botón de play que permite volver a jugar cuando quieras.

¿Qué pasa si ganamos o perdemos?
- Si ganamos significa que hemos conseguido aterrizar la nave a una velocidad inferior a 6 m / s y nos aparecerá una pantalla dándonos la enhorabuena.Además, nos muestra un botón en la parte inferior que nos permite volver a jugar.
- Si perdemos significa que NO hemos conseguido aterrizar la nave a una velocidad inferior a 6 m / y nos aparecerá una pantalla dándonos la mala noticia de que no hemos conseguido el objetivo. Además, nos muestra un botón en la parte inferior que nos permite volver a jugar si queremos.

He incorporado la función que hace que la nave normal se cambie con una nave con fuego en el momento que pulsamos el botón de encender el motor y la función que hace que aparezca una explosión, simulando la explosión de la nave, sinó logramos el objetivo.
