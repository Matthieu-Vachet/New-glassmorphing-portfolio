// ABOUT TABS //

// Sélectionner l'élément HTML avec la classe "about-tabs"
const tabsContainer = document.querySelector(".about-tabs");
// Sélectionner l'élément HTML avec la classe "about-section"
aboutSection = document.querySelector(".about-section");

// Ajouter un écouteur d'événements pour le clic sur l'élément avec la classe "about-tabs"
tabsContainer.addEventListener("click", (e) => {
  // Vérifier si l'élément cliqué a la classe "tab-item" et n'a pas la classe "active"
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    // Retirer la classe "active" de l'élément actuellement actif
    tabsContainer.querySelector(".active").classList.remove("active");
    // Ajouter la classe "active" à l'élément cliqué
    e.target.classList.add("active");
    // Récupérer la valeur de l'attribut "data-target" de l'élément cliqué
    const target = e.target.getAttribute("data-target");
    // Retirer la classe "active" de l'élément avec la classe "tab-content" qui est actuellement actif
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    // Ajouter la classe "active" à l'élément avec l'ID correspondant à la valeur de "data-target"
    aboutSection.querySelector(target).classList.add("active");
  }
});
