/*
PSEUDOCODE
When the width of the device is below certain length
it should pack all the links into one hamburger
*/
const hamburger = document.querySelector(".hamburger");
const pages = document.querySelector(".pages");
const socials = document.querySelector(".socials");
hamburger.addEventListener("click", function () {
  pages.classList.toggle("hide");
  socials.classList.toggle("hide");
  // TOGGLE:If the class exists, it removes the class.
  // If the class does not exist, it adds the class.
});
