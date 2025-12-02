for (let i = 0; i <= 4; i++) {
    console.log('Labas rytas');
}

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// Emilija planuoja atostogas po 1 metų (12mėn). Šiam momentui kelionei pinigų neturi.
// Kiekvieną mėn planuoja atsidėti (atsitiktinis skaičius) po 120 - 180 eur.
// Paskaičiuoti kiek pinigų Emilija sutaupys po metų.
let sutaupyta = 0;
for (let i = 0; i < 12; i++) {
    let menesioSantaupos = rand(120, 180);
    sutaupyta += menesioSantaupos;
}
console.log(sutaupyta);
console.log('--------------------');

// 3 kartus iš eilės išmesti tą patį skaičių (kauliukas)

let kauliukas3kartai = 0;
let ismestasKauliukas = rand(1, 6);
let ismestasKauliukas2;

for (let i = 0; i < 2; i++) {
    ismestasKauliukas2 = rand(1, 6);
    console.log(ismestasKauliukas2);
    if (ismestasKauliukas == ismestasKauliukas2) {
        kauliukas3kartai += 1;
        continue;
    } else {
        i--;
    }
}
console.log(ismestasKauliukas + ' ' + ' 3 kartai');
console.log('--------------------');

// 1. Spausdinti skaičius nuo 1 iki 5

// // Išveskite: 1 2 3 4 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('--------------------');

// 2. Spausdinti skaičius nuo 5 iki 1

// // Išveskite: 5 4 3 2 1

for (let i = 5; i > 0; i--) {
    console.log(i);
}
console.log('--------------------');

// 3. Spausdinti visus lyginius skaičius nuo 2 iki 10
// // Išveskite: 2 4 6 8 10

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log('--------------------');

// 4. Spausdinti skaičių kvadratus nuo 1 iki 5
// // Išveskite: 1 4 9 16 25

for (let i = 1; i <= 5; i++) {
    console.log(i * i);
}

// 5. Sudėti skaičius nuo 1 iki 10
// // Išveskite sumą: 55

let sudeti1iki10 = 0;
for (let i = 0; i <= 10; i++) {
    sudeti1iki10 += i;
}
console.log(sudeti1iki10);
// console.clear();

// 6. Kartoti tekstą kelis kartus
// // Spausdinti "Labas!" 5 kartus

for (let i = 0; i < 5; i++) {
    console.log('Labas');
}
console.log('--------------------');
let kartuSkaicius = 0;
do {
    console.log('Labas');
    kartuSkaicius += 1;
} while (kartuSkaicius < 5);
console.log('--------------------');

// 7. Atspausdinti skaičius nuo 1 iki 10, bet tik jei jie didesni už 5

// // Išveskite: 6 7 8 9 10

for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        console.log(i);
    }
}
console.log('--------------------');

// 8. Atvirkštinis kvadratų spausdinimas

// // Išveskite: 25 16 9 4 1

let kvadratas = 0;
for (let i = 5; i > 0; i--) {
    kvadratas = i ** 2;
    console.log(kvadratas);
}
console.log('--------------------');

// 9. Sudėti tik lyginius skaičius nuo 1 iki 10

// // Išveskite sumą: 30

let tikLyginiai = 0;
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        tikLyginiai += i;
    }
    // console.log(tikLyginiai);
}
console.log(tikLyginiai);

// 10. Spausdinti skaičių su žodžiu
// // Išveskite: "Skaičius 1", "Skaičius 2", ... iki 5

// let string = 'Skaičius ';
for (let i = 1; i <= 5; i++) {
    console.log('Skaičius', i);
}
console.log('--------------------');
for (let i = 0; i <= 5; i++) {
    i != 0 && i <= 5 ? console.log('Skaicius', i) : '';
}
console.log('--------------------');
