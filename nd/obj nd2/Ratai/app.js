/* Sukurti klasę Ratai. 
Klasė turi dvi savybes: kiekis ir dydis. 
Abi savybės įrašomos objekto kūrimo metu. 

Sukurti klasę Dviratis ir klasę Automobilis. 

Abi šios klasės turi turėti savybę gamintojas, 
kuri įrašoma objekto kūrimo metu ir paveldėti klasę Ratai. 

Sukurti objektus iš klasių Dviratis ir Automobilis kūrimo metu nurodant gamintoją ir ratų dydį,
 o tuo tarpu ratų skaičius turi būti priskirtas automatiškai priklausomai nuo to, kiek ratų turi transporto priemonė. */

class Ratai {
    constructor(kiekis, dydis) {
        this.kiekis = kiekis;
        this.dydis = dydis;
    }
}
class Dviratis extends Ratai {
    constructor(gamintojas, dydis) {
        super(2, dydis);
        this.gamintojas = gamintojas;
    }
}
class Automobilis extends Ratai {
    constructor(gamintojas, dydis) {
        super(4, dydis);
        this.gamintojas = gamintojas;
    }
}

const Dviratis1 = new Dviratis('Dviraciu gamykla', 27);
console.log(Dviratis1);
const Automobilis1 = new Automobilis('Auto gamykla', 16);
console.log(Automobilis1);
