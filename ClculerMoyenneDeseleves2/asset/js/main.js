const stagiairesAfpa = [
  {
    name: "Tao",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Esteban",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Marinche",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Mendoza",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Zia",
    notes: [18, 17, 18, 19, 12],
  },
];

let boutonLesMoyennes = document.getElementById("afficheMoy");
let lesMoyennes = document.getElementById("listMoyennes");
let boutonMeilleurMoy = document.getElementById("meilleure");
let bestmoy = document.getElementById("meilleureMoyenne");
let threeFirst = document.getElementById("threeFirst");
let buttonThreeFirst = document.getElementById("trois");

// calculer la moyenne

for (let i = 0; i < stagiairesAfpa.length; i++) {
  let somme = 0;

  for (let j = 0; j < stagiairesAfpa[i].notes.length; j++) {
    somme = somme + stagiairesAfpa[i].notes[j];
  }
  let myn = (stagiairesAfpa[i].moyenne =
    somme / stagiairesAfpa[i].notes.length);
  
}
//ordonner les moyennes en ordre croissante
function ordonner(tab) {
  for (let k = 0; k < tab.length; k++) {
    let somme = 0;

    for (let j = 0; j < tab[k].notes.length; j++) {
      somme = somme + tab[k].notes[j];
    }
    //console.log(somme);
    let myn2 = (tab[k].moyenne = somme / tab[k].notes.length);
    tab.sort((a, b) => b.moyenne - a.moyenne);
  }
}

ordonner(stagiairesAfpa);
//console.log(stagiairesAfpa[0].name);
//afficher les moyennes
function afficherMoyenne(tab, target) {
  let element1 = "";
  for (let i = 0; i < tab.length; i++) {
    
    element1 +=  "<li>" + tab[i].name + " a obtenu la moyenne: " + tab[i].moyenne + "</li>";
    lesMoyennes.innerHTML = element1;
  }
}


//console.log(stagiairesAfpa);

//afficherMoyenne(stagiairesAfpa);

function bestThree(tab) {
  let element = "";
  for (let i = 0; i < 3; i++) {
    element +=
      "<li>" +
      tab[i].name +
      " a obtenu la moyenne: " +
      tab[i].moyenne +
      "</li>";
    threeFirst.innerHTML = element;
  }
}
//bestThree(stagiairesAfpa);

function meilleureMoyennes(tab, ValeurMax) {
  let ValeuMax = tab[0];
  for (i = 0; i < tab.length; i++) {
    if (tab[i] > ValeurMax) {
      return (ValeurMax = tab[i]);
    }
  }

  bestmoy.innerHTML ="le meilleur éléves est: " +ValeuMax.name +" qui a obtenue la moyenne: " +
    ValeuMax.moyenne;
}

boutonLesMoyennes.addEventListener("click", function() {afficherMoyenne(stagiairesAfpa, lesMoyennes)}, false);

buttonThreeFirst.addEventListener("click", function() {bestThree(stagiairesAfpa)}, false);

boutonMeilleurMoy.addEventListener("click", function() {meilleureMoyennes(stagiairesAfpa, stagiairesAfpa[0].moyenne)}, false);
