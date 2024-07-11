"use-strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

let gameState, scores, currentScore, activePlayer;

// Função para iniciar o jogo
const init = function () {
  gameState = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

// Função para mudar o player
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Botão de girar o dado
btnRoll.addEventListener("click", () => {
  // Condição para definir que estado o jogo esta
  if (gameState) {
    // Ramdomização do dado
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Exibir o display do dado de acordo com o numero da ramdom
    diceEl.classList.remove("hidden");
    diceEl.src = `img/dice-${dice}.png`;

    /*
    Condição para definir se o dado for diferente de 1 o jogador pode continuar jogando e aumentando sua pontuação. 
    */
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Caso caia 1, mudamos o jogado com a função feita mais para cima
      switchPlayer();
    }
  }
});

// Botão para salvar a pontuação
btnHold.addEventListener("click", () => {
  if (gameState) {
    // Expressão que adiciona a pontuação a score do player na array criada
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    /*
    Condição que defini se o jogador ganhou de acordo com seu score, com isso o estado do jogo vai para false e a parte do jogador que ganhou fica com um display diferente
    */
    if (scores[activePlayer] >= 5) {
      diceEl.classList.add("hidden");
      gameState = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(".player--active");
    } else {
      // Caso ele so salve a pontuação e esteja abaixo do numeor ele muda o player
      switchPlayer();
    }
  }
});

// Botão para reiniciar o game
btnNew.addEventListener("click", init);
