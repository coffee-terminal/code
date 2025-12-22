/* Sukurti klasę Kibiras1. 
Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
Parašyti šiai klasei metodus, pridedančius akmenis:
 prideti1Akmeni() 
 pridetiDaugAkmenu(kiekis)
  ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
  
  Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą. */

// Saulėgrąža
class Kibiras1 {
    #akmenuKiekis;

    constructor() {
        this.#akmenuKiekis = 0; //objekto savybes prasideda this. (savybe o ne kintamasis)
        //metodas yra funkcija, ir kai ji yra viduryje klases mes funkcija ivardijam kaip metodu
    }
    prideti1Akmeni() {
        this.#akmenuKiekis++; //kiekis padidinamas vientu
    }
    pridetiDaugAkmenu(kiekis) {
        this.#akmenuKiekis += kiekis; //kiekis padidinamas "kiekiu"
    }
    kiekPririnktaAkmenu() {
        console.log('Pririnkta: ' + this.#akmenuKiekis + ' akmenai.'); //atspausdina kiek yra akmenu kibire
    }
    //igi geteris tik neoficialus
    kiekPririnktaAkmenuSkaicius() {
        return this.#akmenuKiekis;
    }

    //geteris su get
    get akmenuSkaicius() {
        return this.#akmenuKiekis;
    }
}
// Pranas
const K1 = new Kibiras1();

K1.prideti1Akmeni();
K1.prideti1Akmeni();

//privaciu negalima modifikuoti ar nuskaityti uz klases ribu
// K1.#akmenuKiekis = 5;
// console.log(K1.#akmenuKiekis);

K1.kiekPririnktaAkmenu();

// const akmenysKibire = K1.kiekPririnktaAkmenuSkaicius();

const akmenysKibire = K1.akmenuSkaicius; // savybe kurios nera, bet kurios reiksme paskaiciuoja getteris

console.log(akmenysKibire);

// Sukurti klasę PiestukuDezute. Padaryti taip, kad i piestuku dezute butu galima prideti piestuku.
//pvz(red,blue,yellow). Prasytu metoda kuris atspausdina visus piestukus.

class PiestukuDezute {
    // Privati reikšmė
    #Dezute = []; //masyvas i kuri desime piestukus
    pridetiPiestuka(spalva) {
        this.#Dezute.push(spalva); // pridedam spalvą
    }
    atspausdintiPiestukus() {
        console.log('Pieštukai dėžutėje: ' + this.#Dezute.join(', ')); // Padaro stringą, sujungdamas visus masyvo elementus per ', '
    }
}

const Dez1 = new PiestukuDezute();
Dez1.pridetiPiestuka('žalia');
Dez1.pridetiPiestuka('mėlyna');
Dez1.pridetiPiestuka('raudona');
Dez1.atspausdintiPiestukus();
