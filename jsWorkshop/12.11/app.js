// MATH metodai:

// Sintaksė: Math.method(number)
// Nepakeičia pirminio skaičiaus. Metodas paima reikšmę → atlieka skaičiavimus → grąžina rezultatą.
// Math metodai tinka naudoti su:
// - skaičiais - pvz. 123,69;
// - kintamaisiais - pvz. let x = 123.69;
// - matematinėm išraiškom - pvz. (100 + 23);

// // 1. Apvalinimas iki sveikojo skaičiaus:

// // a) Math.round() - suapvalina iki artimiausio sveikojo skaičiaus
console.log(Math.round('7.5')); // 8
console.log(Math.round(7.4)); // 7
console.log(Math.round(-7.5)); // -7

// // b) Math.ceil() - suapvalina skaičių į didesnę pusę
console.log(Math.ceil(5.01)); // 6
console.log(Math.ceil(-5.01)); // -5

// // c) Math.floor() - suapvalina skaičių į mažesnę pusę
console.log(Math.floor(3.01)); // 3
console.log(Math.floor(-3.01)); // -4

// // d) Math.trunc() - grąžina (neapvalina) sveikajį skaičiaus dalį
console.log(Math.trunc(8.01)); // 8
console.log(Math.trunc(8.99)); // 8
console.log(Math.trunc(-8.99)); // -8

// // 2. Patikrinimas ar skaičius teigiamas/neigiamas/0  -  Math.sign()
// // grąžina skaičių -1 / 0 / 1

console.log(Math.sign(10)); // 1
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0

console.log(Math.sign('55')); // 1
console.log(Math.sign('55abc')); // NaN
console.log(typeof Math.sign(10)); // number

// // 3. Maksimumo ir minimumo paieška
// // a) Math.max() - grąžina didžiausią iš tikrinamų skaičių (argumentų)

console.log(Math.max(0, 4, -8, '15', -17, 18)); // 18
console.log(Math.max()); // -Infinity

// // b) Math.min() - grąžina mažiausią iš tikrinamų skaičių (argumentų)

console.log(Math.min(102, 18, -45, 0, 68, -210)); // -210
console.log(Math.min()); // Infinity

console.log(Math.min('2', 14, '-15', '48')); // -15
console.log(Math.min('2', 14, '-15', '48abc')); // NaN

// // 4. Atsitiktinių skaičių generavimas
// // Math.random() - grąžina atsitiktinį skaičių nuo 0(imtinai) iki 1 (imtinai)

console.log(Math.random()); // 0 >= && <= 1

console.log(Math.floor(Math.random() * 10 + 1)); //grąžina sveikąjį atsitiktinį skaičių nuo 1 (imtinai) iki 10(imtinai)

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// 4. Skaičiaus absoliuti reikšmė (modulis) – tai skaičiaus dydis be ženklo.
// Math.abs() - grąžina absoliučią skaičiaus reikšmę

console.log(Math.abs(-3.58)); // 3.58
console.log(Math.abs(3.58)); // 3.58
console.log(Math.abs(0)); // 0
console.log(Math.abs()); // NaN
console.log(Math.abs('14')); // 14
console.log(Math.abs('14abc')); // NaN

// // 5. Laipsniai ir šaknys
// // a) Math.pow(skaicius, laipsniu) - pakelia skaičių laipsniu

console.log(Math.pow(2, 4)); // 16
console.log(2 ** 4); // 16

console.log(Math.pow(-4, 3)); // -64

// // b) Math.sqrt() - grąžina kvadratinę šaknį

console.log(Math.sqrt(25)); // 5

// // b) Math.cbrt(x) - grąžina kubinę šaknį

console.log(Math.cbrt(27)); // 3
console.clear();
// OBJECTS

const studentas = {
    name: 'Jonas',
    age: 18,
    isStudent: true,
    faculty: 'Tiksliųjų mokslų fakultetas',
    modul: 'Aukštoji matematika',
    languages: ['Lithuanian', 'English', 'German'],
    address: {
        city: 'Vilnius',
        street: 'Taikos pr.',
        buildingNr: 58,
    },
    examResults: [98, 84, 76, 89, 93],
    introduce() {
        console.log(`Aš esu ${studentas.name}, man ${studentas.age} metų. Mano gimtasis miestas ${studentas.address.city}`);
    },
};

console.log(studentas);

