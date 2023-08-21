const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const section = document.querySelectorAll("section");
const homImg = document.querySelector(".home-img .img-box img");
const navToggler = document.querySelector(".nav-toggler");
const navTogglerSpan = document.querySelector(".nav-toggler span");
const navInner = document.querySelector(".nav-inner");
const navInnerUl = document.querySelectorAll(".nav-inner ul li");
const navInnerA = document.querySelectorAll(".nav-inner ul li a");
const btn = document.querySelectorAll(".btn");

//about//
const imgBox = document.querySelector(".about-img .img-box");
const aboutText = document.querySelector(".about-text");
const aboutTabs = document.querySelector(".about-tabs");

//portfolio//
const portfolioItemThumbnail = document.querySelector(".portfolio-item-thumbnail");
const ppContent = document.querySelectorAll(".pp-content");

//contact//
const contactForm = document.querySelector(".contact-form");
const contactInfo = document.querySelector(".contact-info");




toggle.onclick = function () {
    toggle.classList.toggle("dark");
    body.classList.toggle("dark");
    section.forEach(link => link.classList.toggle("dark"));
    homImg.classList.toggle("dark");
    navToggler.classList.toggle("dark");
    navTogglerSpan.classList.toggle("dark");
    navInner.classList.toggle("dark");
    navInnerUl.forEach(link => link.classList.toggle("dark"));
    navInnerA.forEach(link => link.classList.toggle("dark"));
    btn.forEach(btn => btn.classList.toggle("dark"));

    //about//
    imgBox.classList.toggle("dark");
    aboutText.classList.toggle("dark");
    aboutTabs.classList.toggle("dark");

    //portfolio//
    portfolioItemThumbnail.classList.toggle("dark");
    ppContent.forEach(item => item.classList.toggle("dark"));

    //contact//
    contactForm.classList.toggle("dark");
    contactInfo.classList.toggle("dark");
};