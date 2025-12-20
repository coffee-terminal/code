// /* (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(),
//  kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose.

//  Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą
//  bendrasKeleiviuSkaicius(keleiviuSkaicius),
//  kuris pridėtų arba atimtų keleivius iš statinės savybės
//  visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius).

//  Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). */

class Troleibusas {
    static visiKeleiviai = 0;
    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        Troleibusas.visiKeleiviai += keleiviuSkaicius;
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
        Troleibusas.visiKeleiviai -= keleiviuSkaicius;
    }

    vaziuoja() {
        console.log(`Važiuojančių troleibu keileivių skaičius: ${this.keleiviuSkaicius}`);
    }
    static keleiviuSkaiciusVisuoseTroleibusuose() {
        return Troleibusas.visiKeleiviai;
    }
    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        return (Troleibusas.visiKeleiviai += keleiviuSkaicius);
    }
}
const Troleibusas1 = new Troleibusas();
const Troleibusas2 = new Troleibusas();
const Troleibusas3 = new Troleibusas();

Troleibusas1.ilipa(10);
Troleibusas1.islipa(9);
Troleibusas1.vaziuoja();

Troleibusas2.ilipa(7);
Troleibusas2.islipa(1);
Troleibusas2.vaziuoja();

Troleibusas3.ilipa(20);
Troleibusas3.islipa(13);
Troleibusas3.vaziuoja();

console.log(Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose());
console.log(Troleibusas.bendrasKeleiviuSkaicius(-9));

// class test {
//     static visiKeleiviai = 0;

//     constructor() {
//         this.keleiviai = 0;
//     }

//     ilipo(keleiviai) {
//         test.visiKeleiviai += keleiviai;
//         return (this.keleiviai += keleiviai);
//     }
//     islipo(keleiviai) {
//         test.visiKeleiviai -= keleiviai;

//         this.keleiviai -= keleiviai;
//         return keleiviai;
//     }
//     vaziuoja() {
//         return this.keleiviai;
//     }
//     bendras() {
//         return test.visiKeleiviai;
//     }
//     static visi(kazkas) {
//         return (test.visiKeleiviai += kazkas);
//     }
// }

// const test1 = new test();
// console.log(test1.ilipo(10));
// console.log(test1.islipo(2));
// console.log(`vaziuoja: ${test1.vaziuoja()}`);

// const test2 = new test();
// console.log(test2.ilipo(10));
// console.log(test2.islipo(7));
// console.log(`vaziuoja: ${test2.vaziuoja()}`);
// console.log(`visi vaziuoja: ${test.visi(-12)}`);
