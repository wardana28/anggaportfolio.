const menu = document.querySelector(".menu input");
const navUL = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  navUL.classList.toggle("slide");
});

// footer
document.getElementById("year").textContent = new Date().getFullYear();