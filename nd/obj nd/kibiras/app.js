/* Sukurti klasę Kibiras1. 
Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
Parašyti šiai klasei metodus, pridedančius akmenis:
 prideti1Akmeni() 
 pridetiDaugAkmenu(kiekis)
  ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
  
  Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą. */

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni() {
        this.akmenuKiekis += 1;
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }
    kiekPririnktaAkmenu() {
        console.log('Akmenų kiekis kibire: ' + this.akmenuKiekis);
    }
}

const kibiroObj = new Kibiras1();

console.log(kibiroObj);

kibiroObj.prideti1Akmeni();
console.log(kibiroObj);

kibiroObj.prideti1Akmeni();
console.log(kibiroObj);

///////////////////////////////////////////
kibiroObj.kiekPririnktaAkmenu();
///////////////////////////////////////////

kibiroObj.pridetiDaugAkmenu(7);
console.log(kibiroObj);

kibiroObj.pridetiDaugAkmenu(3);
console.log(kibiroObj);

kibiroObj.pridetiDaugAkmenu(8);
console.log(kibiroObj);
///////////////////////////////////////////

kibiroObj.kiekPririnktaAkmenu();
///////////////////////////////////////////
