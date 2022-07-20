const hamburger = document.querySelector(".hamBurger");
const navLinks = document.querySelector(".navLinks");
const closeNav = document.querySelector(".closeNav");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
});

closeNav.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

closeNav.addEventListener("click", () => {
  hamburger.style.display = "block";
});

