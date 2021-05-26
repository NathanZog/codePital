

let salleAttente ={
    nom : "Salle d'attente",
    patients : [],
}

let pharmacie = {
    nom : "Multipharma",
    clients : [],
    caisse : 0,
    recevoir(prix){
        this.caisse += prix;
    }
}

let cimetiere = {
    nom : "Cimetiere de Molenbeek",
    tombe : [],
}




export {salleAttente,pharmacie,cimetiere}

