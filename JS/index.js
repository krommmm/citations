//declarations
let quote_container = document.querySelector('.quote_container');
let quote = document.querySelector('.quote');
let bouton = document.getElementById('bouton');
let auteur = document.querySelector(".auteur");

//fonction qui créer un nb aléatoire et l'associe à un tableau de citations
const generateQuotes = () => {
	// Génération d'un nombre aléatoire de de 1 à 21
	let randomNumber = Math.floor(Math.random() * 20) + 1;

	let nouvelleCitation = citations[randomNumber];


  quote.textContent = nouvelleCitation[0];
  auteur.textContent = nouvelleCitation[1];
  
};

// gestionnaire d'evenement pour changer de citation
bouton.addEventListener('click', generateQuotes);


//Sous-exercice qui indique comment capturer un element dans un string
let tabEasy = ["citation,auteur"];
let tabHard = ["citation,citation2,citation3,auteur"];
let stringTabHard = tabEasy.toString();
console.log(stringTabHard.split(",")[1]);


