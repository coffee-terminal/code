console.log('Labas Wednesday!');

// if (salyga){
//     ka darome jei salyga issipildo
// } else{
//     ka darome kai salyga neissipildo
// }

// 1. Ridenam kamuoliuką. Į atitinkamus tag'us parašom skaičių ir ar skaičius lyginis/nelyginis.
// Lyginį skaičių nudažom mėlynai, nelyginį - raudonai.

const skaicius = document.querySelector('div p span');
//skaicius.innerText = 'Tikriname ar radome';

const lygNelyg = document.querySelector('.uzduotis1 > p + p > span');
//lygNelyg.innerText = 'Ziurim ar pateikem';

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const ridenam = rand(1, 6);
skaicius.innerText = ridenam;
console.log(ridenam);

if (ridenam == 2 || ridenam == 4 || ridenam == 6) {
    lygNelyg.innerText = 'lyginis';
    lygNelyg.style.color = 'blue';
    lygNelyg.style.backgroundColor = 'lightGray';

    console.log('lyginis');
} else {
    lygNelyg.innerText = 'nelyginis';
    lygNelyg.style.color = 'crimson';
    console.log('nelyginis');
}

// 2. Petras ir Birutė ridena kamuoliuką. Į atitinkamus tagus įrašyti išridentus skaičius.
// Didesnį skaičių nuspalvinti žaliai.
// Parašyti kas nugalėjo.

const skaicius1 = document.querySelector('.uzduotis2 p span');
const skaicius2 = document.querySelector('.uzduotis2 > p + p > span');
const skaicius3 = document.querySelector('.uzduotis2 > p + p + p > span');

const petrasRand = rand(1, 6);
skaicius1.innerText = petrasRand;
console.log(petrasRand);

const onuteRand = rand(1, 6);
skaicius2.innerText = onuteRand;
console.log(onuteRand);

if (petrasRand == onuteRand) {
    skaicius3.innerText = 'lygu';
} else if (petrasRand > onuteRand) {
    skaicius1.style.color = 'green';
    skaicius3.innerText = 'petras';
} else {
    const nugalejo = 'onute';
    skaicius2.style.color = 'green';
    skaicius3.innerText = 'onute';
}
