var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30,        l = 0,     xi, yi, xf, yf;
var colorcito = "black";

console.log("EJEMPLO DE CICLO DO WHILE")

//marco del canvas
dibujarLinea ("colorcito", 1, 1, 1, 299);
dibujarLinea ("colorcito", 299, 1, 1, 1);
dibujarLinea ("colorcito", 1, 299, 299, 299);
dibujarLinea ("colorcito", 299, 299, 299, 1);

//dibujo de lineas
for(l = 0; l <= 30; l++)
{
  dibujarLinea("purple",    0,         l * 10,             l * 10,          300);
  dibujarLinea("green",   300,         l * 10,          300 - (l*10),       300);
  dibujarLinea("red",     300,      300 - (l*10),       300 - (l*10),         0);
  dibujarLinea("blue",      0,      300 - (l*10),          l * 10,            0);
  console.log("linea " + l)
}

//intrucciones para hacer las lineas
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
