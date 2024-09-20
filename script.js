document.addEventListener("DOMContentLoaded", function () {
  new TypeIt(document.querySelector("h1"), {
    strings: ["This is my string!"],
  }).go();
});
