console.log('FUn Fun Fun...');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// 0. kintamajam priskirti atsitiktine reikme, nuo 10 iki 99 ir ta reiksme atspausdinti konsoleje.

const A0 = rand(10, 99);
console.log('test ' + A0);

//const = A0 priskiriamas kintamasis
//atsitiktine reiksme nuo 10 iki 99
//rand(10,99)
//sujungiam kintamaji ir reiksme
//spaudiname konsoleje

// 1. Sugeneruoti atsitiktine reiksme nuo 10 iki 99. Jeigu ta reiksme mazesne uz 50 kintamajam
// animal priskirti reiksme bebras, kitu atveju priskirti reiksme barsukas. Atsitiktine reiksme ir
//animal kintamaji atspausdinti konsoleje.

const A1 = rand(10, 99);

let A1animal; // sitas bus keiciamas (daromas priskyrimas) veliau, todel let

if (A1 < 50) {
    animal = 'Bebras';
} else {
    animal = 'Barsukas';
}
console.log('1.', A1, animal);

//2. Parasyti funkcija kuri spausdina atsitiktini skaiciu nuo 1 iki 5;

// const A2fun = rand(1, 5);
// console.log('2. ', A2fun);

//pagal destytoja............
//sugalvoti funkcijai varda
function A2function() {
    //bloke aprasyti ka reikia daryti
    console.log(rand(1, 5));
}
//deklaracija padaryta
//kvieciame
//A2function()
A2function();

//3.Parasyti funkcija kuri grazina atsitiktini skaiciu nuo 1 iki 5. Grazinta skaiciu  reikia priskirti
//kintamajam 'skaicius15'. Kintamaji padauginti is penkiu ir gauta rezultata atspausdinti konsoleje.

function A3function() {
    const A3 = rand(1, 5);
    return A3;
}
let skaicius15 = A3function() * 5;
console.log(skaicius15);

//4. Parasyti funkcija kuri grazina, stinga 'Puiki diena'. Gauta stringa priskirti kintamajam
//ta kintamaji atspausdinti

function A4fun() {
    return 'Puiki diena';
}

const kokiaDiena = A4fun();
console.log(kokiaDiena);

//5. Parasyti funkcija kuri grazina atsitiktine tvarka arba stringa 'A' arba 'B'
// gauta grazinta stringa priskirti, kintamajam raide. Kintamaji atspausdinti.

function A5function() {
    const A5 = rand(0, 1);
    if (A5) {
        return 'A';
    }
    return 'B';
}
let raide = A5function();
console.log(raide);

//Ternary

//Ternary yra vienos eilutes if else

console.clear();
let kas;
if (24 > 15) {
    kas = 'Taip';
} else {
    kas = 'NE';
}
console.log(kas);

const kas2 = 24 > 150 ? 'TAIP' : 'NE '; // Priskiriamoji salyga  - ternary operator

console.log(kas2);

function aBT() {
    return rand(0, 1) ? 'A' : 'B';
}

const raideT = aBT();
console.log(raideT);

//6. Parasyti funkcija kuriai duodate  bet koki stinga, o ji grazina pirma raide.
//pademonstruoti veikima konsoleje

//orazinis yra parametras
function A6fun(zodis) {
    return zodis.charAt(0);
}

let A6zodis = 'Betkas';

const Pirmaraide = A6fun(A6zodis);
console.log(Pirmaraide);

//=====================

const firstLetter = function (word) {
    return word[0];
};
console.log(firstLetter('Bebras'));
console.log(firstLetter('Zebras'));

//7. Parasyti funkcija kuriai duodate  bet koki stinga, o ji grazina pirma raide.
//pademonstruoti veikima konsoleje length-1

const lastLetter = function (word) {
    return word[word.length - 1];
};
console.log(lastLetter('Bebras'));
console.log(lastLetter('krokodilas'));

//8. Parasyti funkcija kuri konsoleje spausdina 'Labas',
// Funkcija turi pasilleisti paspaudus mygtuka html failse(html sukurit mygtuka).

const A8buttonHello = function () {
    console.log('Labas');
};

const LabasButton = document.querySelector('.btn1, button');

LabasButton.style.border = '3px solid black';
LabasButton.style.height = '100px';
LabasButton.style.width = '200px';
LabasButton.style.borderRadius = '20px';
LabasButton.style.fontSize = '40px';

LabasButton.addEventListener('click', A8buttonHello);
