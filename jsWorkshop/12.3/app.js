// for (deklaruojam i; sąlyga; didinam/mažinam i) {
//     kodas kurį vykdome
// } // kai žinom kiek kartų turim kartoti tą patį veiksmą

// while (sąlyga) {kodas, kurį vykdome kol neiššsipildo sąlyga}
// kai nežinom kiek kartu turim kartoti tą patį veiksmą, bet žinom kokio rezultato mums reikia

// 1. Prie skaičiaus x pridėti po 5, kol skaičius pasieks bent 200
// Pradėkite nuo:
// let x = 0;

let x = 0;
do {
    x += 5;
} while (x < 200);
console.log('---------------------------');
// 2. Trigubinti skaičių, kol jis taps didesnis nei 5000
// Pradėkite nuo:
// let x = 3;

let x2 = 3;
do {
    x2 = x2 * 3;
    console.log(x2);
} while (x2 <= 5000);

// let x2 = 3;
// while (x2 <= 5000) {
//     x2 = x2 * 3;
//     console.log(x2);
// }
console.log('---------------------------');
// 3. Iš skaičiaus x atimti po 7, kol skaičius taps neigiamas
// Pradėkite nuo:
// let x = 50;

let x3 = 50;
do {
    x3 = x3 - 7;
    console.log(x3);
} while (x3 >= 0);

// while (x3 >= 0) {
// x3 = x3 - 7
// console.log(x3)
// }
console.log('---------------------------');
// 4. Didinti skaičių 30%, kol jis viršys 1000
// Pradėkite nuo:
// let x = 100;

let x4 = 100;

do {
    x4 = x4 * 1.3;
    console.log(x4.toFixed(2));
} while (x4 <= 1000);
console.log('---------------------------');

// 5. Dalinti skaičių x iš 2, kol jis taps mažesnis nei 1
// Pradėkite nuo:
// let x = 200;

let x5 = 200;
do {
    x5 = x5 / 2;
    console.log(x5.toFixed(2));
} while (x5 >= 1);
console.log('---------------------------');

// Gabija nori važiuoti į kelionę už 2150 eur. Šiam momentui turi 320 eur
// Per mėn planuoja atidėti 120-180 eur (atsitiktinis skaičius).
// Paskaičiuoti per kiek mėn Gabija sutaupys kelionei.

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let menesioSantaupos = 320;
let menesiuSk = 0;
do {
    menesioSantaupos += rand(120, 180);
    menesiuSk += 1;
} while (menesioSantaupos < 2150);
console.log(menesiuSk);
console.log('---------------------------');

// Emilija planuoja atostogas po 1 metų (12mėn). Šiam momentui kelionei pinigų neturi.
// Kiekvieną mėn planuoja atsidėti (atsitiktinis skaičius) po 120 - 180 eur.
// Paskaičiuoti kiek pinigų Emilija sutaupys po metų.

let menesioSantaupos2 = 0;
let menesiuSk2 = 0;
do {
    menesioSantaupos2 += rand(120, 180);
    menesiuSk2 += 1;
    console.log(menesiuSk2, menesioSantaupos2);
} while (menesiuSk2 < 12);
console.log('---------------------------');

let EmilijosPinigai = 0;
for (let i = 1; i <= 12; i++) {
    let sutaupyta = rand(120, 180);
    EmilijosPinigai += sutaupyta;
    console.log(`Sutaupyta ${i} mėn - ${sutaupyta}. Sutaupyta iš viso - ${EmilijosPinigai}`);
}
console.log('---------------------------');

// for (deklaruojam i; sąlyga; didinam/mažinam i) {
//     kodas kurį vykdome
// } // kai žinom kiek kartų turim kartoti tą patį veiksmą

// while (sąlyga) {kodas, kurį vykdome kol neiššsipildo sąlyga}
// kai nežinom kiek kartu turim kartoti tą patį veiksmą, bet žinom kokio rezultato mums reikia

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

let sisRidenimas;
let paskutinisRidenimas = 0;
let pirstas = 1;
let ridenimai = 0;

while (pirstas < 3) {
    sisRidenimas = rand(1, 6);
    console.log(sisRidenimas);
    ridenimai++;

    // if (sisRidenimas === paskutinisRidenimas) {
    //     pirstas++;
    // } else {
    //     pirstas = 1;
    // }
    sisRidenimas === paskutinisRidenimas ? pirstas++ : (pirstas = 1);

    paskutinisRidenimas = sisRidenimas;
}
console.log(`Prireikė ${ridenimai} ridenimų.`);
