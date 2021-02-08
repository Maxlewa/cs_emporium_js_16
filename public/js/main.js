// Exécuter la fonction quand on scroll
window.onscroll = function() {myFunction()};

// Navbar et titre
var navbar = document.getElementById("divnav");
var titreheader = document.querySelector("#divh1header");

// Position de la navbar
var sticky = navbar.offsetTop;

// Ajouter/retirer classes
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    titreheader.classList.add("stickytitle");
  } else {
    navbar.classList.remove("sticky");
    titreheader.classList.remove("stickytitle");
  }
}