/* Sukurti klasę Troleibusas.
 Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
 
 Parašyti du metodus: 
 ilipa(keleiviuSkaicius) ir 
 islipa(keleiviuSkaicius). 
 
 O taip pat parašyti metoda 
 vaziuoja(), 
 
 kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 
 
 Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali. */

class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }
    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        if (this.keleiviuSkaicius < 0) {
            this.keleiviuSkaicius = 0;
        }
        console.log(`Ilipa keleivių: ${keleiviuSkaicius}`);
    }
    islipa(keleiviuSkaicius) {
        this.keleiviuSkaicius -= keleiviuSkaicius;
        if (this.keleiviuSkaicius < 0) {
            this.keleiviuSkaicius = 0;
        }
        console.log(`Išlipa keleivių: ${keleiviuSkaicius}`);
    }
    vaziuoja() {
        console.log(`Važiuojančių troleibusu keileivių skaičius: ${this.keleiviuSkaicius}`);
    }
}

const Troleibusas1 = new Troleibusas();

Troleibusas1.ilipa(10);
Troleibusas1.vaziuoja();
Troleibusas1.islipa(12);
Troleibusas1.vaziuoja();
