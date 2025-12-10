// NUMBER: sveikieji skaičiai, dešimtainiai skaičiai, NaN, Infinity, -Infinity

// Visi skaičių metodai grąžina naują reikšmę.
// Jie nekeičia pradinio skaičiaus.

// Number metodai tinka naudoti su:
// - skaičiais - pvz. 123;
// - kintamaisiais - pvz. let x = 123;
// - matematinėm išraiškom - pvz. (100 + 23);

// 1.  .toString() - paverčia skaičių į stringą

let a = (123).toString();

let x = 123;
let b = x.toString();

let c = (100 + 23).toString();
let f = 123 + 'px';

console.log(a, b, c, f); // '123' '123' '123'
console.log(typeof a, typeof b, typeof c, typeof f); // string string string

// 2. Apvalinimas .toFixed(kiek skaičių po kablelio palikti) - apvalina, grąžina string'ą

console.log((8.345678).toFixed(2)); // 8,35
console.log(typeof (8.345678).toFixed(2)); // string

// // 3. Apvalinimas .toPrecision(kiek skaičių palikti bendrai) - apvalina, grąžina stringą

console.log((6.8765).toPrecision()); // 6.8765
console.log((6.8765).toPrecision(1)); // 7
console.log((6.8765).toPrecision(2)); // 6.9
console.log((6.8765).toPrecision(4)); // 6.877
console.log((6.8765).toPrecision(6)); // 6.87650
console.log(typeof (6.8765).toPrecision(6)); // string

// 4. Kintamojo vertimas į skaičių:
// -  Number()
// -  parseFloat()
// -  parseInt()

// Number(value) - paverčia skaičiumi bet ką. Jei paversti nepavyksta → NaN.

console.log(Number('25.6')); // 25.6
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('123abc')); // NaN
console.log(Number('10 20 30 ')); // NaN
console.log(typeof Number('123abc')); //number

// NaN = nėra skaičius, bet jo tipas yra number.

let kaina = 7.469856;
let kainaSuapvalinta = kaina.toFixed(2);

console.log(kainaSuapvalinta, typeof kainaSuapvalinta); // 7.47 string

let kainaSuapvalintaSkaicius = Number(kainaSuapvalinta);
console.log(kainaSuapvalintaSkaicius, typeof kainaSuapvalintaSkaicius); // 7.47 number

console.log(kainaSuapvalinta + 5);
console.log(kainaSuapvalintaSkaicius + 5);

// Number.parseInt() - grąžina sveikąjį (integer) skaičių
console.log(parseInt('-10.33')); // -10
console.log(parseInt('10.33')); // 10
console.log(parseInt('10.33')); // 10
console.log(parseInt('10.33 20 30')); // 10
console.log(parseInt('10 years')); // 10
console.log(parseInt('years 10')); // NaN
console.log(typeof parseInt('10 years')); // number

// // .parseFloat() - grąžina dešimtainį (decimal) skaičių
console.log(parseFloat('-10.33')); // -10
console.log(parseFloat('10.3355abc')); // 10.33
console.log(parseFloat('10.33 20 30')); // 10.33
console.log(parseFloat('10 years')); // 10
console.log(parseFloat('years 10')); // NaN
console.log(typeof parseFloat('1022 years')); // number

// // 5. Skaičiaus (number) tikrinimo metodai (būtinai reikalauja argumento)

// Number.isNan(x) - patikrina ar skaičius yra NaN
console.log(Number.isNaN(5 / 2)); // false
console.log(Number.isNaN(5 / 'du')); // true

if (5 / 'du' == NaN) {
    console.log('skaičius yra NaN');
} else {
    console.log('skaičius nėra NaN');
}

let nan = NaN;
if (nan === NaN) {
    console.log('skaičius yra NaN');
} else {
    console.log('skaičius nėra NaN');
}

console.log(Number.isNaN(nan));
// if palyginimo budas neveikia, reikia naudoti Number.isNaN() metoda
//NaN niekada nera lygus NaN

// // Number.isInteger() - patikrina ar skaičius yra sveikasis, grąžiną true/false
console.log(Number.isInteger(9)); // true
console.log(Number.isInteger(9.99)); // false

// Number.isSafeInteger() - patikrina ar skaičius gali būti saugomas kaip number ar reikia naudoti BigInt
console.log(Number.isSafeInteger(3)); // true
console.log(Number.isSafeInteger(67890123456789000)); // false

// Number.isFinite() - tikrina ar skaičius yra baigtinis (ar skaičius nėra NaN, Infinity, -Infinity)
// grąžina true / false

console.log(10 / 5); // 2
console.log(Number.isFinite(10 / 5)); // true

console.log(10 / 0); // Infinity
console.log(Number.isFinite(10 / 0)); // false

console.log(-10 / 0); // -Infinity
console.log(Number.isFinite(-10 / 0)); // false

console.log(10 * 'string'); // Infinity
console.log(Number.isFinite(10 * 'string')); // false

// 15 Praktinių užduočių – Number metodai

// 1. Skaičių pavertimas į string

// Paversti 456 į string naudojant
// Paversti 17 + 18 rezultatą į string.

// 2. Apvalinimas su .toFixed()

// Apvalinti 9.8765 iki 1 skaitmens po kablelio.
// Apvalinti 3.14159 iki 3 skaitmenų po kablelio.

// 3. Apvalinimas su .toPrecision()

// Suformatuoti 5.6789 iki 1 skaitmens.
// Suformatuoti 5.6789 iki 4 skaitmenų.
// Suformatuoti 12345.6789 iki 3 skaitmenų.

// 4. Reikšmių pavertimas į skaičius

// Paversti "42.7" į skaičių
// Paversti true ir false į skaičius.
// Išgauti 12 iš "12px".
// Išgauti 12.34 iš "12.34px".

// 5. Skaičių tikrinimas

// Patikrinti ar 5.5 yra sveikasis skaičius
// Patikrinti ar NaN yra NaN
// Patikrinti ar 10/2 yra baigtinis skaičius
// Patikrinti ar skaičius 12340123456789000 yra tinkamas saugoti kaip 'number'
