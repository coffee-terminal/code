console.log('OOP');

// paveldimumas

//tevo klase
class Box {
    getColor() {
        return 'red';
    }
    getWeight() {
        return 20;
    }
}
//vaikine klase
class Ball extends Box {
    // class Vaikas extends Tevas
    getColor() {
        return 'blue';
    }
    getMaterial() {
        return 'plastic';
    }
}

const ball1 = new Ball();
console.log(ball1.getColor()); // metodas yra nuosavas
console.log(ball1.getWeight()); //metodas paveldetas is tevo klases
console.log(ball1.getColor()); //metodas yra nuosavas ir perraso tevo metoda

////////////////////////////////////////////////////////

class OldMan65 {
    static sidabras = '25kg';
    #auksas = '5kg';
    constructor() {
        console.log('OldMan65', this.#auksas);
        this.pinigai = 10000;
    }
    getSocial() {
        return 'Facebook';
    }
    getHouse() {
        return 'Big';
    }
    getGold() {
        return this.#auksas;
    }
}

class Man40 extends OldMan65 {
    static sidabras = '15kg';

    constructor() {
        super(); // jeigu vaikineje klaseje yra konstruktorius jis turi tureti pasikreipima i tevo konstruktoriu
        console.log('Man40');
    }
    getSocial() {
        return 'Instagram';
    }
}

class YoungMan18 extends Man40 {
    constructor() {
        super(); // jeigu vaikineje klaseje yra konstruktorius jis turi tureti pasikreipima i tevo konstruktoriu
        console.log('YoungMan18');
    }
    getSocial() {
        return 'Tik Tok';
    }
}

const man65 = new OldMan65();
const man40 = new Man40();
const man18 = new YoungMan18();

console.log(man65.getSocial());
console.log(man40.getSocial());
console.log(man18.getSocial());
console.log(man18.getHouse()); //metodas paveldetas is senelio
console.log(man18.pinigai);
//console.log(man18.#auksas); privaciu savybiu ar metodu niekas nepaveldeja
console.log(man18.getGold()); // metodas paveldetas is senelio

console.log(OldMan65.sidabras);
console.log(YoungMan18.sidabras); // statiniai metodai taip pat yra paveldimi
