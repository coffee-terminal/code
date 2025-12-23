/* Sukurti klasę Grybas.
 Sukurti klasę Krepsys.
  Krepsys, kuri turi savybę 
  dydis,
  kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). 
  Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. 
  Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. 
  Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).
 */
console.log('Grybas');

class Grybas {
    constructor() {
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1); // rand(0,1) ===> 0 arba 1 ===> !0 ===> true arba !1 ===> false
        this.svoris = this.rand(5, 45);
    }

    rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
}
class Krepsys {
    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }
    deti(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.dydis > this.prikrauta; // true ===> dar yra vietos
    }
}

const krepsys = new Krepsys();
while (krepsys.deti(new Grybas())) {}

console.log(krepsys);
