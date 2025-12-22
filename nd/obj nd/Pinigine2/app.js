/* Sukurti klasę Pinigine.
 Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. 
 Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
 Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, 
 jeigu kitaip- prie popieriniaiPinigai. 
 
 Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
 
 Sukurti klasės objektą ir pademonstruoti veikimą. 
 Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
 */

/*  Patobulinti 2 uždavinio piniginę
 taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. 
 Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir 
 metoda banknotai() - popierinių pinigų skaičiavimui. 
 Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) 
 laikykite vienu banknotu ar viena moneta. */

class Pinigine {
    #moneta = 0;
    #banknotas = 0;
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis) {
        if (kiekis >= 2) {
            this.popieriniaiPinigai += kiekis;
            this.banknotai();
        } else {
            this.metaliniaiPinigai += kiekis;
            this.monetos();
        }
    }
    monetos() {
        this.#moneta++;
    }
    banknotai() {
        this.#banknotas++;
    }
    skaiciuoti() {
        this.suma = this.popieriniaiPinigai + this.metaliniaiPinigai;
        console.log(
            'Popierinių pinigų: ' + this.popieriniaiPinigai + ' ir Metalinių pinigų: ' + this.metaliniaiPinigai + ' suma: ' + this.suma
        );
        console.log(`${this.#banknotas} banknotai ir ${this.#moneta} monetos`);
    }
}

const Pinigine1 = new Pinigine();

Pinigine1.ideti(5);
Pinigine1.ideti(1);
Pinigine1.ideti(1.76);
Pinigine1.ideti(5);
Pinigine1.ideti(2);
Pinigine1.skaiciuoti();
