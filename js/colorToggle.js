const colorToggle = document.querySelector(".colorToggle");

// Fonction pour fermer le menu
function closeMenu() {
  colorToggle.classList.remove("open");
}

// Écouter l'événement click sur le bouton
colorToggle.addEventListener("click", (event) => {
  colorToggle.classList.toggle("open");
});

// Écouter l'événement click en dehors du bouton
document.addEventListener("click", (event) => {
  const isClickInsideToggle = colorToggle.contains(event.target);

  if (!isClickInsideToggle) {
    closeMenu();
  }
});