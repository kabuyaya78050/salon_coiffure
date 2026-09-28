const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});