// console.log("PokéTrok JS chargé !");

// const prenom="Baptiste";
// console.log(prenom);

// let total=0;
// total++;
// total--;
// total=total+5
// total-=10
// console.log(total)

// if(total>2){
//     console.log("Total sup à deux");
// }

// else { console.log("peu"); }

// const type = ["feu", "eau", "plante", "electrik"];
// type[0]
// type.length

// type.forEach((t) => {console.log("Type: " + t);});

// document.querySelector("h1").textContent ="Hey"




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

const email = document.querySelector ("# email")