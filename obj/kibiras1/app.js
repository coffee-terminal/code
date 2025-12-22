/* Sukurti klasę Kibiras1. 
Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
Parašyti šiai klasei metodus, pridedančius akmenis:
 prideti1Akmeni() 
 pridetiDaugAkmenu(kiekis)
  ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
  
  Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą. */

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0; //objekto savybes prasideda this. (savybe o ne kintamasis)
        //metodas yra funkcija, ir kai ji yra viduryje klases mes funkcija ivardijam kaip metodu
    }
    prideti1Akmeni() {
        this.akmenuKiekis++; //kiekis padidinamas vientu
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis; //kiekis padidinamas "kiekiu"
    }
    kiekPririnktaAkmenu() {
        console.log('Pririnkta: ' + this.akmenuKiekis + ' akmenai.'); //atspausdina kiek yra akmenu kibire
    }
}

const K1 = new Kibiras1();
const K2 = new Kibiras1();

K1.prideti1Akmeni();
K1.prideti1Akmeni();
K2.prideti1Akmeni();
K2.pridetiDaugAkmenu(8);
K2.prideti1Akmeni();

K1.kiekPririnktaAkmenu();
K2.kiekPririnktaAkmenu();

// class Kibiras1 {
//     constructor() {
//         this.akmenuKiekis = 0;
//     }
//     prideti1Akmeni() {
//         this.akmenuKiekis += 1;
//     }
//     pridetiDaugAkmenu(kiekis) {
//         this.akmenuKiekis += kiekis;
//     }
//     kiekPririnktaAkmenu() {
//         console.log('Akmenų kiekis kibire: ' + this.akmenuKiekis);
//     }
// }

// const kibiroObj = new Kibiras1();

// console.log(kibiroObj);

// kibiroObj.prideti1Akmeni();
// console.log(kibiroObj);

// kibiroObj.prideti1Akmeni();
// console.log(kibiroObj);

// ///////////////////////////////////////////
// kibiroObj.kiekPririnktaAkmenu();
// ///////////////////////////////////////////

// kibiroObj.pridetiDaugAkmenu(7);
// console.log(kibiroObj);

// kibiroObj.pridetiDaugAkmenu(3);
// console.log(kibiroObj);

// kibiroObj.pridetiDaugAkmenu(8);
// console.log(kibiroObj);
// ///////////////////////////////////////////

// kibiroObj.kiekPririnktaAkmenu();
// ///////////////////////////////////////////
