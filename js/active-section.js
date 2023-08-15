// ACTIVE SECTION //

document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        // activate the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navbarToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")){
        toggleNavbar();
    }
    else {
        hideSection();
        document.body.classList.add("hide-scrolling");
    }
    setTimeout(() =>{
        document.querySelector("section.active").classList.remove("active", "fade-out");
        document.querySelector(e.target.hash).classList.add("active");
        window.scrollTo(0,0);
        document.body.classList.remove("hide-scrolling");
        navbarToggler.classList.remove("hide");
        document.querySelector(".overlay").classList.remove("active");
    },500);
}
});