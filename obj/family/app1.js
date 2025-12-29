console.log('This is the family.');

// Klasę rašo programuotoja Giedrė.

//Klasė tėvas
class Miskas {
    constructor(pavadinimas, plotas) {
        this.pavadinimas = pavadinimas;
        this.plotas = plotas; // plotas hektarais
    }
}

// Klasę rašo programuotojas Tomas.

//Klasė vaikas
class Zveris extends Miskas {
    constructor(pavadinimas, plotas) {
        //super() kviečia tėvines klasės konstruktorių
        super(pavadinimas, plotas);
    }

    bebras(vardas) {
        console.log(`${vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
    briedis(vardas) {
        console.log(`${vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
}

const miskas1 = new Zveris('Giraitė', 150);
miskas1.bebras('Bebras Petras');

const miskas2 = new Zveris('Ąžuolynas', 200);
miskas2.briedis('Bebras Petras');

class Bebras extends Miskas {
    constructor(pavadinimas, plotas, vardas) {
        super(pavadinimas, plotas);
        this.vardas = vardas;
    }

    gyvena() {
        console.log(`${this.vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
}

class Briedis extends Miskas {
    constructor(pavadinimas, plotas, vardas) {
        super(pavadinimas, plotas);
        this.vardas = vardas;
    }

    gyvena() {
        console.log(`${this.vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
}

const bebras = new Bebras('Giraitė', 150, 'Bebras Petras');
bebras.gyvena();

const briedis = new Briedis('Ąžuolynas', 200, 'Briedis Jonas');
briedis.gyvena();
