// NAVBAR

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

// MODAL

// Cibler modal
var modal = document.getElementById("myModal");

// Le bouton connexion qui ouvre le modal
var btn = document.getElementById("buttonconnexion");

// Le bouton x pour fermer la fenêtre
var span = document.getElementsByClassName("close")[0];

// Ouvrir le modal en cliquant sur connexion
btn.onclick = function() {
  modal.style.display = "block";
}

// Fermer le modal en cliquant sur x
span.onclick = function() {
  modal.style.display = "none";
}

// Fermer le modal en cliquant à l'extérieur de la fenêtre
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}