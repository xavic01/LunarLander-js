var y = 2;  //Empezamos creando las variables 
var v = 0;
var dt = 0.016683;
var g = 1.622;
var a = g; 
var gasolina=100;
var timer;
var gasolinaTotal=100
var timerFuel=null;

window.onload = function arrancarJuego(){ //Arrancamos el juego
    //Las funciones de reiniciar, pausar y instrucciones
    document.getElementById("reanudar").onclick=function(){reanudar();};
    document.getElementById("pausa").onclick=function(){pausar();};
    document.getElementById("instrucciones").onclick=function(){mostrarInstrucciones();};
    document.getElementById("botonAjustes").onclick=function(){mostrarAjustes();};
    //Las funciones para jugar otra vez en caso de ganar o perder
    document.getElementById("jugarOtraVez").onclick=function(){reiniciarJuego();};
    document.getElementById("jugarAgain").onclick=function(){reiniciarJuego();};
   
    start(); //Se empieza a mover la nave
	//Hacer que pulsando la barra espaciadora se encienda el motor de la nave
    window.onkeydown=function(e) {
        var claveTecla;
        if (window.event)
            claveTecla = window.event.keyCode;
        else if (e)
            claveTecla = e.which;
        if ((claveTecla==32))
            {encenderMotor();
            }
    }
    window.onkeyup=apagarMotor;
}
//Creamos la función para que el juego empieze
function start(){
    timer=setInterval(function(){ moverNave(); }, dt*1000);
}
//Cramos la función para que el juego acabe
function stop(){
    clearInterval(timer);
}
//Creamos la función para que la nave se mueva
function moverNave(){
    v +=a*dt;
    document.getElementById("velocidad").innerHTML=v.toFixed(2);
    y +=v*dt;
    document.getElementById("altura").innerHTML=y.toFixed(2);
    
    if (y<60){ //Al llegar a un 60% de la pantalla se parará el juego
        document.getElementById("nave").style.top = y+"%"; 
    } else { 
        stop();
        finalizarJuego();
    }   
}
//Creamos la función para que los divs reciban eventos al pasar por encima suya
function eventosOn() {
    document.getElementById("izquierda").style.pointerEvents='auto';
    document.getElementById("derecha").style.pointerEvents='auto';
}
//Creamos la función para que los divs no reciban eventos al pasar por encima suya
function eventosOff() {
    document.getElementById("izquierda").style.pointerEvents='none';
    document.getElementById("derecha").style.pointerEvents='none';
}
//Creamos la función que hace finalizar el juego
function finalizarJuego() {
    if (v>6) { //Cuando aterrizemos y la velocidad esté por debajo de 6 nos dará la victoria. En cambio, si es superior dará como perdedor
            eventosOff();
            document.getElementById("naveimg").src="img/explosio.png";//Se cambia la imagen a una explosión cuando llegas a una velocidad superior a 6 m/s
            document.getElementById("perdedor").style.display="block";
        } else {
            document.getElementById("ganador").style.display="block";
            eventosOff();   
        }
}
//Crearemos la función que actuará cuando el botón esté encendido pulsando la barra espaciadora
function encenderMotor() {
    a=-g;
    document.getElementById("fuel").innerHTML=porcentajeGasolina();
    document.getElementById("naveimg").src= "img/rocketfire.png";//Se cambia a la imagen de la nave con el fuego
    if (timerFuel==null) { 
            timerFuel=setInterval(function(){ actualizarGasolina(); }, 100);
            }
    if (gasolina<=0) {
            apagarMotor();
            document.getElementById("fuel").innerHTML=0;
        }
}
//Cada vez que utilizemos el motor de la gasolina, esta función bajará el nivel de gasolina
function actualizarGasolina(){
    gasolina-=1;
    document.getElementById("fuel").innerHTML=porcentajeGasolina();
    if (gasolina<=0) {
        apagarMotor();
        document.getElementById("fuel").innerHTML=0;
    }
}
//La función que calcula toda la gasolina que le queda a la nave
function porcentajeGasolina() {
  var result= gasolina * 100 / gasolinaTotal;
  return result.toFixed(0);
}
//Función que se enciende cuando el motor de la nave está parado
function apagarMotor() {
    a=g;
    clearInterval(timerFuel);
    timerFuel=null;
    document.getElementById("naveimg").src= "img/rocket.png";
}
//Función que enseña las instrucciones
function mostrarInstrucciones() {
    pausar();
    eventosOff();
    document.getElementById("menuInstrucciones").style.display="block";
}
//Funció que esconde las instrucciones que hemos abierto con anterioridad en la pasada función
function ocultarInstrucciones() {
    document.getElementById("menuInstrucciones").style.display="none";
    eventosOn();
}
//Función para reiniciar el juego
function reiniciarJuego() {
    stop();
    document.getElementById("reanudar").style.display="none";
    document.getElementById("pausa").style.display="inline-block";
    y = 2; 
    v = 0;
    g = 1.622;
    a = g;
    dt = 0.016683;
    gasolina=gasolinaTotal;
    document.getElementById("fuel").innerHTML=porcentajeGasolina();
    document.getElementById("fuel").style.color="black";
    reanudar();
    clearInterval(timer);
    start();
    eventosOn();
    document.getElementById("perdedor").style.display="none";
    document.getElementById("ganador").style.display="none";
    document.getElementById("naveimg").src="img/rocket.png";
}
//Función para pausar el juego
function pausar() {
    stop();
    document.getElementById("pausa").style.display="none";
    document.getElementById("reanudar").style.display="inline-block";
}
//Función para reanudar el juego
function reanudar() {
    stop();
    start();
    document.getElementById("reanudar").style.display="none";
    document.getElementById("pausa").style.display="inline-block";
}
