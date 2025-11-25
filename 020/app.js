console.log('Masyvai, vėl masyvai');

const animals = [];

animals.push('Zuikis', 'Bebras', 'Barsukas');

animals.unshift('Briedis', 'Mamutas');

console.log(animals);

animals.pop(); //išmeta paskutini elementas (tik viena)

console.log(animals);

animals.shift(); // ismeta pirma elementa (tik viena)

console.log(animals);

const pushResult = animals.push('Vilkas'); // grazina masyvo dydi su pridetais elementais

console.log(animals);
console.log(pushResult);

const popResult = animals.pop(); // grazina masyvo dydi su pridetais elementais

console.log(animals);
console.log(popResult); // grazina ismesta elementa

// Paieska
// Agregacija
// Filtracija
// Rusiavima

const numbers = [54, 85, 31, -4, 57, 131, -78, 54, 54, 798, 0, 3, 74];

// paieska

let findWhat = 54;
let findRow = 4; // kelinto resultato mum reikia

let findResultIndex = -1; // rasto skaiciaus indeksas -1 reiskia kad indekso dar nerado
let findResultRow = 0; //

for (i = 0; i < numbers.length; i++) {
    if (findWhat == numbers[i]) {
        findResultIndex = i;

        findResultRow++;

        if (findRow == findResultRow) {
            break; // nutraukiu cikla ir is jo iseina
        }
    }
}
console.log(findResultIndex);
console.clear();

// 1. Koks meškos numeris - numerį atspausdinti konsolėje

const zverys = document.querySelectorAll('li');

//nekreipti demesio - bus veliau
console.log(Array.from(zverys).map((el) => el.innerText));

const rasti = 'Meška';

let zverysNumerisrow;

for (i = 0; i < zverys.length; i++) {
    // zverys -> visi elementai
    // zverys[i] -> konkretus vienas elementas
    // zverys[i].innerText ----> konkretaus vieno elemento tekstą

    if (zverys[i].innerText == rasti) {
        zverysNumerisrow = i; // meska gauna elemento indeksa 4

        break; // einam lauk iš ciklo
    }
}
console.log('Meška:', zverysNumerisrow + 1); // +1 pakoreguojam indeksa, jis tampa eiles numeri

// 2. sarase nuspalbinti varna baltai

const rasti2 = 'Varna';

for (i = 0; i < zverys.length; i++) {
    if (zverys[i].innerText == rasti2) {
        zverys[i].style.color = 'white'; // stilius ant varnos elementu
        break; // einam lauk iš ciklo
    }
}

// sarase visus iskyrus peleda ir gaidy nuspalvinti orange

const PelGaid = ['Peleda', 'gaidys'];

for (i = 0; i < zverys.length; i++) {
    if (zverys[i].innerText == 'Pelėda' || zverys[i].innerText == 'Gaidys') {
        continue; // pradeda nauja iteracija(ciklo prasukima) toliau +1
    }
    zverys[i].style.color = 'orange';
}

//su ifu
// for (i = 0; i < zverys.length; i++) {
//     if (zverys[i].innerText != 'Pelėda' && zverys[i].innerText != 'Gaidys') {
//         zverys[i].style.color = 'orange';
//     }
// }
