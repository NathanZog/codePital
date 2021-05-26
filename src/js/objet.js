

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

let chat = {
    nom: "Edgar",
    miauler(){
        setInterval(()=>{

            console.log(`Miaou`)
        },2000)
    },

}



export {salleAttente,pharmacie,cimetiere,chat}

