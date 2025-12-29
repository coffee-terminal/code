console.log('Ką tu, Masyvai?');

const animal = {
    name: 'Zuikis',
    eat: 'morka',
    tail: 'short',
};

console.log(animal);

const colorPensObj = {
    one: 'Raduonas',
    two: 'Žalias',
    three: 'Geltonas',
};

console.log(colorPensObj.two);

//Masyvas skirtas objektas skirtas saugoti vienodiems*, iš eilės sudėliotiems kintamiesiems
//*nebūtinai
const colorPens = [
    'Raduonas',
    'Žalias', // jo indeksas 1
    'Geltonas',
];

console.log(colorPens);

console.log(colorPens[1]);

colorPens[1] = 85;
colorPens[7] = 'Juodas';

// 1, 7 vadinami indeksais

console.log(colorPens);

console.log(colorPens[3], colorPens[colorPens.length - 1]);

const animals = [];

animals[0] = 'Bebras';
animals[1] = 'Barsukas';

animals.push('Briedis'); // dedam sekantį eilės elementą
animals.push('Vikas');
animals.push('Zuikis', 'Kiškis'); // kelis (daug) iškart

console.log(animals);

// const daugiabutis = [];
// daugiabutis.push('Pirmas', 'Dveidešimtas');

// console.log(daugiabutis);

const word = 'rabarbaras';

const found = [];

for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found.push(i); // dedam 'r' raidės vietą
    }
} // blokas kartojasi

console.log(found);

//1. padaryti masyva iš skaičių 55, 77 , 2 (naudojant push)

const myNumbers = [];

// myNumbers.push(55, 77, 2);
myNumbers.push(55);
myNumbers.push(77);
myNumbers.push(2);

console.log(myNumbers);

//2.padaryti masyva iš skaičių 1, 2 , 3.... 99, 100 naudojant for

const myNumbers2 = [];

for (i = 1; i <= 100; i++) {
    myNumbers2.push(i);
}

console.log(myNumbers2);

const h2First = document.querySelector('h2');
const h2Second = document.querySelector('h2 + h2');

console.log(h2First.innerText);
console.log(h2Second.innerText);

const h2All = document.querySelectorAll('h2'); // node list - kuris iš principo yra masyvas

console.log(h2All[2].innerText);

for (let i = 0; i < h2All.length; i++) {
    console.log(h2All[i].innerText);
    h2All[i].style.color = 'skyblue';
}

h2Second.style.color = 'crimson';
// h2All.style.color = 'skyblue'; nesigauna taip

for (let i = 0; i < h2All.length; i++) {
    h2All[i].style.color = 'skyblue';
}

// 3. Elemente section sukurti 3 h3 tagus su kaičiais 1, 2, 3

const sectionElement = document.querySelector('section');

for (i = 1; i <= 3; i++) {
    // skaiciuojam 1,2,3
    const h3Element = document.createElement('h3'); // naujas blizgantis h3 elementas "danguje"
    h3Element.innerText = i; // pridedam teksta kaip skaiciu (1 arba 2 arba 3)
    sectionElement.appendChild(h3Element); // sekscijos viduje "materelizuojame" naują h3
}

// console.clear();

const colors = [];
colors.push('Red');
colors.push('Blue');
colors.push('Green');

console.log(colors);
colors.unshift('Black'); // prideda i masyvo pradzia
console.log(colors);
