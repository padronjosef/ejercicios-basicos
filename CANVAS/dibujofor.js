var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var     i = document.getElementById("dibujito");
var rango = document.getElementById("rango");

boton.addEventListener("click", dibujoPorClick);
rango.addEventListener("change",dibujoPorClick);

var ancho = i.width;
var lienzo = i.getContext("2d");

//Marco
  dibujarLinea ("colorcito", 1, 1, 1, 299);
  dibujarLinea ("colorcito", 299, 1, 1, 1);
  dibujarLinea ("colorcito", 1, 299, 299, 299);
  dibujarLinea ("colorcito", 299, 299, 299, 1);

//algoritmo para dibujar
function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//Dibujar las lineas
function dibujoPorClick()
{
  var lineas = parseInt(rango. value);
  var l = 0;
  var yi, xf;
  var colorcito = "black";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#AAF",             0,     yi,       xf,       300);
    dibujarLinea("#AAF",       ancho-1,     xf,       yi,         1);
  }
}
