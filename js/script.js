// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");




//Extraire l'heure actuel à l'aide de l'objet Date()
let d = new Date()
//Stocker l'heure , minute , seconde  dans des varaiables
let heure = d.getHours()
let minute = d.getMinutes()
let seconde = d.getSeconds()

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
let sDeg = seconde/60*360;
let mDeg = minute/60*360 + sDeg/60;
let hDeg = heure/12*360 + mDeg/12;


// Déplacer les aiguilles 

function demarrerLaMontre() {
    
    sDeg = sDeg + 6;
    AIGUILLESEC.style.transform = 'rotate('+sDeg+'deg)';
    mDeg = mDeg + .1;
    AIGUILLEMIN.style.transform = 'rotate('+mDeg+'deg)';
    hDeg = hDeg + .00416666666;
    AIGUILLEHR.style.transform = 'rotate('+hDeg+'deg)';
    
    
}


// Exercuter la fonction chaque second


var interval = setInterval(demarrerLaMontre, 1000);






