
// Quando clicco l'icona devono apparire i link

const openMenu = document.getElementById("open-menu");
const hamburgerMenu = document.getElementById("hamburger-menu");

openMenu.addEventListener('click',
function() {
    hamburgerMenu.style.display = "block";
}
);

const closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener('click',
function() {
    hamburgerMenu.style.display = "none";
}
);

