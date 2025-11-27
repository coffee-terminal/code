console.log('Masyvo triukai');

const numbersArray = [45, 5, 87, 96, -1, 51, 0, 36];

//rasti 96 indeksą

let indexOf96 = -1;

// const find96Index = (number, i) => {
//     if (number == 96) {
//         indexOf96 = i;
//     }
// };

// for (let i = 0; i < numbersArray.length; i++) {
//     find96Index(numbersArray[i], i);
// }

//analogija
// numbersArray.forEach(find96Index);

numbersArray.forEach((number, i) => {
    if (number == 96) {
        indexOf96 = i;
    }
});

console.log(indexOf96);

const animals = [
    {
        name: 'Briedis',
        age: 54,
    },
    {
        name: 'Lapė',
        age: 12,
    },
    {
        name: 'Vilkas',
        age: 8,
    },
    {
        name: 'Kiškis',
        age: 4,
    },
    {
        name: 'Erelis',
        age: 16,
    },
    {
        name: 'Voverė',
        age: 3,
    },
];

//kiek Vilkui metu - spresti naudojant forEach
let wolfAge;
let wolfEile;

//nepriskiriam undefined - tada kai turim primityvu tipa number string
//priskiriam -1 kai skaiciuojam indeksus
// let wolfEile = -1;
//priskiriam null - tada kai turim objekta
//priskiriam pradine reiksme dazniausiai nuli 0 jeigu darome agregacijas (suma pvz skaiciuojam)

//zveris pats sugalvojau ir pavadinau kaip uzsimaniau
animals.forEach((zveris, i) => {
    if (zveris.name == 'Vilkas') {
        wolfAge = zveris.age;
        wolfEile = i;
    }
});

console.log('metai: ' + wolfAge, 'indeksas: ' + wolfEile);

//zveris pats sugalvojau ir pavadinau kaip uzsimaniau
let zveriuAmziuSuma = 0;
animals.forEach((zveris) => {
    zveriuAmziuSuma = zveris.age + zveriuAmziuSuma;
});

console.log(zveriuAmziuSuma);

//zveris pats sugalvojau ir pavadinau kaip uzsimaniau
let zveriuAmziuSuma2 = 0;
let zveriuAmziuvidurkis = 0;

animals.forEach((zveris, i) => {
    zveriuAmziuSuma2 += zveris.age;
    if (i == animals.length - 1) {
        zveriuAmziuvidurkis = zveriuAmziuSuma2 / animals.length;
    }
});

console.log(zveriuAmziuSuma2, zveriuAmziuvidurkis.toFixed(2), (zveriuAmziuSuma2 / animals.length).toFixed(2));

const surastasErelis = animals.find((zveris) => {
    let arTas;
    if (zveris.name == 'Erelis') {
        arTas = true;
    } else {
        arTas = false;
    }
    return arTas;
});

console.log(surastasErelis);

const surastasKiskis = animals.find((zveris) => zveris.name == 'Kiškis');

console.log(surastasKiskis);

const surastasKiskis1 = animals.find((zveris) => zveris.name == 'Kiškis').age;
const { age: kiskioMetai2, name } = animals.find((zveris) => zveris.name == 'Kiškis');

console.log(surastasKiskis1, kiskioMetai2, name);

const animasAgePlus1 = animals.map((zveris) => {
    const zverisPlus = {};
    zverisPlus.name = zveris.name;
    zverisPlus.age = zveris.age;
    return zverisPlus;
});

console.log(animasAgePlus1);

const animasAgePlus1a = animals.map((zveris) => ({ ...zveris, age: zveris.age + 1 }));

console.log(animasAgePlus1a);

//Spread
const ufo1 = {
    speed: 500,
    size: 'Big',
    power: 2000,
};

const ufo2 = ufo1; // priskirimas pagal reference tas pats objektas

const ufo3 = { ...ufo1 }; // naujas objektas

const ufo4 = { ...ufo1, size: 'small' };
// ----> {speed: 500,size: 'Big',power: 2000, size:'Small'}
// ----> size: 'Small' overwrite size :'Big'
// ----> {speed: 500,size: 'Small',power: 2000}

ufo2.power = 3000;

console.log(ufo1, ufo2, ufo3, ufo4);
