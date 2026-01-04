/* 
Sukurti klasę Paukstis, 
kuris turi tris metodus bega(), plaukia(), skrenda().

Iškvietus atitinkamą metodą, 
konsolėje turi būti atspausdintas atitinkamas pranešimas pvz.:
 “Šitas paukštis skrenda”, kai iškviečiamas metodas skrenda().

 Sukurti tris klases Antis, Pingvinas ir Strutis, 
 kurios paveldėja klasę Paukštis. 
 Kiekvienoje klasėje perrašyti nekorektiškus metodus pvz.:
  “Šitas paukštis NEskrenda”, kai iškviečiamas metodas skrenda()
   objekte pagamintame iš klasės Strutis. */

class Paukstis {
    bega() {
        console.log('Šitas paukštis skrenda');
    }
    plaukia() {
        console.log('Šitas paukštis plaukia');
    }
    skrenda() {
        console.log('Šitas paukštis skrenda');
    }
}

class Antis extends Paukstis {}
class Pingvinas extends Paukstis {
    skrenda() {
        console.log('Šitas paukštis NEskrenda');
    }
}
class Strutis extends Paukstis {
    plaukia() {
        console.log('Šitas paukštis NEplaukia');
    }
    skrenda() {
        console.log('Šitas paukštis NEskrenda');
    }
}

const Paukstis1 = new Antis();
console.log(Paukstis1);

Paukstis1.skrenda();
Paukstis1.plaukia();
Paukstis1.bega();

console.log('------------------------');

const Paukstis2 = new Pingvinas();
console.log(Paukstis2);

Paukstis2.skrenda();
Paukstis2.plaukia();
Paukstis2.bega();

console.log('------------------------');

const Paukstis3 = new Strutis();
console.log(Paukstis3);

Paukstis3.skrenda();
Paukstis3.plaukia();
Paukstis3.bega();

console.log('------------------------');
