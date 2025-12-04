function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
// 1. Sukurkite objektą apie žmogų
// Sukurkite objektą zmogus su savybėmis: vardas, amzius, miestas.
// Atspausdinkite visus laukus konsolėje.

const zmogus = {
    vardas: '',
    amzius: '',
    miestas: '',
};

// console.log(zmogus);
// console.log(zmogus.vardas);

// Sudėtingesnė užduotis : sukurti masyvą iš 10 atsitiktinių skaičiu (programiškai) intervale nuo 0 iki 100. Mažiausią skaičių pakeisti į -5, didžiausią į 120. Paskaičiuoti visų skaičių vidurkį

let atsitiktiniuSuma = 0;
let atsitiktinis = [0];
for (let i = 1; i <= 10; i++) {
    atsitiktinis[i] = rand(0, 100);
    if (i == 1) {
        atsitiktinis[i] = -5;
    } else if (i == 10) {
        atsitiktinis[i] = 120;
    }
    console.log(atsitiktinis[i]);
    atsitiktiniuSuma += atsitiktinis[i];
}
console.log(atsitiktiniuSuma);
let atsitiktiniuSkaiciuVidurkis = atsitiktiniuSuma / 10;
console.log(atsitiktiniuSkaiciuVidurkis);

// 2. Pakeiskite objekto savybę
// Turite objektą:
// let masina = { marke: 'Audi', metai: 2010 };
// Pakeiskite metai į 2020 ir pridėkite naują savybę spalva.
// Atspausdinkite atnaujintą objektą.

let masina = { marke: 'Audi', metai: 2010 };

masina.metai = 2020;
masina.spalva = 'pilka';
console.log(masina);

// 3. Objekte esantis masyvas
// Sukurkite objektą studentas su savybėmis:
// vardas
// pazymiai (masyvas su 5 skaičiais)
// Atspausdinkite pirmą pažymį ir paskutinį pažymį.

const studentas = {
    vardas: 'Jonas',
    pazymiai: [
        {
            pazimys: 1,
        },
        {
            pazimys: 2,
        },
        {
            pazimys: 3,
        },
        {
            pazimys: 4,
        },
    ],
};

console.log(studentas.pazymiai[0]);
console.log(studentas.pazymiai[studentas.pazymiai.length - 1]);

// 4. Patikrinkite, ar savybė egzistuoja

// Turite objektą:

// let knyga = { pavadinimas: 'Harris Poteris', puslapiai: 500 };

// Patikrinkite, ar egzistuoja savybė autorius.

// Jei nėra — pridėkite su reikšme 'Nežinomas'.

let knyga = { pavadinimas: 'Harris Poteris', puslapiai: 500 };

if (!knyga.autorius) {
    knyga.autorius = 'Nežinomas';
}
console.log(knyga);

// Masyvo elementų atvirkštinis išvedimas
// Turite masyvą:
// let gyvunai = ["šuo", "katė", "bebras"];
// Užduotis:
// Atspausdinkite masyvo elementus atvirkštine tvarka (bebras, katė, šuo).

let gyvunai = ['šuo', 'stirna', 'katė', 'bebras'];
console.log(gyvunai);
console.log(gyvunai.reverse());

for (let i = gyvunai.length - 1; i >= 0; i--) {
    console.log(gyvunai[i]);
}

// const byLetterCount = gyvunai.toSorted((a, b) => {
//     return a - b;
// });
// const byLetter = gyvunai.toSorted((a, b) => {
//     return a.[1] - b.[1];
// });
// console.log(byLetterCount.reverse());
// console.log(byLetter);
