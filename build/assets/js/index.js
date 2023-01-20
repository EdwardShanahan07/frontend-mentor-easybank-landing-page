function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");

  document.querySelector(".navbar__list").classList.toggle("toggle-list");
}

document.querySelector(".menu").addEventListener("click", toggleMenu);
