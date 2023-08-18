// Lorsque la fenêtre se charge
window.addEventListener("load", () => {
  // Retirer la classe "hidden" de l'élément avec la classe "main"
  document.querySelector(".main").classList.remove("hidden");
  // Ajouter la classe "active" à l'élément avec la classe "home-section"
  document.querySelector(".home-section").classList.add("active");
  // Afficher une animation de chargement de page
  // Ajouter la classe "fade-out" à l'élément avec la classe "page-loader"
  document.querySelector(".page-loader").classList.add("fade-out");
  // Après une attente de 1500ms (1,5 seconde)
  setTimeout(() => {
    // Masquer l'élément avec la classe "page-loader"
    document.querySelector(".page-loader").style.display = "none";
  }, 1500);
});
