var jogada = 2;
var player = 0;
var click = true;
var o = "url('o.png')";
var x = "url('x.png')";
var atual = "url('o.png')";
var mat = new Array (3);
var alerta = new Array (3);
alerta[0] = function(){
  alert("o jogador X venceu")
  res();
}
alerta[1] = function(){
  alert("o jogador O venceu")
  res();
}

for (i=0;i<3;i++)
{
  mat[i] = new Array (3);
}
res();

function clickCelula(id, i, j){
  return function(){

    if (document.getElementById(id).style.backgroundImage == "") {
      mat[i][j] = atual;
      document.getElementById(id).style.backgroundImage = atual; jogada = jogada +1; player = jogada%2;
      if (verifica() == true){ alerta[player]();}
      if (player == 0)
      {
        atual = o;
      }
      if (player == 1)
      {
        atual = x;
      }

    }
  }
}

document.getElementById("a1").onclick = clickCelula("a1", 0, 0);
document.getElementById("a2").onclick = clickCelula("a2", 0, 1);
document.getElementById("a3").onclick = clickCelula("a3", 0, 2);
document.getElementById("b1").onclick = clickCelula("b1", 1, 0);
document.getElementById("b2").onclick = clickCelula("b2", 1, 1);
document.getElementById("b3").onclick = clickCelula("b3", 1, 2);
document.getElementById("c1").onclick = clickCelula("c1", 2, 0);
document.getElementById("c2").onclick = clickCelula("c2", 2, 1);
document.getElementById("c3").onclick = clickCelula("c3", 2, 2);
document.getElementById("reset").onclick =  res;
function res() {
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
  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      mat[i][j] = "";
    }
  }
}
function verifica(){
  let win = false;
  for(i=0;i<3;i++){
    win = mat[i][0] == mat[i][1] && mat[i][1] == mat[i][2] && mat[i][1] != "";
    if (win == true){
      return true;
    }
    win = mat[0][i] == mat[1][i] && mat[1][i] == mat[2][i] && mat[2][i] != "";
    if (win == true){
      return true;
    }
  }

  win = mat[0][0] == mat[1][1] && mat[1][1] == mat[2][2] && mat[2][2] != "";
  if (win == true){
    return true;
  }

  win = mat[2][0] == mat[1][1] && mat[1][1] == mat[0][2] && mat[0][2] != "" ;
  return win;

}
function resetimg(img){
  document.getElementById(img).style.backgroundImage = "";
}