// // 2 sintaksės būdai pasiekti objekto reikšmes:
console.log(studentas.name);
console.log(studentas['name']);

console.log(studentas.address.city); //vilnius

// // Objekto reikšmių koregavimas:
studentas.age = 19;
console.log(studentas);

// // Objekto reikšmių pridėjimas:
studentas.email = 'jonas2007@gmail.com';
console.log(studentas);

// // Objekto reikšmių ištrynimas:
delete studentas.modul;
console.log(studentas);
console.log(studentas.modul);

// // Objekto raktų egzistavimo patikrinimas
console.log('name' in studentas); // true
console.log('lastName' in studentas); // false

// // Metodas objekte - tai funkcija esanti objekto viduje (introduce())
studentas.introduce();

// // Metodai

// // Object.keys(obj) → grąžina masyvą su raktų vardais
console.log(Object.keys(studentas));

// // Object.values(obj) → grąžina masyvą su reišmių vardais
console.log(Object.values(studentas));

// // Object.entries(obj) → grąžina masyvų masyvą su raktų/reikšmių  [key, value] poromis
console.log(Object.entries(studentas));

console.log('---------------------------------------------------');

// 10 MEDIUM-LEVEL Math Tasks

// 1. Apskaičiuoti nuolaidą (su suapvalinimu iki 2 skaičių po kablelio)
// Turime kainą 79.99€ ir nuolaidą 17%.
// Apskaičiuok galutinę kainą, apvalindamas iki 2 skaičių po kablelio.
// Naudoti: Math.round() arba toFixed() + Number()

// 2. Tiksliai apskaičiuoti kūno masės indeksą (BMI)

// Duota: masė = 82.3 kg, ūgis = 1.76 m.
// BMI = masė / ūgis²
// Šaknį arba laipsnį kelti su Math.pow().
// Rezultatą suapvalinti iki 1 skaičiaus.

// 3. Sugeneruoti 3 atsitiktinius skaičius (1–50) ir rasti didžiausią

// Panaudoti:
// Math.random()
// Math.floor()
// Math.max()

// 4. Sugeneruoti atsitiktinę temperatūrą (−20 iki +20)

// Temperatūrą suapvalinti iki sveiko skaičiaus ir parašyti:
// jei teigiama → “šilta”
// jei neigiama → “šalta”
// jei 0 → “neutralu”
// Naudoti: Math.sign() ir Math.round()

// 5. Telefono baterijos simuliacija

// Sugeneruoti atsitiktinį baterijos lygį 0–100%.
// Jei < 20 → “Krauti bateriją”
// Jei 20–80 → “Viskas gerai”
// Jei > 80 → “Beveik pilna”
// Naudoti: random + logika, Math nėra sudėtingas, bet pats scenarijus realus.

// 6. Apskaičiuoti kelionės kainą pagal nuvažiuotus km

// Dienos tarifas:
// pirmi 10 km → 0.50 €/km
// 10 km → 0.30 €/km
// Duoti km = 18.4
// Naudoti Math.floor() ir Math.round() galutinei sumai iki 2 skaitmenų.

// 7. Rasti artimiausią sveiką skaičių, kuris dalinasi iš 7

// Duotas skaičius: 52.3
// Rasti:
// suapvalintą žemyn → artimiausias mažesnis, dalinantis iš 7
// suapvalintą aukštyn → artimiausias didesnis, dalinantis iš 7
// Naudoti: Math.floor(), Math.ceil()

// 8. Apskaičiuoti įmoką per mėnesį (mini paskolos užduotis)

// Suma = 1200 €
// Metinės palūkanos = 12%
// Mėnuo = 1/12 metų
// Įmoka = suma * (palūkanos per mėnesį)
// Suapvalinti iki 2 skaičių.

// 9. Normalizuoti skaičių į intervalą 0–1

// Duotas skaičius: 78, minimalus 0, maksimalus 100.
// Formulė:
// norm = (value - min) / (max - min)
// Suapvalinti iki 3 skaitmenų.

// 10. Žaidimo kauliukas: išmesti du kauliukus ir apskaičiuoti sumą

// Simuliuok:

// Kauliukas A: random 1–6
// Kauliukas B: random 1–6
// Suma
// Jei suma > 8, laimėjai; kitaip pralaimėjai.
// Naudoti: Math.random(), Math.floor(), Math.max() nėra būtinybės, bet galima naudoti bonusui.
