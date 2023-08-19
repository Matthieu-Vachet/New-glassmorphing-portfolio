const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const section = document.querySelector("section");
const navToggler = document.querySelector(".nav-toggler");
const navTogglerSpan = document.querySelector(".nav-toggler span");
const navInner = document.querySelector(".nav-inner");
const headerLia = document.querySelector(".header li a");
const headerLiaBefor = document.querySelector(".header li a::before");




toggle.onclick = function () {
    toggle.classList.toggle("dark");
    body.classList.toggle("dark");
    section.classList.toggle("dark");
    navToggler.classList.toggle("dark");
    navTogglerSpan.classList.toggle("dark");
    navInner.classList.toggle("dark");
};