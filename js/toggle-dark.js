const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
toggle.onclick = function () {
    toggle.classList.toggle("dark");
    body.classList.toggle("dark");
};