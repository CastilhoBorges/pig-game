"use-strict";
// Scores and Current Variables
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

// Player Variables
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// Btns Variables
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Dice
const diceEl = document.querySelector(".dice");

let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
diceEl.classList.add("hidden");

// Função para mudar o player 
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Botão de jogar o dado 
btnRoll.addEventListener("click", () => {
  // Aleatoriedade do Dado
  const randomDice = Math.trunc(Math.random() * 6) + 1;

  // Mostrar o dado e a imagem mudar de acordo com o numeor do Dado
  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${randomDice}.png`;

  if (randomDice !== 1) {
    currentScore += randomDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});
