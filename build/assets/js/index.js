function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
  document.querySelector(".navbar__list").classList.toggle("active");
}

document.querySelector(".menu").addEventListener("click", toggleMenu);
