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
console.log('Stiklinė');

class Stikline {
    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
    }
    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this; // grazina stikline
    }
    ispilti() {
        const kiekis = this.kiekis; //priskiriama pagal Value
        this.kiekis = 0; // stiklineje lieka 0
        return kiekis; // grazinam toki kieki koks buvo pripiltas kazkada const kiekis
    }
    stiklinejeYra() {
        console.log(`${this.turis} turio stiklineje yra ${this.kiekis}`);
    }
}

const Stikline1 = new Stikline(200);
const Stikline2 = new Stikline(150);
const Stikline3 = new Stikline(100);

// Stikline1.ipilti(500); <---- grazinamas this Stikline1
// Vadinasi mes galime
//Stikline1.ispilti() ==> s200.ipilti(500).ispilti()

Stikline3.ipilti(Stikline2.ipilti(Stikline1.ipilti(500).ispilti()).ispilti());

Stikline1.stiklinejeYra();

Stikline2.stiklinejeYra();

Stikline3.stiklinejeYra();
