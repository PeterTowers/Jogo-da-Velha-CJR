var jogada = 2;
var player = 0;
var click = true;
var o = "url('o.png')";
var x = "url('x.png')";
var atual = "url('o.png')";
var a1 = false;

document.getElementById("a1").onclick = function() {
  document.getElementById("a1").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    if (player == 0)
    {
      atual = o;
    }
    if (player == 1)
    {
      atual = x;
    }
}
document.getElementById("a2").onclick = function() {
  document.getElementById("a2").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    if (player == 0)
    {
      atual = o;
    }
    if (player == 1)
    {
      atual = x;
    }
}
document.getElementById("a3").onclick = function() {
  document.getElementById("a3").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
      if (player == 0)
      {
        atual = o;
      }
      if (player == 1)
      {
        atual = x;
      }
}
document.getElementById("b1").onclick = function() {
  document.getElementById("b1").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
  if (player == 0)
  {
    atual = o;
  }
  if (player == 1)
  {
    atual = x;
  }
}
document.getElementById("b2").onclick = function() {
  document.getElementById("b2").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
  if (player == 0)
  {
    atual = o;
  }
  if (player == 1)
  {
    atual = x;
  }
}
document.getElementById("b3").onclick = function() {
  document.getElementById("b3").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
  if (player == 0)
  {
    atual = o;
  }
  if (player == 1)
  {
    atual = x;
  }
}
document.getElementById("c1").onclick = function() {
  document.getElementById("c1").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
  if (player == 0)
  {
    atual = o;
  }
  if (player == 1)
  {
    atual = x;
  }
}
document.getElementById("c2").onclick = function() {
  document.getElementById("c2").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
  if (player == 0)
  {
    atual = o;
  }
  if (player == 1)
  {
    atual = x;
  }
}
document.getElementById("c3").onclick = function() {
  document.getElementById("c3").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
  if (player == 0)
  {
    atual = o;
  }
  if (player == 1)
  {
    atual = x;
  }
}
