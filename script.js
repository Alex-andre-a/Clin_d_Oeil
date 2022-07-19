const hamburger = document.querySelector(".hamBurger");
const navLinks = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});