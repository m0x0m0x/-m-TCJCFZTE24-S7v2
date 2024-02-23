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
document.querySelector(".check").addEventListener("click", function () {
  // This statemetn will grab the value which inside the guess class
  const guess = Number(document.querySelector(".guess").value);
  console.log("Guess Value", guess);

  if (!guess) {
    document.querySelector(".message").textContent = "❌Bastard Put Something";
  }

  console.log(`
  How many suck like her ass ? :- 
  ${document.querySelector(".guess").value}
  ${typeof guess}`);
});
