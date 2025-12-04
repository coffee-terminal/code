console.log('Kartojimas  - žinojimo žinios');

//Mergaitė turi penkis spalvotus pieštukus.

let mergaitesPiestukuKiekis = 5; //priskyrimas

console.log(mergaitesPiestukuKiekis);

mergaitesPiestukuKiekis = 7;
console.log(mergaitesPiestukuKiekis);
mergaitesPiestukuKiekis = 9;
console.log(mergaitesPiestukuKiekis);

mergaitesPiestukuKiekis = 25;
console.log(mergaitesPiestukuKiekis);

//mergaites vardas Maryte

const mergaitesVaras = 'Marytė';

// Berniukas, kurio vardas Tomukas, 5 pieštukus

const Berniukas1 = {
    vardas: 'Tomukas',
    pieštukuSkaicius: 5,
};

const Berniukas = {};

Berniukas.piestukuSkaicius = 5;
Berniukas.vardas = 'Tomukas';

const piesktukai = []; // tuscias masyvas

// piestukai[0] = 'Raudonas';
// piestukai[1] = 'Geltonas';
// piestukai[2] = 'Žalias';

// Gyveno žvėris - Bebras. Jis turėjo užtvanką ant Neries upės. Užtvankoje buvo sutempta 59 pagaliai
// Bebro uodega buvo ilga 39cm. Bebras turėjo 3 vaikus: 'Bebrius', 'Bebrikė' ir 'Bebroidas'.
// Aprašyti žvėrį

const zveris1 = {};

zveris1.tipas = 'Bebras';
zveris1.uztvankosUpe = 'Neris';
zveris1.uztvankosPagaliuKiekis = 59;
zveris1.uodegosIlgis = '39cm';
zveris1.vaikai = [];
zveris1.vaikai[0] = 'Bebrius';
zveris1.vaikai[1] = 'Bebrikė';
zveris1.vaikai[2] = 'Bebroidas';

console.log(zveris1);

const zveris2 = {
    tipas: 'Bebras',
    uztvankosUpe: 'Neris',
    uztvankosPagaliuKiekis: 59,
    uodegosIlgis: '39cm',
    vaikai: ['Bebrius', 'Bebrikė', 'Bebroidas'],
};
console.log(zveris1, zveris2);
// Prekė 'Rašiklių rinkinys'. Prekės kodas: 6548942158789. Kaina: 3.75 Rašiklių spalvos: 'Mėlyna', 'Juoda', 'Raudona'

// const preke = {
//     pavadinimas: 'Rašiklių rinkinys',
//     kodas: 6548942158789,
//     kaina: 3.75,
//     spalvos: ['Mėlyna', 'Juoda', 'Raudona'],
// };
const product1 = {
    title: 'Rašiklių rinkinys TRYS',
    code: '6548942158789',
    price: 3.75,
    colors: ['Mėlyna', 'Juoda', 'Raudona'],
};

const product2 = {
    title: 'Rašiklių rinkinys KETURI',
    code: '5666465135954',
    price: 4.25,
    colors: ['Mėlyna', 'Juoda', 'Raudona', 'Geltona'],
};

// kurio rinkinio vienas rasiklis yra pigesnis

if (product1.price / product1.colors.length < product2.price / product2.colors.length) {
    console.log(product1.title + ' vienas rašiklis yra pigesnis');
} else {
    console.log(product2.title + ' vienas rašiklis yra pigesnis');
}

const getOnePenPrice = (product) => {
    product.price / product.colors.length;
};
if (getOnePenPrice(product1) < getOnePenPrice(product2)) {
    console.log(product1.title);
} else {
    console.log(product2.title);
}

// Naujos statybos name parduodami du butai (analogija product1 ir product2)

// Butas. numeris: 45; užbaigtumas: "euroremontas", balkonas: nėra, kambariai: virtuvė 10m2,
// miegamasis: 15m2, svetainė: 18m2; kaina 75500eur
console.clear();

const butas1 = {
    butoNumeris: 45,
    uzbaigtumas: 'euroremontas',
    balkonas: false,
    kambariai: [
        {
            kambarioTipas: 'virtuvė',
            kambarioM2: 10,
        },
        {
            kambarioTipas: 'miegamasis',
            kambarioM2: 15,
        },
        {
            kambarioTipas: 'svetainė',
            kambarioM2: 18,
        },
    ],
    kainaEur: 75500,
};

// Butas. numeris: 12; užbaigtumas: "neįrengtas", balkonas: yra,  kambariai: virtuvė 9m2,
// miegamasis: 12m2, svetainė: 20m2, vaikų kambarys: 14m2; kaina 92500eur

const butas2 = {
    butoNumeris: 12,
    uzbaigtumas: 'neįrengtas',
    balkonas: true,
    kambariai: [
        {
            kambarioTipas: 'virtuvė',
            kambarioM2: 9,
        },
        {
            kambarioTipas: 'miegamasis',
            kambarioM2: 12,
        },
        {
            kambarioTipas: 'svetainė',
            kambarioM2: 20,
        },
        {
            kambarioTipas: 'vaikų kambarys',
            kambarioM2: 14,
        },
    ],
    kainaEur: 92500,
};

// Klausimas pirmas: Kuris butas turi daugiau kambarių?
// Klausimas antras: Kurio buto kvadratinis metras yra brangesnis (nesikartojome šito, tiesiog kam
//  per paprastas pirmas klausimas, kad turėtų ką veikti - tema masyvo metodai)

if (butas1.kambariai.length < butas2.kambariai.length) {
    console.log('Butas numeriu: ' + butas2.butoNumeris + ' turi daugiau kambarių');
} else {
    console.log('Butas numeriu: ' + butas1.butoNumeris + ' turi daugiau kambarių');
}

let kambariuM2 = 0;
let kvadratoKaina = [0];
let brangesnis = kvadratoKaina[0];
const butai = [butas1, butas2];

for (let i = 0; i < butai.length; i++) {
    for (let t = 0; t < butai[i].kambariai.length; t++) {
        kambariuM2 += butai[i].kambariai[t].kambarioM2;
    }
    kvadratoKaina[i] = butai[i].kainaEur / kambariuM2;

    console.log(
        'Butas numeriu: ' + butai[i].butoNumeris + ' Kaina: ' + butai[i].kainaEur + ' eur',
        kambariuM2 + ' m2',
        kvadratoKaina[i].toFixed(2) + ' m2/eur'
    );

    if (kvadratoKaina[i] > brangesnis) {
        brangesnis = kvadratoKaina[i];
        brangesnisButas = butai[i].butoNumeris;
    }
}
console.log('Butas numeriu ' + brangesnisButas + ' kvadratinis metras yra brangesnis. m2/eur kaina: ' + brangesnis.toFixed(2));
