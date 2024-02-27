"use strict";

//Selections stored into variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  console.log("ClosedFucked");
};

const openModal = function () {
  console.log("ButtonRaped");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Selecting modals with the same name
const btnsShowModal = document.querySelectorAll(".show-modal");
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", openModal);
  btnsShowModal[i].textContent = "👃Sniff";
}
// Function for hiding the modals

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Using escape key event
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  // e.key === "Escape" ? console.log("Fucker") : console.log("no");
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
