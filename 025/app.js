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
