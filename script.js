const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});