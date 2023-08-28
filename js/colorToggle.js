const colorToggle = document.querySelector(".colorToggle");
const bodyElement = document.querySelector("body");

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

// Écouter l'événement click sur les couleurs du menu
const colorItems = document.querySelectorAll(".menu-color li");
colorItems.forEach((colorItem) => {
  colorItem.addEventListener("click", (event) => {
    const colorClass = event.target.classList[2]; // Obtenir la classe de couleur (par exemple, "orange", "red", etc.)
    bodyElement.className = ""; // Réinitialiser toutes les classes existantes sur l'élément body
    bodyElement.classList.add(colorClass); // Ajouter la nouvelle classe de couleur à l'élément body
    closeMenu();
  });
});

