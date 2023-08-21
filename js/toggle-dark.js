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
const ppContent = document.querySelectorAll(".pp-content");

//contact//
const contactForm = document.querySelector(".contact-form");
const contactInfo = document.querySelector(".contact-info");




toggle.onclick = function () {
    toggle.classList.toggle("dark");
    body.classList.toggle("dark");
    section.forEach(link => link.classList.toggle("dark"));
    homeImg.classList.toggle("dark");
    navToggler.classList.toggle("dark");
    navTogglerSpan.classList.toggle("dark");
    navInner.classList.toggle("dark");
    btn.forEach(btn => btn.classList.toggle("dark"));

    //about//
    imgBox.classList.toggle("dark");
    aboutText.classList.toggle("dark");
    aboutTabs.classList.toggle("dark");

    //portfolio//
    ppContent.forEach(item => item.classList.toggle("dark"));

    //contact//
    contactForm.classList.toggle("dark");
    contactInfo.classList.toggle("dark");

    //Color Toggle//
    colorsToggle.classList.toggle("dark");
};