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
document.querySelector(".number").textContent = numberPussy;

// Increasing and decreasing the score - Also called state variable
let scorePanty = 20;

document.querySelector(".check").addEventListener("click", function () {
  // This statemetn will grab the value which inside the guess class
  const guess = Number(document.querySelector(".guess").value);
  console.log("Guess Value", guess);

  if (!guess) {
    document.querySelector(".message").textContent = "❌Bastard Put Something";
    // Starting tests below
  } else if (guess === numberPussy) {
    // Sucsess
    document.querySelector(".message").textContent = "FUCKALLNIGHT";
    document.querySelector(".message").classList.add("message-success");
    scorePanty++;
    document.querySelector(".score").textContent = scorePanty;
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
    }
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
    }
  }

  // This is for you reference
  console.log(`
  How many suck like her ass ? :- 
  ${document.querySelector(".guess").value}
  ${typeof guess}`);
});
