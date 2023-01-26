function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

document.querySelector(".menu").addEventListener("click", toggleMenu);
