'use strict';

/* Menu Mobile */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function() {
    console.log("Toggle clicked");

    navToggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for(let i = 0; i < navbarLinks.length; i++) { navbarLinks[i].addEventListener("click", navToggleFunc); }

/* Active Header on Scroll */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
})