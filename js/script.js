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

// ================ FAVORIS ================

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
