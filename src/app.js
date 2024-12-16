/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function NewCart() {
  let cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let cardSymbols = ["♦", "♣", "♠", "♥"];
  let randomNumber =
    cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let randomSymbol =
    cardSymbols[Math.floor(Math.random() * cardSymbols.length)];

  document.getElementById("symbolUp").innerHTML = randomSymbol;
  document.getElementById("symbolDown").innerHTML = randomSymbol;
  document.getElementById("number").innerHTML = randomNumber;

  if (randomSymbol === "♦" || randomSymbol === "♥") {
    document.getElementById("symbolUp").style.color = "red";
    document.getElementById("symbolDown").style.color = "red";
  } else {
    document.getElementById("symbolUp").style.color = "black";
    document.getElementById("symbolDown").style.color = "black";
  }
};
