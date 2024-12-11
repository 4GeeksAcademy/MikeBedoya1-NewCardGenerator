/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

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
let cardSymbols = ["Diamonds", "Clubs", "Spades", "Hearts"];
let randomNumber = Math.floor(Math.random() * cardNumbers.length);
let randomSymbol = Math.floor(Math.random() * cardSymbols.length);
let finalSymbol = cardSymbols[randomSymbol];
console.log(finalSymbol);
function getCardsymbol(cardSymbols) {}
