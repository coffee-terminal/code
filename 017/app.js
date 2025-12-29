console.log('Hello, darkness my old friend');

// in-line funkcija

// const clickMeNo1 = function() {
//     console.log('Button No1');
// };

const buttonNo1 = document.querySelector('#nr1');

// in-line funkcija, kai eina toje pacioje eiluteje su kodu
buttonNo1.addEventListener('click', function () {
    console.log('Button No1');
});

// const clickMeNo2 = function () {
//     console.log('Button No2');
// };

// Arrow funkcija
const clickMeNo2 = () => {
    console.log('Button No2');
};

// skiriasi žodeliu this

const buttonNo2 = document.querySelector('#nr2');

//inline Arrow funkcija
// buttonNo2.addEventListener('click', () => {
//     console.log('Button No2');
// });

buttonNo2.addEventListener('click', (_) => console.log('Button No2'));

//paprasta funkcija
const sum1 = function (a, b) {
    return a + b;
};

//arrow funkcija

const sum2 = (a, b) => {
    return a + b;
};

// jeigu funkcijos bloke yra tik viena eilutė, galime suprastinti
const sum3 = (a, b) => a + b;

console.log(sum1(5, 3));
console.log(sum2(5, 3));
console.log(sum3(5, 3));
////////////////////

const add5 = function (a) {
    return a + 5;
};

const add5a = (a) => {
    return a + 5;
};

//jeigu yra tik vienas parametras, galime praleisti parametru skliaustelius
const add5b = (a) => a + 5;

console.log(add5(12));
console.log(add5a(12));
console.log(add5b(12));

const bebras1 = () => {
    return 'Bebras';
};

const bebras2 = () => 'Bebras';

// Kintamasis vardu _ yra naudojamas sintaksei užpildyti, bet nenaudojamas skaičiavimuose
const bebras3 = (nenaudoju) => 'Bebras';

const bebras4 = (_) => 'Bebras';

console.log(bebras1());
console.log(bebras2());
console.log(bebras3());
console.log(bebras4());

console.clear();

for (let i = 0; i < 10; ++i) {
    console.log('bla bla', i);
}

//Panaudojimas 1.Radimas 2.Agregacija

const word = 'rabarbaras';

let found = 'r raidė nerasta';

let count = 0;

for (i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found = `"r" rasta ${i} vietoje`; // uzrasas ${i} nieko bendro su ciklu neturi
    }
}
//SPAUSDINIMAS VYKSTA NE CIKLE
console.log(found); //nera ciklo bloke ir nesikaroja

for (i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        count++; //radome viena
    }
}

console.log(`Žodyje ${word} yra ${count} "r"`); //nera ciklo bloke ir nesikaroja

let found1 = '';

for (i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found1 += `"r" rasta ${i + 1} vietoje `;
    }
}
console.log(found1); //nera ciklo bloke ir nesikartoja

/* 
CIKLAI:

for 
while
do while
for in
for of
switch

CIKLO VALDYMAS:
break
continue

 */
