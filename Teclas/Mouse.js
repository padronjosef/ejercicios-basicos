var estado = 0;                                                                 // estado del click
var colorLinea = "black";                                                       // color a la linea

//linkear botones desde el html
var botonNegro      = document.getElementById("botonNegro");
var botonRojo       = document.getElementById("botonRojo");
var botonVerde      = document.getElementById("botonVerde");
var botonAzul       = document.getElementById("botonAzul");
var botonAmari      = document.getElementById("botonAmari");
var botonMorado     = document.getElementById("botonMorado");
var botonRosa       = document.getElementById("botonRosa");
var botonMarron     = document.getElementById("botonMarron");
var botonGris       = document.getElementById("botonGris");
var botonBorrar     = document.getElementById("botonBorrar");
var botonBorrarTodo = document.getElementById("botonBorrarTodo");

var area  = document.getElementById("area_de_dibujo");
var papel = area.getContext("2d");

var x;                                                                          // guardar coordenada en X
var y;                                                                          // guardar coordenada en Y

document.addEventListener("mousedown", presionarMouse);                         //cuando presionas click
document.addEventListener("mouseup",   soltarMouse);                            //cuando sueltas click
document.addEventListener("mousemove", dibujarMouse );                          //cuando mueves el mouse

botonNegro.     addEventListener("click", cambiarColorNegro);
botonRojo.      addEventListener("click", cambiarColorRojo);
botonVerde.     addEventListener("click", cambiarColorVerde);
botonAzul.      addEventListener("click", cambiarColorAzul);
botonAmari.     addEventListener("click", cambiarColorAmari);
botonMorado.    addEventListener("click", cambiarColorMorado);
botonRosa.      addEventListener("click", cambiarColorRosa);
botonMarron.    addEventListener("click", cambiarColorMarron);
botonGris.      addEventListener("click", cambiarColorGris);
botonBorrar.    addEventListener("click", cambiarColorBorrar);
botonBorrarTodo.addEventListener("click", cambiarBorrarTodo);

// dibujo del borde
dibujarLinea("black",   0,     0,   300,     0, papel)
dibujarLinea("black", 300,     0,   300,   300, papel)
dibujarLinea("black", 300,   300,     0,   300, papel)
dibujarLinea("black",   0,   300,     0,     0, papel)

//funciones del mouse
function presionarMouse(evento) {
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}                                                                               // Funcion para mousedown
function soltarMouse(evento) {
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}                                                                               // Funcion para mouseup
function dibujarMouse(evento) {
  if (estado == 1) {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}                                                                               // Funcion para mousemove

//funcion dibujar linea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)  {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//funciones de los botones
function cambiarColorNegro() {
  colorLinea = "black";
}
function cambiarColorRojo() {
  colorLinea = "red";
}
function cambiarColorVerde() {
  colorLinea = "green";
}
function cambiarColorAzul() {
  colorLinea = "blue";
}
function cambiarColorAmari() {
  colorLinea = "yellow";
}
function cambiarColorMorado() {
  colorLinea = "purple";
}
function cambiarColorRosa() {
  colorLinea = "pink";
}
function cambiarColorMarron() {
  colorLinea = "Brown";
}
function cambiarColorGris() {
  colorLinea = "grey";
}
function cambiarColorBorrar() {
  colorLinea = "white";
}
function cambiarBorrarTodo() {
	papel.clearRect(0, 0, area.width, area.height);
}
