const scrollTopBtn = document.getElementById("scrollTopBtn");

// Mostrar el botón cuando el scroll pasa de 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Subir suavemente al hacer clic
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

