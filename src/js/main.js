import {Patient,Medecin,Diagnostique,Traitement} from "./classes.js";

import {salleAttente,pharmacie,cimetiere} from "./objet.js";

let marcus = new Patient ("Marcus","mal indenté",100,"vide","malade");
let optimus = new Patient ("Optimus","unsave",200,"vide","malade");
let sangoku = new Patient ("Sangoku",404,80,"vide","malade");
let darthvador = new Patient ("Darth Vador","azmatique",110,"vide","malade");
let semicolon = new Patient ("Semicolon","syntaxError",60,"vide","malade");


let ctrlmajF = new Traitement("ctrl+maj+f",60);
let saveonfocuschange = new Traitement("saveOnFocusChange",60);
let checklinkrelation = new Traitement("CheckLinkRelation",35);
let ventoline = new Traitement ("Ventoline",40);
let f12doc = new Traitement ("f12+doc",20);

let zieger = new Medecin ("Zieger",0,[],50)
let patient = new Diagnostique (marcus.maladie,"")



salleAttente.patients.push(marcus,optimus,sangoku,darthvador,semicolon);
console.log(salleAttente.patients)
console.log(`Il y a ${salleAttente.patients.length} personnes dans la ${salleAttente.nom}.`)

marcus.seDeplacer(salleAttente.patients,zieger.cabinet)
console.log(salleAttente.patients,zieger.cabinet)
console.log(`${marcus.nom} est entré chez ${zieger.nom}`)
// console.log(`La maladie de ${marcus.nom} est ${marcus.maladie}`)
console.log(`Le traitement de ${marcus.nom} est ${patient.traitement}`);

marcus.payer(50);
console.log(`${marcus.nom} a bien payé ${zieger.consultation}€ au docteur ${zieger.nom}`);
zieger.recevoir();

marcus.seDeplacer(zieger.cabinet,pharmacie.clients)
console.log(`${marcus.nom} a quitté le cabinet`);
console.log(`${marcus.nom} est allé chez ${pharmacie.nom}`)
console.log(zieger.cabinet,pharmacie.clients)

marcus.payer(ctrlmajF.prix);





