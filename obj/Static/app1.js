console.log('Static');

class Kisene {
    static visosKisenes = []; // teoriskai reiktu padaryti privaciu

    //nebutinas sitam pvz
    static rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
    static get viso() {
        let visoYra = 0;
        this.visosKisenes.forEach((k) => (visoYra += k.yra));
        return visoYra;
    }

    constructor() {
        this.yra = 0;
        this.id = this.constructor.rand(1000000, 9999999); //quasi id

        //nebutinas sitam pvz
        this.constructor.visosKisenes.push(this); // idedame visa objekta
    }
    prideti(kiek) {
        this.yra += kiek;
    }
    isimti(kiek) {
        this.yra -= kiek;
    }
}

const k1 = new Kisene();
const k2 = new Kisene();
const k3 = new Kisene();

k1.prideti(5);
k2.prideti(2);
k3.prideti(1);

k1.isimti(4);

console.log(k1, k2, k3);
console.log(Kisene.viso); // getterio metodas kvieciams be skliausteliu
