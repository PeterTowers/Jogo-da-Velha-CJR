var jogada = 2;
var player = 0;
var click = true;
var cor = "blue"
var o = "url('o.png')";
var x = "url('x.png')";
var atual = "url('o.png')";
var mat = new Array (3);
var alerta = new Array (3);
alerta[0] = function()
{
  alert("o jogador Azul venceu")
  res();
}
alerta[1] = function()
{
  alert("o jogador Vermelho venceu")
  res();
}

for (i=0;i<3;i++)
{
  mat[i] = new Array (3);
}

res();

document.getElementById("a1").onclick = function() {
  if (document.getElementById("a1").style.backgroundImage == "")
  {
    mat[0][0] = atual;
    document.getElementById("a1").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    document.getElementById("jogador").style.color = cor;
    if (verifica() == true){ alerta[player]();}
      if (player == 0)
      {
        atual = o;
        cor = "blue";
      }
      if (player == 1)
      {
        atual = x;
        cor = "red";
      }
  }
}

document.getElementById("a2").onclick = function()
{
  if (document.getElementById("a2").style.backgroundImage == "")
  {
    mat[0][1] = atual;
    document.getElementById("a2").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    document.getElementById("jogador").style.color = cor;
    if (verifica() == true){ alerta[player]();}
      if (player == 0)
      {
        atual = o;
        cor = "blue";
      }
      if (player == 1)
      {
        atual = x;
        cor = "red";
      }
  }
}

document.getElementById("a3").onclick = function()
{
  if (document.getElementById("a3").style.backgroundImage == "")
  {
  mat[0][2] = atual;
  document.getElementById("a3").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
  document.getElementById("jogador").style.color = cor;
  if (verifica() == true){ alerta[player](); }
    if (player == 0)
    {
      atual = o;
      cor = "blue";
    }
    if (player == 1)
    {
      atual = x;
      cor = "red";
    }
  }
}

document.getElementById("b1").onclick = function()
{
  if (document.getElementById("b1").style.backgroundImage == "")
  {
    mat[1][0] = atual;
    document.getElementById("b1").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    document.getElementById("jogador").style.color = cor;
    if (verifica() == true){ alerta[player]();}
    if (player == 0)
    {
      atual = o;
      cor = "blue";
    }
    if (player == 1)
    {
      atual = x;
      cor = "red";
    }
  }
}

document.getElementById("b2").onclick = function()
{
  if (document.getElementById("b2").style.backgroundImage == "")
  {
    mat[1][1] = atual;
    document.getElementById("b2").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    document.getElementById("jogador").style.color = cor;
    if (verifica() == true){ alerta[player]();}
    if (player == 0)
    {
      atual = o;
      cor = "blue";
    }
    if (player == 1)
    {
      atual = x;
      cor = "red";
    }
  }
}

document.getElementById("b3").onclick = function()
{
  if (document.getElementById("b3").style.backgroundImage == "")
   {
    mat[1][2] = atual;
    document.getElementById("b3").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    document.getElementById("jogador").style.color = cor;
    if (verifica() == true){ alerta[player]();}
    if (player == 0)
    {
      atual = o;
      cor = "blue";
    }
    if (player == 1)
    {
      atual = x;
      cor = "red";
    }
  }
}

document.getElementById("c1").onclick = function()
{
  if (document.getElementById("c1").style.backgroundImage == "")
  {
    mat[2][0] = atual;
    document.getElementById("c1").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    document.getElementById("jogador").style.color = cor;
    if (verifica() == true){ alerta[player]();}
    if (player == 0)
    {
      atual = o;
      cor = "blue";
    }
    if (player == 1)
    {
      atual = x;
      cor = "red";
    }
  }
}

document.getElementById("c2").onclick = function()
{
  if (document.getElementById("c2").style.backgroundImage == "")
   {
    mat[2][1] = atual;
    document.getElementById("c2").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    document.getElementById("jogador").style.color = cor;
    if (verifica() == true){ alerta[player]();}
    if (player == 0)
    {
      atual = o;
      cor = "blue";
    }
    if (player == 1)
    {
      atual = x;
      cor = "red";
    }
  }
}

document.getElementById("c3").onclick = function()
{
  if (document.getElementById("c3").style.backgroundImage == "")
  {
    mat[2][2] = atual;
    document.getElementById("c3").style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
    document.getElementById("jogador").style.color = cor;
    if (verifica() == true){ alerta[player]();}
    if (player == 0)
    {
      atual = o;
      cor = "blue";
    }
    if (player == 1)
    {
      atual = x;
      cor = "red";
    }
  }
}



document.getElementById("reset").onclick =  res;
function res()
{
  resetimg("a1");
  resetimg("a2");
  resetimg("a3");
  resetimg("b1");
  resetimg("b2");
  resetimg("b3");
  resetimg("c1");
  resetimg("c2");
  resetimg("c3");
  jogada = 2;
  player = 0;
  atual = "url('o.png')";
  for(i=0;i<3;i++)
  {
    for(j=0;j<3;j++)
    {
      mat[i][j] = "";
    }
  }
  document.getElementById("jogador").style.color = "red";
}

function verifica()
{
  if (jogada > 10)
  {
    alert ("O jogo deu Velha");
    res();
  }

  let win = false;
  for(i=0;i<3;i++)
  {
    win = mat[i][0] == mat[i][1] && mat[i][1] == mat[i][2] && mat[i][1] != "";
    if (win == true)
    {
      return true;
    }
    win = mat[0][i] == mat[1][i] && mat[1][i] == mat[2][i] && mat[2][i] != "";
    if (win == true)
    {
      return true;
    }
  }

  win = mat[0][0] == mat[1][1] && mat[1][1] == mat[2][2] && mat[2][2] != "";
  if (win == true)
  {
    return true;
  }

  win = mat[2][0] == mat[1][1] && mat[1][1] == mat[0][2] && mat[0][2] != "" ;
  return win;

}

function resetimg(img)
{
  document.getElementById(img).style.backgroundImage = "";
}
