const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const section = document.querySelectorAll("section");
const homeImg = document.querySelector(".home-img");
const navToggler = document.querySelector(".nav-toggler");
const navTogglerSpan = document.querySelector(".nav-toggler span");
const navInner = document.querySelector(".nav-inner");
const btn = document.querySelectorAll(".btn");
const colorsToggle = document.querySelector(".color-select");

//about//
const imgBox = document.querySelector(".about-img");
const aboutText = document.querySelector(".about-text");
const aboutTabs = document.querySelector(".about-tabs");

//portfolio//
const portfolioItems = document.querySelectorAll(".portfolio-item");
const ppContent = document.querySelectorAll(".pp-content");

//contact//
const contactForm = document.querySelector(".contact-form");
const socialLinks = document.querySelector(".social-links");
const contactInfo = document.querySelector(".contact-info");

let isDarkMode = false;

// Déclarer la variable newElements en dehors de la portée de la fonction .then()
let newElements;

// charger les données JSON et générer le code HTML une fois qu'elles sont disponibles
loadJSON().then((data) => {
  // Générer le code HTML à partir des données JSON
  generatePortfolioItems(data);

  // Sélectionner tous les nouveaux éléments importés
  newElements = document.querySelectorAll(".portfolio-item");
});

// Gestionnaire d'événements onclick pour le bouton de bascule du mode sombre
toggle.onclick = function () {
  // Toggle the value of isDarkMode
  isDarkMode = !isDarkMode;

  // Toggle the "dark" class on toggle element
  toggle.classList.toggle("dark");

  // Toggle the "dark" class on body element
  body.classList.toggle("dark");

  // Toggle the "dark" class on each section link
  section.forEach((link) => link.classList.toggle("dark"));

  // Toggle the "dark" class on home image element
  homeImg.classList.toggle("dark");

  // Toggle the "dark" class on nav toggler element
  navToggler.classList.toggle("dark");

  // Toggle the "dark" class on nav toggler span element
  navTogglerSpan.classList.toggle("dark");

  // Toggle the "dark" class on nav inner element
  navInner.classList.toggle("dark");

  // Toggle the "dark" class on each btn element
  btn.forEach((btn) => btn.classList.toggle("dark"));

  // Toggle the "dark" class on about related elements
  imgBox.classList.toggle("dark");
  aboutText.classList.toggle("dark");
  aboutTabs.classList.toggle("dark");

  // Toggle the "dark" class on portfolio related elements
  portfolioItems.forEach((item) => item.classList.toggle("dark"));
  ppContent.forEach((item) => item.classList.toggle("dark"));

  // Toggle the "dark" class on contact related elements
  contactForm.classList.toggle("dark");
  contactInfo.classList.toggle("dark");
  socialLinks.classList.toggle("dark");

  // Toggle the "dark" class on color toggle element
  colorsToggle.classList.toggle("dark");

  // Vérifier si le mode sombre est activé
  if (isDarkMode) {
    // Ajouter la classe "dark" aux nouveaux éléments
    newElements.forEach((element) => {
      element.classList.add("dark");
    });
  } else {
    // Supprimer la classe "dark" des nouveaux éléments
    newElements.forEach((element) => {
      element.classList.remove("dark");
    });
  }
};
