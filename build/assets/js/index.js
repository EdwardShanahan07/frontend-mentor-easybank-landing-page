function toggleMenu() {
  document.querySelector("header").classList.toggle("active");
}

document.querySelector(".menu").addEventListener("click", toggleMenu);
