// ACTIVE SECTION //
const toggleDark = document.getElementById("toggle");
const toggleColors = document.getElementById("color-select");
// Ajouter un écouteur d'événements pour le clic sur la page entière
document.addEventListener("click", (e) => {
  // Vérifier si l'élément cliqué a la classe "link-item" et s'il a un attribut "hash" non vide
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    // Activer la superposition pour empêcher les clics multiples
    document.querySelector(".overlay").classList.add("active");
    // Ajouter la classe "hide" à l'élément avec la classe "navbarToggler"
    navbarToggler.classList.add("hide");
    toggleDark.classList.add("hide");
    toggleColors.classList.add("hide")


    // Vérifier si l'élément cliqué a la classe "nav-item"
    if (e.target.classList.contains("nav-item")) {
      // Appeler la fonction pour basculer l'apparence de la barre de navigation
      toggleNavbar();
    } else {
      // Appeler la fonction pour masquer la section active
      hideSection();
      // Ajouter la classe "hide-scrolling" au corps de la page pour masquer le défilement
      document.body.classList.add("hide-scrolling");
    }

    // Après une attente de 500ms (0,5 seconde)
    setTimeout(() => {
      // Retirer la classe "active" et "fade-out" de la section active actuelle
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      // Ajouter la classe "active" à la section correspondant à l'attribut "hash" de l'élément cliqué
      document.querySelector(e.target.hash).classList.add("active");
      // Faire défiler la page en haut
      window.scrollTo(0, 0);
      // Retirer la classe "hide-scrolling" du corps de la page pour réactiver le défilement
      document.body.classList.remove("hide-scrolling");
      // Retirer la classe "hide" à l'élément avec la classe "navbarToggler"
      navbarToggler.classList.remove("hide");
      toggleDark.classList.remove("hide");
      toggleColors.classList.remove("hide");
      // Retirer la classe "active" de la superposition
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});
