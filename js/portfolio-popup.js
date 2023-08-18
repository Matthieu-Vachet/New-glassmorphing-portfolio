// Portfolio Item details popup //

// Ajouter un écouteur d'événements pour le clic sur la page entière
document.addEventListener("click", (e) => {
  // Vérifier si l'élément cliqué a la classe "view-project-btn"
  if (e.target.classList.contains("view-project-btn")) {
    // Appeler la fonction pour basculer l'affichage de la fenêtre contextuelle du détail de l'élément du portfolio
    togglePortfolioPopup();
    // Faire défiler la fenêtre contextuelle en haut de la page
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    // Appeler la fonction pour afficher les détails de l'élément du portfolio sélectionné
    portfolioItemDetails(e.target.parentElement);
  }
});

// Fonction pour basculer l'affichage de la fenêtre contextuelle du détail de l'élément du portfolio
function togglePortfolioPopup() {
  // Ajouter ou supprimer la classe "open" à la fenêtre contextuelle du détail de l'élément du portfolio
  document.querySelector(".portfolio-popup").classList.toggle("open");
  // Ajouter ou supprimer la classe "hide-scrolling" au corps de la page pour masquer ou réactiver le défilement
  document.body.classList.toggle("hide-scrolling");
  // Ajouter ou supprimer la classe "fade-out" à l'élément avec la classe "main" pour modifier son apparence
  document.querySelector(".main").classList.toggle("fade-out");
}

// Ajouter un écouteur d'événements pour le clic sur l'élément avec la classe "pp-close"
document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

// Masquer la fenêtre contextuelle lorsque l'on clique à l'extérieur de celle-ci
document.addEventListener("click", (e) => {
  // Vérifier si l'élément cliqué a la classe "pp-inner"
  if (e.target.classList.contains("pp-inner")) {
    // Appeler la fonction pour basculer l'affichage de la fenêtre contextuelle du détail de l'élément du portfolio
    togglePortfolioPopup();
  }
});

// Fonction pour afficher les détails de l'élément du portfolio sélectionné
function portfolioItemDetails(portfolioItem) {
  // Modifier la source de l'image dans la fenêtre contextuelle pour correspondre à l'image de l'élément du portfolio sélectionné
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  // Modifier le contenu du titre dans la fenêtre contextuelle pour correspondre au titre de l'élément du portfolio sélectionné
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  // Modifier le contenu du corps dans la fenêtre contextuelle pour correspondre aux détails de l'élément du portfolio sélectionné
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}
