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
console.log(
  ` %c
Random Generated Number - [ ${numberPussy} ]
`,
  "color: #15F5BA"
);

// Increasing and decreasing the score - Also called state variable
let scorePanty = 20;
let highscore = 0;

// Function for displayMessage refactoring occurrences for
// document.querySelector(".message").textContent
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Implementing Game Functionality
document.querySelector(".check").addEventListener("click", function () {
  // This statemetn will grab the value which inside the guess class
  const guess = Number(document.querySelector(".guess").value);
  console.log("Guess Value", guess);

  // Display error when nothing entered
  if (!guess) {
    // document.querySelector(".message").textContent = "❌Bastard Put Something";
    displayMessage("❌Bastard Put Something");

    // Starting tests below -- Change color scheme on success
  } else if (guess === numberPussy) {
    // Success
    // document.querySelector(".message").textContent = "FUCKALLNIGHT";
    displayMessage("FUCK 👠ALL 👠NIGHT");
    document.querySelector(".message").classList.add("message-success");
    scorePanty++;
    document.querySelector(".score").textContent = scorePanty;
    document.querySelector(".number").textContent = numberPussy;

    // Success - Targeting body styles
    document.querySelector("body").style.backgroundColor = "#052e16";
    document.querySelector(".number").style.backgroundColor = "#052e16";
    document.querySelector(".number").style.color = "#10b981";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector(".number").style.border = "10px dotted";
    document.querySelector("h1").textContent = "Drink Her Piss";

    // Highscore replace here
    if (scorePanty > highscore) {
      highscore === scorePanty;
      document.querySelector(".highscore").textContent = highscore;
    }

    //==== Code Refactoring section condense both consitions to one =====
  } else if (guess != numberPussy) {
    // When too high
    if (scorePanty > 1) {
      // document.querySelector(".message").textContent =
      //ternary operatoror
      // guess > numberPussy ? "🤬TOO HIGH FAG" : "😡TOO LOW BITCH";
      displayMessage(
        guess > numberPussy ? "🤬TOO HIGH FAG" : "😡TOO LOW BITCH"
      );
      document.querySelector(".message").classList.remove("message-success");
      // When guess to high subtract 1
      scorePanty--;
      document.querySelector(".score").textContent = scorePanty;
    } else {
      // document.querySelector(".message").textContent = "🤬RAPED";
      displayMessage("🤬RAPED");
      document.querySelector(".message").classList.add("message-lost");
      document.querySelector("body").style.backgroundColor = "#450a0a";
      document.querySelector("h1").textContent = "☠️☠️☠️☠️☠️";
    }
  }
  //   // When number too high
  // } else if (guess > numberPussy) {
  //   // When too low
  // } else if (guess < numberPussy) {
  //   if (scorePanty > 1) {
  //     document.querySelector(".message").textContent = "😡TOO LOW BITCH";
  //     document.querySelector(".message").classList.remove("message-success");
  //     // When guess to high subtract 1
  //     scorePanty--;
  //     document.querySelector(".score").textContent = scorePanty;
  //   } else {
  //     document.querySelector(".message").textContent = "🤬RAPED";
  //     document.querySelector(".message").classList.add("message-lost");
  //     document.querySelector("body").style.backgroundColor = "#450a0a";
  //     document.querySelector("h1").textContent = "☠️☠️☠️☠️☠️";
  //   }
  // }

  // ==== End Code Refactoring section ====

  // This is for you reference
  console.log(`
  How many suck like her ass ? :- 
  ${document.querySelector(".guess").value}
  ${typeof guess}`);
});

//implementing reset functionality
document.querySelector(".again").addEventListener("click", function () {
  scorePanty = 20;
  const numberPussy = Math.trunc(Math.random() * 20) + 1;

  // Restoring initial variables
  document.querySelector(".score").textContent = scorePanty;
  document.querySelector(".number").textContent = "?";

  // Restoring initial conditions of -
  // message, number, score, guess input field

  // Message
  // document.querySelector(".message").textContent = "Start guessing....";
  displayMessage("Start guessing....");
  document.querySelector(".message").classList.remove("message-lost");
  document.querySelector(".message").classList.remove("message-success");
  document.querySelector(".guess").value = " ";

  //  Color restore and width
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector(".number").style.backgroundColor = "";
  document.querySelector(".number").style.color = "";
  document.querySelector(".number").style.width = "";
  document.querySelector(".number").style.border = "";
  document.querySelector("h1").textContent = "";
});
