/* Sukurti klasę Stikline.
 Sukurti savybes turis ir kiekis.
  Turis turi būti pasirenkamas objekto kūrimo metu. 
  Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. 
  Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. 

  Parašyti metodą ispilti(), kuris grąžiną kiekį.
   Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  
   Sukurti metodą stiklinejeYra(), 
   kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. 
   Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. 
   Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
 */

class Stikline {
    static kiekis = 0;
    static stiklines = [];
    #eile;
    constructor(turis) {
        this.turis = turis;
        Stikline.stiklines.push(turis);
        this.#eile = Stikline.stiklines.length;
        this.kiekis = Stikline.stiklines[this.#eile - 1];
    }

    ipilti(kiekis) {
        if (kiekis > this.turis) {
            Stikline.kiekis = this.turis;
            this.kiekis = this.turis;
        }
    }
    ispilti() {
        this.kiekis -= this.turis;
        Stikline.stiklines[this.#eile] =
            Stikline.stiklines[this.#eile - 1] - (Stikline.stiklines[this.#eile - 1] - Stikline.stiklines[this.#eile]);
    }

    stiklinejeYra() {
        return this.kiekis;
    }
}

const Stikline1 = new Stikline(200);
const Stikline2 = new Stikline(150);
const Stikline3 = new Stikline(100);

Stikline1.ipilti(300);

console.log(Stikline1.stiklinejeYra());
Stikline1.ispilti();
console.log(Stikline1.stiklinejeYra());

console.log(Stikline2.stiklinejeYra());
Stikline2.ispilti();
console.log(Stikline2.stiklinejeYra());

console.log(Stikline3.stiklinejeYra());
Stikline3.ispilti();
console.log(Stikline3.stiklinejeYra());
