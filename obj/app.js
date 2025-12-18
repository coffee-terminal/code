console.log('OOP');

class Bebras {
    //instrukcija objekto gamybai
    //metodas (funkcija) kuri automatiskai pasileidzia objekto kurimo metu

    constructor(metai) {
        console.log('KONSTRUOJAM!');

        this.bebroMetai = metai; // this === b1, kita karta this === b2, kita karta this === b3

        // this nuoroda į dar neegzistuojanti objekta "tas"
    }

    kiekMetu() {
        console.log('Bebrui yra: ' + this.bebroMetai);
    }
}

//gaminame objekta pagal instrukcija

const b1 = new Bebras(10);

// b1 yra objektas pagamintas pagal Bebras klases instrukcijas

console.log(b1);

///galim pasigaminti tokiu daug

const b2 = new Bebras(12);
const b3 = new Bebras(16);

b3.bebroMetai = 14;

console.log(b2, b3);

b2.kiekMetu();

/// sukurti 3 namu objektus is klases namas. Kiekvienas namas turi tureti skirtinga kambriu ir kaminu kieki

class namas {
    constructor(kambariuSk, kaminuSk) {
        this.kambariai = kambariuSk;
        this.kaminai = kaminuSk;
        console.log(this.kambariai, this.kaminai);
    }
    kamIrKam() {
        const sandauga = this.kambariai * this.kaminai;
        console.log('Sandauga: ' + sandauga);
    }
}

const namas1 = new namas(4, 5);
const namas2 = new namas(7, 1);
const namas3 = new namas(2, 1);

console.log(namas1, namas2, namas3);

//parasyti metoda kuris atspausdina kaminu ir kambariu sandauga
namas3.kamIrKam();
