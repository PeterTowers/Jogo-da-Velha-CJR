/* Declaracao de variaveis */

/* ----- Variaveis numericas ----- */
var jogada = 0;   // Conta o numero de jogadas
var player = 0;   // Define o jogador atual (0 = circulo, 1 = x)

/* ----- Variaveis relacionadas a CSS ----- */
var o = "url('o.png')";   // Relaciona a variavel com a imagem do circulo
var x = "url('x.png')";   // Relaciona com a imagem do xis
var atual = o;            // Define a imagem do jogador atual (comeca com circulo)
var cor = "red";          // Define a cor do texto "Jogador atual", para indicar esse
document.getElementById("jogador").style.color = cor;

/* ----- Vetor de funcoes de alerta ----- */
var alerta = new Array (3);     // Definicao do vetor
alerta[0] = function() {
  alert("O jogador X venceu!")  // Alerta de vitoria do jogador X
  res();                        // Chamada da funcao res() para limpar o tabuleiro
}

alerta[1] = function() {
  alert("O jogador O venceu!")  // Alerta de vitoria do jogador O
  res();                        // Chamada da funcao res() para limpar o tabuleiro
}

/* ----- Matriz do tabuleiro ----- */
var mat = new Array (3);    // Utilizada para determinar a condicao de vitoria
for (i=0;i<3;i++)           // Laco para fazer a matriz
{
  mat[i] = new Array (3);
}

/* ---------------------------------------------------------------------------------------------------- */
/* Codigo a ser executador durante o jogo */

res();  // Chamada da funcao res() para inicializar o tabuleiro

/* ----- Funcao clickCelula ----- */
function clickCelula(id, i, j) {  // Parametros indicam: celula clicada, linha e coluna, respectivamente
  return function() {

    if (document.getElementById(id).style.backgroundImage == "") {// Condicao para evitar sobrescrita
      mat[i][j] = atual;                                          // Escreve a jogada na matriz
      document.getElementById(id).style.backgroundImage = atual;  // Imprime a jogada na pagina
      jogada++;                                             // Incrementa o número de jogadas
      player = jogada % 2;                                  // Define o proximo jogador
      
      if ( (jogada > 5) && (verifica() == true) ) { alerta[player](); } // Chama a funcao verifica() para determinar se um jogador ganhou

      if (player == 0)  // Condicional para definir o proximo jogador
      {
        atual = o;
        cor = "red";
      }
      else
      {
        atual = x;
        cor = "blue";
      }

      document.getElementById("jogador").style.color = cor; // Muda a cor de indicacao do jogador atual
    }
  }
}

/* ----- Chamada das funcoes relacionadas a clicks na tela ----- */
document.getElementById("a1").onclick = clickCelula("a1", 0, 0);  // Funcoes relacionadas ao jogo
document.getElementById("a2").onclick = clickCelula("a2", 0, 1);
document.getElementById("a3").onclick = clickCelula("a3", 0, 2);
document.getElementById("b1").onclick = clickCelula("b1", 1, 0);
document.getElementById("b2").onclick = clickCelula("b2", 1, 1);
document.getElementById("b3").onclick = clickCelula("b3", 1, 2);
document.getElementById("c1").onclick = clickCelula("c1", 2, 0);
document.getElementById("c2").onclick = clickCelula("c2", 2, 1);
document.getElementById("c3").onclick = clickCelula("c3", 2, 2);
document.getElementById("reset").onclick =  res;  // Funcao relacionada ao botao reset

/* ----- Funcao res() ----- */
function res() {  // (Re)Inicializa o tabuleiro com os valores default
  resetimg("a1");
  resetimg("a2");
  resetimg("a3");
  resetimg("b1");
  resetimg("b2");
  resetimg("b3");
  resetimg("c1");
  resetimg("c2");
  resetimg("c3");

  jogada = 0;
  player = 0;
  atual = "url('o.png')";
  cor = "red";
  document.getElementById("jogador").style.color = cor;

  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      mat[i][j] = "";
    }
  }
}

/* ----- ----- */
function resetimg(img){
  document.getElementById(img).style.backgroundImage = null;
}

/* ----- Funcao verifica() ----- */
function verifica() { // Verifica se um dos jogadores ganhou

  for(i=0;i<3;i++) {  // Laco para percorrer a matriz
    
    /* Verifica se as linhas nao estao vazias e se os valores armazenados sao iguais */
    if ( (mat[i][1] != "") && (mat[i][0] == mat[i][1]) && (mat[i][1] == mat[i][2]) )
    {
      return true;  // Caso a condicao tenha sido satisfeita, retorna 'true' indicando vitoria
    }

    /* Verifica se as colunas nao estao vazias e se os valores armazenados sao iguais */
    else if ( (mat[2][i] != "") && (mat[0][i] == mat[1][i]) && (mat[1][i] == mat[2][i]) )
    {
      return true;  // Caso a condicao tenha sido satisfeita, retorna 'true' indicando vitoria
    }
  }

  /* Verifica se a diagonal principal nao esta vazia e se os valores armazenados sao iguais */
  if ( (mat[0][0] != "") && (mat[0][0] == mat[1][1]) && (mat[1][1] == mat[2][2]) )
  {
    return true;
  }

  let win = false;  // Inicializacao da variavel para determinar a vitoria na diagonal secundaria

  /* Verifica se a diagonal secundaria nao esta vazia e se os valores armazenados sao iguais */
  win = ( (mat[0][2] != "") && (mat[2][0] == mat[1][1]) && (mat[1][1] == mat[0][2]) );
  return win;
}