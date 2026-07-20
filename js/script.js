
// FAVORIS

const etoiles = document.querySelectorAll(".favori");

etoiles.forEach((etoile) => {
    etoile.addEventListener("click", () => {
    etoile.classList.toggle("actif");

    if (etoile.classList.contains("actif")) {
      etoile.textContent = "★";
    } 
    else {
      etoile.textContent = "☆";
    }
  });
});


//MODALE

const modale = document.querySelector(".modale-overlay");

const echange = document.querySelector(".bouton-echange");

const annulerEnvoi = document.querySelector(".annuler-envoi");

const fermerModale = document.querySelector(".fermer-modale");

if(echange){

echange.addEventListener("click", () => {
    modale.classList.add("ouverte");
});

fermerModale.addEventListener("click", () => {
    modale.classList.remove("ouverte");
});

annulerEnvoi.addEventListener("click", () =>{
  modale.classList.remove("ouverte");
});
}

//FILTRES

const boutonsFiltres = document.querySelectorAll(".type button");
const sections = document.querySelectorAll("section[data-type]");

boutonsFiltres.forEach((bouton) => {

    bouton.addEventListener("click", () => {

        const type = bouton.dataset.type;
        


    sections.forEach((section) => {

    if (!type || section.dataset.type === type) {
        section.classList.remove("cachee");
    } else {
        section.classList.add("cachee");
    }
    });
    if (type) {
      document.documentElement.style.setProperty("--couleur-principale", couleursTypes[type]);
    
    } else {
      document.documentElement.style.setProperty("--couleur-principale", "#d32f2f");
    }
    });
});


const couleursTypes = {
    feu: "#ff7043",
    eau: "#42a5f5",
    plante: "#66bb6a",
    electrik: "#fbc02d"
};


//LOCALSTORAGE

const champEmail = document.querySelector ("#email")

if (champEmail) {

    champEmail.addEventListener("input", () => {
        localStorage.setItem("email", champEmail.value);
    });

    const emailMemorise = localStorage.getItem("email");

    if (emailMemorise) {
        champEmail.value = emailMemorise;
    }
}





// API
for (let i = 1; i <= 500; i = i + 1) {
    
fetch("https://pokeapi.co/api/v2/pokemon/" + i)

.then((reponse)=> reponse.json())
.then((pokemon) => {
  afficherCarte(pokemon);
});


}
const traductionTypes = {
    fire: "feu",
    water: "eau",
    grass: "plante",
    electric: "electrik"
};




function afficherCarte(pokemon) {

    const typeFr = traductionTypes[pokemon.types[0].type.name];
    if (!typeFr) {
        return;
    }

    const carte = document.createElement("article");
    carte.className = "carte";
    carte.dataset.type = typeFr;

    carte.innerHTML = `
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <div class="detail-carte">
            <span class="badge">${typeFr}</span>
            <button class="favori">☆</button>
        </div>
    `;

    const grille = document.querySelector(`section[data-type="${typeFr}"] .grille`);
    grille.appendChild(carte);

    const etoile = carte.querySelector(".favori");
    etoiles.forEach
}

