function toggleMenu() {
  let headerElement = document.querySelector("header");
  let overlayElement = document.querySelector(".overlay");

  if (headerElement.classList.contains("open")) {
    headerElement.classList.remove("open");
    overlayElement.classList.add("fade-out");
    overlayElement.classList.remove("fade-in");
  } else {
    headerElement.classList.add("open");
    overlayElement.classList.remove("fade-out");
    overlayElement.classList.add("fade-in");
  }
}

document.querySelector(".menu").addEventListener("click", toggleMenu);
