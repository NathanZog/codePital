import {Patient,Medecin,Diagnostique,Traitement,Maison} from "./classes.js";

import {salleAttente,pharmacie,cimetiere,chat} from "./objet.js";

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
let patient2 = new Diagnostique (optimus.maladie,"")
let patient3 = new Diagnostique (sangoku.maladie,"")
let patient4 = new Diagnostique (darthvador.maladie,"")
let patient5 = new Diagnostique (semicolon,"")

let maisonoptimus = new Maison ("Cybertron",[])
let maisondarthvador = new Maison ("Mustafar",[])



salleAttente.patients.push(marcus,optimus,sangoku,darthvador,semicolon);
console.log(salleAttente.patients)
console.log(`Il y a ${salleAttente.patients.length} personnes dans la ${salleAttente.nom}.`)

chat.miauler();

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
marcus.seDeplacer(pharmacie.clients,cimetiere.tombe);
// console.log(pharmacie.clients,cimetiere.tombe);
console.log(`${marcus.nom} n'as pas payé son traitement il a donc naturellement fini au ${cimetiere.nom}`)







optimus.seDeplacer(salleAttente.patients,zieger.cabinet)
console.log(salleAttente.patients,zieger.cabinet)
console.log(`${optimus.nom} est entré chez ${zieger.nom}`)
// console.log(`La maladie de ${marcus.nom} est ${marcus.maladie}`)
console.log(`Le traitement de ${optimus.nom} est ${patient2.traitement}`);

optimus.payer(50);
console.log(`${optimus.nom} a bien payé ${zieger.consultation}€ au docteur ${zieger.nom}`);
zieger.recevoir();

optimus.seDeplacer(zieger.cabinet,pharmacie.clients)
console.log(`${optimus.nom} a quitté le cabinet`);
console.log(`${optimus.nom} est allé chez ${pharmacie.nom}`)
console.log(zieger.cabinet,pharmacie.clients)

optimus.payer(saveonfocuschange.prix);
console.log(`${optimus.nom} a payé son traitement et se sent donc mieux`)
optimus.seDeplacer(pharmacie.clients,maisonoptimus.salon)
// console.log(pharmacie.clients,maisonoptimus.salon);
console.log(`${optimus.nom} est rentré sur ${maisonoptimus.nom}`)




sangoku.seDeplacer(salleAttente.patients,zieger.cabinet)
console.log(salleAttente.patients,zieger.cabinet)
console.log(`${sangoku.nom} est entré chez ${zieger.nom}`)
// console.log(`La maladie de ${sangoku.nom} est ${sangoku.maladie}`)
console.log(`Le traitement de ${sangoku.nom} est ${patient3.traitement}`);

sangoku.payer(50);
console.log(`${sangoku.nom} a bien payé ${zieger.consultation}€ au docteur ${zieger.nom}`);
zieger.recevoir();

sangoku.seDeplacer(zieger.cabinet,pharmacie.clients)
console.log(`${sangoku.nom} a quitté le cabinet`);
console.log(`${sangoku.nom} est allé chez ${pharmacie.nom}`)
console.log(zieger.cabinet,pharmacie.clients)

sangoku.payer(ctrlmajF.prix);
sangoku.seDeplacer(pharmacie.clients,cimetiere.tombe);
// console.log(pharmacie.clients,cimetiere.tombe);
console.log(`${sangoku.nom} n'as pas payé son traitement il a donc naturellement fini au ${cimetiere.nom}`)




darthvador.seDeplacer(salleAttente.patients,zieger.cabinet)
console.log(salleAttente.patients,zieger.cabinet)
console.log(`${darthvador.nom} est entré chez ${zieger.nom}`)
// console.log(`La maladie de ${marcus.nom} est ${marcus.maladie}`)
console.log(`Le traitement de ${darthvador.nom} est ${patient4.traitement}`);

darthvador.payer(50);
console.log(`${darthvador.nom} a bien payé ${zieger.consultation}€ au docteur ${zieger.nom}`);
zieger.recevoir();

darthvador.seDeplacer(zieger.cabinet,pharmacie.clients)
console.log(`${darthvador.nom} a quitté le cabinet`);
console.log(`${darthvador.nom} est allé chez ${pharmacie.nom}`)
console.log(zieger.cabinet,pharmacie.clients)

darthvador.payer(saveonfocuschange.prix);
console.log(`${darthvador.nom} a payé son traitement et se sent donc mieux`)
darthvador.seDeplacer(pharmacie.clients,maisondarthvador.salon)
// console.log(pharmacie.clients,maisondarthvador.salon);
console.log(`${darthvador.nom} est rentré sur ${maisondarthvador.nom}`)


semicolon.seDeplacer(salleAttente.patients,zieger.cabinet)
console.log(salleAttente.patients,zieger.cabinet)
console.log(`${semicolon.nom} est entré chez ${zieger.nom}`)
// console.log(`La maladie de ${semicolon.nom} est ${semicolon.maladie}`)
console.log(`Le traitement de ${semicolon.nom} est ${patient5.traitement}`);

semicolon.payer(50);
console.log(`${semicolon.nom} a bien payé ${zieger.consultation}€ au docteur ${zieger.nom}`);
zieger.recevoir();

semicolon.seDeplacer(zieger.cabinet,pharmacie.clients)
console.log(`${semicolon.nom} a quitté le cabinet`);
console.log(`${semicolon.nom} est allé chez ${pharmacie.nom}`)
console.log(zieger.cabinet,pharmacie.clients)

semicolon.payer(ctrlmajF.prix);
semicolon.seDeplacer(pharmacie.clients,cimetiere.tombe);
// console.log(pharmacie.clients,cimetiere.tombe);
console.log(`${semicolon.nom} n'as pas payé son traitement il a donc naturellement fini au ${cimetiere.nom}`)




