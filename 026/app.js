console.log('Labas dienas');

const namas = {
    kaminas: 'yra didelis',
    durys: 'metalines',
};

console.log(structuredClone(namas)); // gilus kopijavimas
console.log({ ...namas }); // seklus kopijavimas

namas.langai = 5;

console.log(namas);

const unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, { cats: true }];

const shuffled = unshuffled.sort(() => Math.random() - 0.5); // atsitiktinis išdėstymas paremtas rūšiavimu
console.log(shuffled);

// Naujos statybos name parduodami du butai (analogija product1 ir product2)

// Butas. numeris: 45; užbaigtumas: "euroremontas", balkonas: nėra, kambariai: virtuvė 10m2,
// miegamasis: 15m2, svetainė: 18m2; kaina 75500eur

const flat1 = {
    number: 45,
    finish: 'euroremontas',
    ballcony: false,
    rooms: [
        {
            name: 'virtuve',
            sq: 10,
        },
        {
            name: 'miegamasis',
            sq: 15,
        },
        {
            name: 'svetaine',
            sq: 18,
        },
    ],
    price: 75500,
};

// Butas. numeris: 12; užbaigtumas: "neįrengtas", balkonas: yra,  kambariai: virtuvė 9m2,
// miegamasis: 12m2, svetainė: 20m2, vaikų kambarys: 14m2; kaina 92500eur
const flat2 = {
    number: 12,
    finish: 'neįrengtas',
    ballcony: true,
    rooms: [
        {
            name: 'virtuve',
            sq: 10,
        },
        {
            name: 'miegamasis',
            sq: 15,
        },
        {
            name: 'svetaine',
            sq: 18,
        },
        {
            name: 'vaiku',
            sq: 14,
        },
    ],
    price: 92000,
};

// Klausimas pirmas: Kuris butas turi daugiau kambarių?
// Klausimas antras: Kurio buto kvadratinis metras yra brangesnis (nesikartojome šito, tiesiog kam
//  per paprastas pirmas klausimas, kad turėtų ką veikti - tema masyvo metodai)

if (flat1.rooms.length > flat2.rooms.length) {
    console.log(flat1.number);
} else {
    console.log(flat2.number);
}

const oneSqprice = (flat) => {
    const size = flat.rooms.reduce((counter, room) => {
        return counter + room.sq;
    }, 0);
    return flat.price / size;
};

if (oneSqprice(flat1) > oneSqprice(flat2)) {
    console.log(flat1.number);
} else {
    console.log(flat2.number);
}

console.log('---------------------------');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const skaiciusA = rand(1, 45);
const skaiciusB = rand(1, 45);

console.log('A', skaiciusA, 'B', skaiciusB); // NE

if (skaiciusA > skaiciusB) {
    console.log('Didesnis A'); // TAIP
} else {
    console.log('Didesnis B'); // NE
}

//duoti random skaiciai A1, A2, ir B1, B2

const A1 = rand(1, 25);
const A2 = rand(1, 25);
const B1 = rand(1, 25);
const B2 = rand(1, 25);
console.log(A1, B1, A2, B2);

//isinkti didesni iš A ir didesni is B, ir pasakyti kuris didesnis

// if (A1 > A2) {
//     didesnis1 = A1;
// } else {
//     didesnis1 = A2;
// }

// if (B1 > B2) {
//     didesnis2 = B1;
// } else {
//     didesnis2 = B2;
// }

// if (didesnis1 > didesnis2) {
//     didesnis = didesnis1;
// } else {
//     didesnis = didesnis2;
// }
A1 > A2 ? (didesnis1 = A1) : (didesnis1 = A2);
B1 > B2 ? (didesnis2 = B1) : (didesnis2 = B2);

didesnis1 > didesnis2 ? (didesnis = didesnis1) : (didesnis = didesnis2);

console.log(didesnis);

const A = A1 > B1 ? A1 : B1;
const B = A2 > B2 ? A2 : B2;

const rez = A < B ? A : B;

const rez2 = Math.min(Math.max(A1, A2), Math.max(B1, B2));
console.log(rez, rez2);

//Duoti 2 random skaiciai nuo 1 iki 17.
// A. ar jie abudu didesni nei 11
//B. Ar yra bent vienas skaicius didesnis uz 14.

const random1 = rand(1, 17);
const random2 = rand(1, 17);
console.log(random1, random2);

if (random1 > 11 && random2 > 11) {
    console.log('abu didesnis uz 11');
} else {
    console.log('vienas ar abu ne didesni nei 11');
}

if (random1 > 14 || random2 > 14) {
    console.log('Kazkuris skaicius didesnis uz 14');
} else {
    console.log('nei vienas nedidesnis uz 14');
}

//Atspausdinti zodzio Karakumai kas antra raide ======> Krkmi
const zodis = 'Karakumai';
let kasAntra = '';
let kasAntra2 = '';

for (let i = 0; i < zodis.length; i = i + 2) {
    kasAntra += zodis[i];
    // i++;
}

for (let i = 0; i < zodis.length; i++) {
    if (i % 2) {
        continue;
    } else {
        kasAntra2 += zodis[i];
    }
}
console.log(kasAntra, kasAntra2);
