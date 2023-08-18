// TOGGLE NAVBAR //

// Sélectionner l'élément avec la classe "nav-toggler"
const navbarToggler = document.querySelector(".nav-toggler");
// Ajouter un écouteur d'événements pour le clic sur l'élément
navbarToggler.addEventListener("click", () => {
  // Appeler la fonction pour masquer la section active
  hideSection();
  // Appeler la fonction pour basculer l'apparence de la barre de navigation
  toggleNavbar();
  // Ajouter ou supprimer la classe "hide-scrolling" pour masquer ou réactiver le défilement de la page
  document.body.classList.toggle("hide-scrolling");
});

// Fonction pour masquer la section active
function hideSection() {
  // Sélectionner l'élément HTML avec la classe "active" dans la balise "section"
  document.querySelector("section.active").classList.toggle("fade-out");
}

// Fonction pour basculer l'apparence de la barre de navigation
function toggleNavbar() {
  // Sélectionner l'élément HTML avec la classe "header"
  document.querySelector(".header").classList.toggle("active");
}
