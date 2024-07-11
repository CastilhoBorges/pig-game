"use-strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

currentScore = 0; 

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${dice}.png`;

  if (dice !== 1) {
    current0El.textContent += dice;
  }
});
