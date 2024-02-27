"use strict";

//Selections stored into variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// Selecting modals with the same name
const btnsShowModal = document.querySelectorAll(".show-modal");
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].textContent = "👃Sniff";
  btnsShowModal[i].addEventListener("click", function () {
    console.log("ButtonRaped");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  // Adding an event-handler
}
