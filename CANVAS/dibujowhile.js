var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "black";

while(l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);
  console.log("linea " + l)
  l = l + 1;
}
  console.log("EJEMPLO DE CICLO WHILE")
  
dibujarLinea ("colorcito", 1, 1, 1, 299);
dibujarLinea ("colorcito", 299, 1, 1, 1);
dibujarLinea ("colorcito", 1, 299, 299, 299);
dibujarLinea ("colorcito", 299, 299, 299, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
