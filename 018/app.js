console.log('Hello, Loop!');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
//duotas zodis "Meškėnas". Reikia konsolėje atskirai atspausdinti po vieną visas raides.

const word = 'Meškėnas';
let out = '';
for (i = 0; i < word.length; i++) {
    //  console.log(word[i]); // konsolė spausdina daug kartų
    out += word[i] + '\n';
} //blokas kartojassi

console.log(out); //konsolė spausdina vieną kartą

//duotas zodis "Meškėnas". Reikia HTML žodį atspausdinti stulpeliu.

const body = document.querySelector('body');

for (i = 0; i < word.length; i++) {
    const div = document.createElement('div'); //sukuriame kiekvienai raidei div
    div.innerText += word[i]; //pridedam į tą div raidę
    body.appendChild(div); //divas su raide įkeliame į body
}

// console.clear();

//ciklas while
let number1;

do {
    number1 = rand(0, 10);
    console.log(number1);
} while (number1 > 5);

//Sakykime metame monetą ir ji gali iškristi kaip Herbas arba S, kaip skaicius. Tam panaudojame rand funkciją.

//mesti monetą kol iškris H tai yra herbas
let coin;
do {
    coin = rand(0, 1) ? 'H' : 'S';

    console.log(coin);
} while (coin != 'H');

// == <--> !=
// > <--> <=
// > <--> >=
// || <--> &&
// console.clear();

//Mesti moneta pakol iškris 3h
let times = 0;

let saugiklis = 3;

do {
    coin = rand(0, 1) ? 'H' : 'S';

    console.log(coin);
    if (coin == 'H') {
        times++;
    }
    saugiklis--;
    if (!saugiklis) {
        console.log('suveike saugiklis');
        break;
    }
} while (times < 3);
