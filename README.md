# LunarLander-js

Aquesta és la versió del joc Lunar Lander que conté JavaScript.
El joc està compost per:
- 1 arxiu html.
- 2 arxius css, dividits amb el css per pantalla d'ordinador i el css per la pantalla del mòbil.
- 1 arxiu JavaScript.

He afegit uns marcadors a la part superior esquerra que ens indiquen la altura, la velocidad i el fuel que queda a la nau per aconseguir aterrar de manera correcte. Aquests marcadors van variant, la altura varia depenent de la posició que ocupa la nau dins la pantalla, la velocitat varia depenent de la velocitat en que la nau s'atraca a la lluna i el fuel varia perquè cada vegada que utilitzam la barra espaciadora s'encén el motor de la nau. Per tant, cada vegada que prenem la barra espaciadora fa que el marcador del fuel baixi a mesura del temps que està encès el motor.

En la part superior esquerra he posat el botó d'instruccions, el botó de pausa i el botó de play. El botó d'instruccions al pulsar-lo ens surt un missatge que ens diu com es juga, dins aquesta pantalla d'instruccions, a la part superior dreta hi ha un altre botó que permet tancar aquella pantalla per seguir jugant. El botó de pausa, al pitjar-lo, pausa el joc i automaticament el botó es canvia per un botó de play que permet tornar a jugar en voler.

Què passa si guanyam o perdem?
- Si guanyam vol dir que hem aconseguit aterrar la nau a una velocidad inferior a 6 m/s i ens apareixerà una pantalla donant-nos l'enhorabona, també ens mostra un botó a la part inferior que ens permet tornar a jugar.
- Si perdem vol dir que NO hem aconseguit aterrar la nau a una velocidad inferior a 6 m/s i ens apareixerà una pantalla donant-nos la mala noticia de que no hem aconseguit l'objectiu, també ens mostrarà un botó a la part inferior que ens permet tornar a jugar.

He incorporat la funció que fa que la nau normal es canviï amb una nau amb foc en el moment que prenem el botó d'encendre el motor i la funció que fa que apereixi una explosió si no aconseguim l'objectiu.
 
