// 1. Suskaičiuoti kiek masyve yra lyginiu skaičių
// let numbers2 = [2, 7, 4, 9, 12, 15, 18];
// Parašyti funkciją, kuri gauna masyvą kaip argumentą ir grąžina kiek masyve yra lyginių skaičių.
// Rezultatas: 4

let numbers2 = [2, 7, 4, 9, 12, 15, 18];
let lyginiuSkaciuKiekis = 0;
const kiekLyginiu = (masyvas) => {
    for (let i = 0; i < masyvas.length; i++) {
        if (masyvas[i] % 2 == 0) {
            lyginiuSkaciuKiekis += 1;
        }
    }
};
kiekLyginiu(numbers2);
console.log(lyginiuSkaciuKiekis);
console.log('----------------------------');
// 2. Pirkinių krepšelis
// Sukurkite funkciją, kuri priima masyvą (kaip argumentą) su prekių objektais:

let pirkiniuKrepselis = [
    { name: 'Milk', price: 2.0, count: 2 },
    { name: 'Bread', price: 1.2, count: 1 },
    { name: 'Eggs', price: 3.0, count: 1 },
    { name: 'Bacon', price: 3.5, count: 1 },
];

// Apskaičiuoti bendrą krepšelio kainą.
// Jeigu bendra suma > 10 €, taikyti 10% nuolaidą.
// Grąžinti galutinę sumą, suapvalintą iki 2 skaičių po kablelio

let krepselis = 0;

const bendraKaina = (prekes) => {
    for (let i = 0; i < prekes.length; i++) {
        krepselis = prekes[i].price * prekes[i].count + krepselis;
    }
    if (krepselis > 10) {
        krepselis = krepselis * 0.9;
    }
    return krepselis.toFixed(2);
};
// bendraKaina(pirkiniuKrepselis);
console.log(bendraKaina(pirkiniuKrepselis));
console.log('----------------------------');

// 3. Teigiamų skaičių suma
// Duotas masyvas:
let numbers = [4, -2, 7, -1, 0, 5];
// Užduotis:
// Parašyti funkciją, kuri suskaičiuoja tik teigiamų skaičių sumą.
// Rezultatas: 4 + 7 + 5 = 16

let teigiamuSuma = 0;

const teigiamiKartu = (teigiami) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            teigiamuSuma += numbers[i];
        }
    }
    return teigiamuSuma;
};
teigiamiKartu(numbers);
console.log(teigiamuSuma);
console.log('----------------------------');

let sumNumbers = 0;
function addNumbers() {
    numbers.forEach((numb) => {
        if (numb > 0) {
            sumNumbers = sumNumbers + numb;
        }
    });
    return sumNumbers;
}

console.log(addNumbers());
console.log('----------------------------');

// 4. Atrinkti masyvo elementus, kurie ilgesni nei 4 raidės:
let zodziai = ['labas', 'rytas', 'tu', 'as', 'programavimas', 'trys'];
//Atspausdinti konsolėje ilgų žodžių masyvą

//filtruojamas esamas masyvo variantas
const ilgesniNei4 = zodziai.filter((zodis) => {
    if (zodis.length > 4) {
        return true;
    }
    return false;
});

console.log(ilgesniNei4);
console.log('----------------------------');

//sukuriamo naujo masyvo variantas
let ilgiZodziai = [];

for (let i = 0; i < zodziai.length; i++) {
    if (zodziai[i].length > 4) {
        ilgiZodziai.push(zodziai[i]);
    }
}
console.log(ilgiZodziai);
console.log('----------------------------');

// 5. Sugeneruoti (atspausdinti konsolėje) tekstą: 15-14-12-11-10-9-8
// (atkrepkit dėmesį kad nėra '13')
let x = 15;
let tekstasKartu = '';
do {
    if (x == 13) {
    } else if (x <= 15 && x >= 8) {
        tekstasKartu += x;
        if (x > 8) {
            tekstasKartu += '-';
        }
    }
    x = x - 1;
} while (x > 0);
console.log(tekstasKartu);
console.log('----------------------------');

const generuojamiSkaiciai = [];
for (let i = 15; i >= 8; i--) {
    if (i == 13) {
        continue;
    }
    generuojamiSkaiciai.push(i);
}

console.log(generuojamiSkaiciai.join('-'));
console.log('----------------------------');
let digitsArray = [];

for (i = 15; i >= 8; i--) {
    digitsArray.push(i);
    if (i == 13) {
        digitsArray.pop();
        continue;
    }
}

console.log(digitsArray);
console.log('----------------------------');
//6.  Parašykite kodą, kuris suskaičiuos kiek kartų raidė 'a' arba 'A' pasikartoja duotame tekste.

let tekstas = 'Ar norėtum arbatos ar dar kavos.';
let raidziuAiraKiekis = 0;

for (let i = 0; i < tekstas.length; i++) {
    if (tekstas[i] == 'a' || tekstas[i] == 'A') {
        raidziuAiraKiekis += 1;
    }
}
console.log('Raidės a ir A pasikartoja: ' + raidziuAiraKiekis + ' kartus');
console.log('----------------------------');
let pasikartojoRaideA = 0;
for (let i = 0; i < tekstas.length; i++) {
    // if (tekstas[i] == 'a' || tekstas[i] == 'A') {
    if (tekstas[i].toLocaleLowerCase() === 'a') {
        pasikartojoRaideA++;
    }
}

console.log(pasikartojoRaideA); // 6
