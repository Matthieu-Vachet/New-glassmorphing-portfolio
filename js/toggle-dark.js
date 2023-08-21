const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const section = document.querySelector("section");
const homImg = document.querySelector(".home-img .img-box img");
const navToggler = document.querySelector(".nav-toggler");
const navTogglerSpan = document.querySelector(".nav-toggler span");
const navInner = document.querySelector(".nav-inner");
const navInnerUl = document.querySelectorAll(".nav-inner ul li");
const navInnerA = document.querySelectorAll(".nav-inner ul li a");
const btn = document.querySelectorAll(".btn");




toggle.onclick = function () {
    toggle.classList.toggle("dark");
    body.classList.toggle("dark");
    section.classList.toggle("dark");
    homImg.classList.toggle("dark");
    navToggler.classList.toggle("dark");
    navTogglerSpan.classList.toggle("dark");
    navInner.classList.toggle("dark");
    navInnerUl.forEach(link => link.classList.toggle("dark"));
    navInnerA.forEach(link => link.classList.toggle("dark"));
    btn.forEach(btn => btn.classList.toggle("dark"));
};