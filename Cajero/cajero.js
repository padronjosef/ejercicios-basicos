class billete
{constructor(v, c)
  {this.valor = v;
  this.cantidad=c;
  }
}

function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja) {

    if (dinero>0) {

      div = Math.floor(dinero / bi.valor);

      if (div > bi.cantidad)  {
        papeles = bi.cantidad
      }

      else {
        papeles = div;
      }
      entregado.push(new billete(bi.valor , papeles));
      dinero = dinero - (bi.valor * papeles);
    }

  }

  if(dinero >0) {
    resultado.innerHTML = "soy un cajero malo, he sido malo y no puedo darte esa cantidad :c";
  }
  else{
    for (var e of entregado){
      if(e.cantidad > 0){
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}

var caja = [];
var entregado = [];
caja.push(new billete(100,5));
caja.push(new billete(50,10));
caja.push(new billete(20,5));
caja.push(new billete(10,10));
caja.push(new billete(5,5));
caja.push(new billete(1,10));
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resulado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
