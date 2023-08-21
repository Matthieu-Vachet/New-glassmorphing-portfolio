// Fonction pour charger les données JSON à partir du fichier
async function loadJSON() {
  try {
    // Utilisation de la méthode fetch pour récupérer le fichier JSON
    const response = await fetch("/assets/JSON/projets.json");

    // Vérification de la réponse HTTP
    if (!response.ok) {
      throw new Error("Erreur lors du chargement du fichier JSON");
    }

    // Conversion de la réponse en JSON
    const data = await response.json();

    // Retourner les données JSON
    return data;
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors du chargement du fichier JSON :",
      error
    );
    return []; // Retourner un tableau vide en cas d'erreur
  }
}

// Fonction pour générer le code HTML à partir des données JSON
function generatePortfolioItems(data) {
  // Sélectionner l'élément HTML où vous souhaitez afficher les projets
  const rowContainer = document.querySelector(".row-import"); // Sélectionnez la div avec la classe "row"

  // Parcourir les données JSON et générer le code HTML correspondant
  data.forEach((project) => {
    // Créer les éléments HTML
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("portfolio-item");

    const thumbnail = document.createElement("div");
    thumbnail.classList.add("portfolio-item-thumbnail");
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = project.img;
    thumbnailImage.alt = project.title;
    thumbnail.appendChild(thumbnailImage);

    const title = document.createElement("h3");
    title.classList.add("portfolio-item-title");
    title.textContent = project.title;

    const viewProjectBtn = document.createElement("button");
    viewProjectBtn.type = "button";
    viewProjectBtn.classList.add("btn", "view-project-btn");
    viewProjectBtn.textContent = "Voir le projet";

    const details = document.createElement("div");
    details.classList.add("portfolio-item-details");

    const description = document.createElement("div");
    description.classList.add("description");
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerHTML = project.description;
    description.appendChild(descriptionParagraph);

    const generalInfo = document.createElement("div");
    generalInfo.classList.add("general-info");
    const infoList = document.createElement("ul");
    const infoItems = [
      { label: "Crée le: ", value: project.created },
      { label: "Technologie: ", value: project.technologies },
      { label: "Rôle: ", value: project.rôle },
      { label: "Catégorie: ", value: project.catégorie },
      {
        label: "",
        value: `
            <div class="btn-portfolio">
              <button class="btn" onclick="window.open('${project.linkWeb}', '_blank')">En ligne</button>
              <button class="btn" onclick="window.open('${project.linkGithub}', '_blank')">Repo Github</button>
            </div>
          `,
      },
    ];

    
    infoItems.forEach((item) => {
        const listItem = document.createElement("li");
        const label = document.createElement("span");
        label.classList.add("label-text"); // Ajouter la classe "label-text"
        label.textContent = item.label;
        const value = document.createElement("span");
        value.innerHTML = item.value;
        listItem.appendChild(label);
        listItem.appendChild(value);
        infoList.appendChild(listItem);
      });

    generalInfo.appendChild(infoList);

    // Ajouter les éléments au conteneur principal
    details.appendChild(description);
    details.appendChild(generalInfo);

    portfolioItem.appendChild(thumbnail);
    portfolioItem.appendChild(title);
    portfolioItem.appendChild(viewProjectBtn);
    portfolioItem.appendChild(details);

    rowContainer.appendChild(portfolioItem);
  });
}

// charger les données JSON et générer le code HTML une fois qu'elles sont disponibles
loadJSON().then((data) => {
  // Générer le code HTML à partir des données JSON
  generatePortfolioItems(data);

    // Sélectionner tous les nouveaux éléments importés
    const newElements = document.querySelectorAll(".portfolio-item");

    // Ajouter la classe "dark" aux nouveaux éléments
    newElements.forEach((element) => {
      element.classList.add("dark");
    });
});



