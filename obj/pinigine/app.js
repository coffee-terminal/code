/* Sukurti klasę Pinigine.
 Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. 
 Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
 Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, 
 jeigu kitaip- prie popieriniaiPinigai. 
 
 Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
 
 Sukurti klasės objektą ir pademonstruoti veikimą. 
 Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
 */
console.log('Pinigine');
class Pinigine {
    constructor(popKiekis = 0, metKiekis = 0) {
        //default nustatymai
        this.popieriniaiPinigai = popKiekis;
        this.metaliniaiPinigai = metKiekis;
    }
    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        } else {
            this.popieriniaiPinigai += kiekis;
        }
    }
    skaiciuoti() {
        const kiek = this.metaliniaiPinigai + this.popieriniaiPinigai;
        console.log('Pinigineje yra ' + kiek + ' pinigu');
    }
}
const P1 = new Pinigine(0, 1);
const P2 = new Pinigine();

P1.ideti(0.8);
P1.ideti(58);
P1.ideti(1);

P2.ideti(1.8);
P2.ideti(300);
P2.ideti(0.02);

P1.skaiciuoti();
P2.skaiciuoti();

console.log(P1, P2);
// class Pinigine {
//     constructor() {
//         this.popieriniaiPinigai = 0;
//         this.metaliniaiPinigai = 0;
//     }

//     ideti(kiekis) {
//         if (kiekis > 2) {
//             this.popieriniaiPinigai += kiekis;
//         } else {
//             this.metaliniaiPinigai += kiekis;
//         }
//     }

//     skaiciuoti() {
//         this.suma = this.popieriniaiPinigai + this.metaliniaiPinigai;
//         console.log(
//             'Popierinių pinigų: ' + this.popieriniaiPinigai + ' ir Metalinių pinigų: ' + this.metaliniaiPinigai + ' suma: ' + this.suma
//         );
//     }
// }

// const Pinigine1 = new Pinigine();

// Pinigine1.ideti(5);
// Pinigine1.ideti(1);
// Pinigine1.ideti(1.76);
// Pinigine1.ideti(5);
// Pinigine1.ideti(2);
// Pinigine1.skaiciuoti();
