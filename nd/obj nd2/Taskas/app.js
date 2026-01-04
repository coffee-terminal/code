/* Sukurti klasę Taskas,
 kuris turi savybę taskas rand 100-999. 

 Sukurti klasę Taskai,
 kuris turi savybe taskai, 
 kuri yra masyvas iš 10 Taskas objektų. 

 Sukurkite išorinį kintamąjį (nepriklausantį jokiai klasei) daugTasku, 
 kuris yra masyvas iš 10 elementų, 
 o kiekvienas elementas yra Taskai objektas. 

 Išrūšiuokite masyvą daugTasku, pagal taskų sumą nuo didžiausio iki mažiausio. */

// Klasė Taskas su atsitiktine savybe taskas (100-999)
class Taskas {
    constructor() {
        this.taskas = Math.floor(Math.random() * 900) + 100;
    }
}
// Klasė Taskai su masyvu iš 10 Taskas objektų
class Taskai {
    constructor() {
        this.taskai = [];
        for (let i = 0; i < 10; i++) {
            this.taskai.push(new Taskas());
        }
    }
}

// Išorinis kintamasis daugTasku – masyvas iš 10 Taskai objektų
let daugTasku = [];
for (let i = 0; i < 10; i++) {
    daugTasku.push(new Taskai());
}

// Funkcija sumai apskaičiuoti (naudojama rūšiavimui)
function getSum(taskaiObj) {
    return taskaiObj.taskai.reduce((acc, t) => acc + t.taskas, 0);
}

// // Išrūšiavimas pagal taskų sumą nuo didžiausios iki mažiausios
daugTasku.sort((a, b) => getSum(b) - getSum(a));

// // Pavyzdžiui, išvesti rūšiuotas sumas konsolėje (tikrinimui)
const sums = daugTasku.map(getSum);
console.log(daugTasku);
console.log('Rūšiuotos sumos (nuo didžiausios iki mažiausios):', sums);

// console.log(Taskai.taskai);
// console.log(sums);
