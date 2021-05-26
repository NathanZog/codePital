class Patient {
    constructor(nom,maladie,argent,poche,sante){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.sante = sante;
        this.seDeplacer=(depart,arrivee)=>{
            arrivee.push(this)
            depart.splice(depart.indexOf(this),1)
        }
        this.payer= (prix)=>{
            this.argent -= prix;
            // if(this.argent < 0){
            //     console.log(`${this.nom} n'a pas pu payer son traitement`);
            // }else{
            //     console.log(`${this.nom} a payé son traitement`); 
            // }
        }
    }
}

class Medecin {
    constructor(nom,argent,cabinet,consultation) {
        this.nom = nom;
        this.argent = argent;
        this.cabinet = [];
        this.consultation = 50;
        this.recevoir = () =>{
            this.argent += this.consultation;
        }
    }
}

class Diagnostique {
    constructor(maladie,traitement){
        this.maladie = maladie;
        this.traitement = traitement;
        if(this.maladie == "mal indenté"){
            this.traitement = "ctrl+maj+f"
        }else if(this.maladie == "unsave"){
            this.traitement = "saveOnFocusChange"
        }else if(this.maladie == 404){
            this.traitement = "CheckLinkRelation"
        }else if(this.maladie == "azmatique"){
            this.traitement = "ventoline"
        }else{
            this.traitement = "f12+doc"
        }
    }
}

class Traitement {
    constructor(traitement,prix){
        this.traitement = traitement;
        this.prix = prix;
    }
}

export {Patient,Medecin,Diagnostique,Traitement}