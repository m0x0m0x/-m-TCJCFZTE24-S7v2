"use strict";

// // This targets an element
// console.log(document.querySelector(".message").textContent);

// // Changing the text content after targeting with the command below
// document.querySelector(".message").textContent = "🍑 Correct Number";
// console.log(document.querySelector(".message").textContent);

// // Change Secret number
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// // Change the input field
// document.querySelector(".guess").value = 69;
// console.log(document.querySelector(".guess").value);

// Setting the function on check button L20 index.html

// Definition ot the secret number
const numberPussy = Math.trunc(Math.random() * 20) + 1;

// Increasing and decreasing the score - Also called state variable
let scorePanty = 20;

// Implementing Game Functionality
document.querySelector(".check").addEventListener("click", function () {
  // This statemetn will grab the value which inside the guess class
  const guess = Number(document.querySelector(".guess").value);
  console.log("Guess Value", guess);

  if (!guess) {
    document.querySelector(".message").textContent = "❌Bastard Put Something";
    // Starting tests below
  } else if (guess === numberPussy) {
    // Success
    document.querySelector(".message").textContent = "FUCKALLNIGHT";
    document.querySelector(".message").classList.add("message-success");
    scorePanty++;
    document.querySelector(".score").textContent = scorePanty;
    document.querySelector(".number").textContent = numberPussy;

    // Targeting body styles
    document.querySelector("body").style.backgroundColor = "#052e16";
    document.querySelector(".number").style.backgroundColor = "#052e16";
    document.querySelector(".number").style.color = "#10b981";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector(".number").style.border = "10px dotted";
    document.querySelector("h1").textContent = "Drink Her Piss";

    // When too high
  } else if (guess > numberPussy) {
    // Sub condition - If
    if (scorePanty > 1) {
      document.querySelector(".message").textContent = "🤬TOO HIGH FAG";
      document.querySelector(".message").classList.remove("message-success");
      // When guess to high subtract 1
      scorePanty--;
      document.querySelector(".score").textContent = scorePanty;
    } else {
      document.querySelector(".message").textContent = "🤬RAPED";
      document.querySelector(".message").classList.add("message-lost");
      document.querySelector("body").style.backgroundColor = "#450a0a";
      document.querySelector("h1").textContent = "☠️☠️☠️☠️☠️";
    }

    // When too low
  } else if (guess < numberPussy) {
    if (scorePanty > 1) {
      document.querySelector(".message").textContent = "😡TOO LOW BITCH";
      document.querySelector(".message").classList.remove("message-success");
      // When guess to high subtract 1
      scorePanty--;
      document.querySelector(".score").textContent = scorePanty;
    } else {
      document.querySelector(".message").textContent = "🤬RAPED";
      document.querySelector(".message").classList.add("message-lost");
      document.querySelector("body").style.backgroundColor = "#450a0a";
      document.querySelector("h1").textContent = "☠️☠️☠️☠️☠️";
    }
  }

  // This is for you reference
  console.log(`
  How many suck like her ass ? :- 
  ${document.querySelector(".guess").value}
  ${typeof guess}`);
});

//implementing reset functionality
document.querySelector(".again").addEventListener("click", function () {
  // Restoring initial variables
  document.querySelector(".score").textContent = 0;
  document.querySelector(".number").textContent = "?";

  // Restoring initial conditions of -
  // message, number, score, guess input field

  // Message
  document.querySelector(".message").textContent = "Start guessing....";
  document.querySelector(".message").classList.remove("message-lost");
  document.querySelector(".message").classList.remove("message-success");
  document.querySelector(".guess").value = " ";

  //  Color restore and width
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector(".number").style.backgroundColor = "";
  document.querySelector(".number").style.color = "";
  document.querySelector(".number").style.width = "";
  document.querySelector(".number").style.border = "";
});
