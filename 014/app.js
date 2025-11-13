console.log('Veikia...');

// 1. Naudokime innerHTMl

const section1 = document.querySelector('#nr1');

const divHtmlString = '<div class="circle1"></div>';

section1.innerHTML = divHtmlString;

const circle1 = document.querySelector('.circle1');

// circle1.style.display = 'inline-block';
circle1.style.width = '100px';
circle1.style.border = '1px solid white';
circle1.style.height = '100px';
circle1.style.borderRadius = '50%';

// 2. Naudokime createElement

const section2 = document.querySelector('#nr2');

const divCircle = document.createElement('div');
// divCircle.style.display = 'inline-block';
divCircle.style.width = '100px';
divCircle.style.height = '100px';
divCircle.style.border = '1px solid orange';
divCircle.style.borderRadius = '50%';

section2.appendChild(divCircle);

// 3. Naudokime innerHTMl sudetingam html

const section3 = document.querySelector('#nr3');

const Bebras = 'Bebras';
const Iguana = 'Iguana &#9855';

const fancyDiv = `
            <div class="fancy">
                <div class="fancy2">
                    <span>
                        <b>${Bebras}</b>
                        <i>${Iguana}</i>
                    </span>
                </div>
            </div>`;

section3.innerHTML = fancyDiv;

// Objektai

const namas1 = {}; // naujas tuscias objektas

namas1.langai = 3; // kintamojo aparasas
namas1.durys = 'Dideles';
namas1.arGeras = true;

namas1.kambariai = {};

namas1.kambariai.virtuve = '10m2';
namas1.kambariai.miegamasis = '30m2';

console.log(namas1);

const namas2 = {
    langai: 4,
    durys: 'yra',
    arGeras: true,
    kambariai: {
        virtuve: '10m2',
        miegamasis: '30m2',
    },
};

console.log(namas2);

const b1 = {
    vardas: 'Jonas',
    metai: 20,
};
const b2 = {
    vardas: 'Jonas',
    metai: 20,
};

const b3 = b2; // priskyrimas by reference

if (b1 == b2) {
    console.log('Bebrai vienodi');
} else {
    console.log('Bebrai nevienodi');
}

if (b3 == b2) {
    console.log('Bebrai vienodi');
} else {
    console.log('Bebrai nevienodi');
}

b2.vardas = 'Petras';

console.log(b1, b2, b3);

const sk1 = 521;

const sk2 = sk1; // by value

// nuo cia
let rez; // global scope

if (5 > 10) {
    // nuo cia
    rez = 'Taip';
    // iki cia
} else {
    rez = 'Ne';
}

console.log(rez);

// iki cia
