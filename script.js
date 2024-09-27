const menu = document.querySelector(".menu input");
const navUL = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  navUL.classList.toggle("slide");
});

// animasi ketik
var typed = new Typed("#text", {
  strings: ["Hi my name is "],
  typeSpeed: 50,
  cursorChar: "",
});

var typed = new Typed("#text-1", {
  strings: [" Angga", " Tri", " Wardana"],
  typeSpeed: 50,
  cursorChar: "",
  startDelay: 1000,
  loop: true,
});

var typed = new Typed("#text-2", {
  strings: ["Frontend Developer"],
  typeSpeed: 50,
  cursorChar: "",
  startDelay: 1500,
});

// footer
document.getElementById("year").textContent = new Date().getFullYear();