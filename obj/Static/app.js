console.log('Static');

class Kisene {
    static viso = 0;
    static pridetiBendra(kiek) {
        this.viso += kiek; // jeigu this yra statiniame kontekste tai jis yra sita klase

        //statiniame kontekste mes negalime kreiptis i sitas objektas
    }
    constructor() {
        this.yra = 0;
    }
    prideti(kiek) {
        this.yra += kiek; // this pas mus yra ===> sitas objektas
        this.constructor.viso += kiek; // this.constructor === sita kalse (Kisene)
    }
    isimti(kiek) {
        this.yra -= kiek;
        this.constructor.viso -= kiek;
    }
}

const k1 = new Kisene();
const k2 = new Kisene();
const k3 = new Kisene();

k1.prideti(5);
k2.prideti(2);
k1.isimti(4);

console.log(k1, k2);
console.log(Kisene.viso);
