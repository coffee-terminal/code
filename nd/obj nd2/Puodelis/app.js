/* Sukurti klasę Puodelis. 
Puodelis turi dvi savybes: spalva ir ipilta. 
Sukurti statinį metodą gamintiPuodelius(), 
kuris pagamina du objektus
 su savybių reikšmėm: “raudonas”, “pilnas” ir “geltonas”, “tuščias”. 
 
 Sukurti statinį metodą perpilti(), 
 kuris “pilną” puodelį padaro tuščią ir atvirkščiai.

 Jeigu abu puodeliai tušti arba pilni - nieko nepadaro. 
 Sukurti statinį metodus 
 ispiltiViska(), kuris abu puodelius padaro “tuščius” ir 
 ipiltiIAbu(), kuris abu puodelius padaro “pilnus”.
 
Po šių metodų iškvietimo, 
metodas perpilti() turi veikti korektiškai ir logiškai (arba abu “tušti” arba abu “pilni”). */

class Puodelis {
    constructor(spalva, ipilta) {
        this.spalva = spalva;
        this.ipilta = ipilta;
    }
    static gamintiPuodelius() {
        this.puodeliai = [];
        this.puodeliai.push((this.Puodelis1 = new Puodelis('raudonas', 'pilnas')));
        this.puodeliai.push((this.Puodelis2 = new Puodelis('geltonas', 'tuscias')));

        return this.puodeliai;
    }
    static perpilti() {
        if (this.puodeliai[0].ipilta != this.puodeliai[1].ipilta) {
            for (let i = 0; i < this.puodeliai.length; i++) {
                if (this.puodeliai[i].ipilta == 'pilnas') {
                    this.puodeliai[i].ipilta = 'tuscias';
                } else if (this.puodeliai[i].ipilta == 'tuscias') {
                    this.puodeliai[i].ipilta = 'pilnas';
                }
            }
        } else {
            console.log(`abu “tušti” arba abu “pilni”`);
        }
    }
    static ispiltiViska() {
        for (let i = 0; i < this.puodeliai.length; i++) {
            if (this.puodeliai[i].ipilta == 'pilnas') {
                this.puodeliai[i].ipilta = 'tuscias';
            }
        }
        this.ipilta2 = console.log(`Puodeliai tušti`);
    }
    static ipiltiIAbu() {
        for (let i = 0; i < this.puodeliai.length; i++) {
            if (this.puodeliai[i].ipilta == 'tuscias') {
                this.puodeliai[i].ipilta = 'pilnas';
            }
        }
        this.ipilta2 = console.log(`Puodeliai pilni`);
    }
}

console.log(Puodelis.gamintiPuodelius());
Puodelis.perpilti();
Puodelis.ispiltiViska();
Puodelis.ipiltiIAbu();
Puodelis.perpilti();
Puodelis.perpilti();
