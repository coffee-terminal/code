/* Sukurti klasę Senelis, 
kurią paveldi Klasė Tevas, 
kurią atitinkamai paveldi klasė Vaikas. 

Senelis turi savybę pavarde (Tevas ir Vaikas tokios savybės neturi), 
kurią paveldi visos kitos klasės ir kuri priskirama objekto kūrimo metu. 

Visos klasės turi savybę vardas, 
kuri yra nepaveldima, bet perrašoma kiekvienoje klasėje ir kuri įrašoma objekto kūrimo metu. 

Klasė Senelis turi metodą kas(), 
kurį paveldi visos klasės ir kuris konsolėje atspausdina objekto vardą ir pavardę. 
Sukurkite po vieną objektą iš visų klasių su ta pačia pavarde ir skirtingais vardais. 
Visuose objektuose paleiskite metodą kas() ir įsitikinkite, kad visi turi teisingą vardus ir pavardę */

class Senelis {
    constructor(vardas, pavarde) {
        this.constructor.pavarde = pavarde;
        this.vardas = vardas;
    }
    kas() {
        console.log(this.vardas + ' ' + Senelis.pavarde);
    }
}
class Tevas extends Senelis {
    constructor(vardas) {
        super();
        this.vardas = vardas;
    }
}
class Vaikas extends Tevas {
    constructor(vardas) {
        super();
        this.vardas = vardas;
    }
}

const Senelis1 = new Senelis('Petras', 'Daugirdas');
const Tevas1 = new Tevas('Jonas');
const Vaikas1 = new Vaikas('Stasys');

Senelis1.kas();
Tevas1.kas();
Vaikas1.kas();
