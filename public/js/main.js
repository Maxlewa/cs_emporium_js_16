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
  formDeux.style.display = "none"
  formUn.style.display = "block"
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

// INSCRIPTION / CONNEXION

var buttonIns = document.getElementById("btninscription")
var buttonCo = document.getElementById("btnconnexion")
var formDeux = document.getElementById("formulairedeux")
var formUn = document.getElementById("formulaireun")

buttonIns.onclick = function() {
  formDeux.style.display = "block"
  formUn.style.display = "none"
}

buttonCo.onclick = function() {
  formUn.style.display = "block"
  formDeux.style.display = "none"
}

// DARK MODE

let btnBlack = document.querySelector("#buttonblack")
let btnWhite = document.querySelector("#buttonwhite")

let titreMain = document.querySelector("#h1main")
let divNav = document.querySelector("#divnav")
let navEl = document.querySelectorAll(".navelement");
let textLigneun = document.querySelectorAll(".texteligneun")
let recentpTitle = document.querySelector("#h4recentproducts")

btnBlack.addEventListener('click', noir)
btnWhite.addEventListener('click', white)

function noir() {
  document.body.style.background = 'black';
  divNav.style.background = 'black';
  titreMain.style.color = 'white';
  recentpTitle.style.color = 'white';
  // LINKS
  navEl.forEach(e => {
    e.style.color = 'white'
  });
  // TEXTES LIGNES 1
  textLigneun.forEach(e => {
    e.style.color = 'white'
  });
}

function white() {
  document.body.style.background = 'white';
  divNav.style.background = 'white';
  titreMain.style.color = 'black';
  recentpTitle.style.color = 'black';
  // LINKS
  navEl.forEach(e => {
    e.style.color = 'black'
  });
  // TEXTES LIGNES 1
  textLigneun.forEach(e => {
    e.style.color = 'black'
  });
}

