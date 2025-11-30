function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

//1.Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai.

const A1button = document.querySelector('button');
A1button.style.height = '30px';
A1button.style.width = '100px';
const A1h2 = document.querySelectorAll('h2');
A1h2[0].innerText = 'random skaicius';
A1h2[1].innerText = 'random skaicius';

A1button.addEventListener('click', () => {
    for (let i = 0; i < A1h2.length; i++) {
        let h2Random = rand(1, 6);
        console.log(h2Random);
        A1h2[i].innerText = h2Random;
    }

    //     const h2Random1 = rand(1, 6);
    //     const h2Random2 = rand(1, 6);
    // console.log('clicked');
    //     console.log(h2Random1);
    //     console.log(h2Random2);

    //     A1h2[0].innerText = h2Random1;
    //     A1h2[1].innerHTML = h2Random2;
});

//2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką.
// Susikurkite tuščią masyvą, skaičiams saugoti.
// Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10.
// Sugeneruotą skaičių pridėkite į masyvą,
// o tą masyvą atspausdinkite konsolėle.
// <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą.

const A2h3 = document.querySelector('h3');
const A2button = document.querySelector('button:nth-of-type(2)');
A2button.style.height = '30px';
A2button.style.width = '100px';
const A2arr = [];
let ArrSuma = 0;
A2button.addEventListener('click', () => {
    const h3Random1 = rand(1, 10);
    A2arr.push(h3Random1);
    console.log(A2arr);

    ArrSuma += h3Random1;

    A2h3.innerText = ArrSuma;
});

//3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą.
//  JS pagalba perskaitykite masyvą africa
// ir naudodami createElement()  ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų.
// Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite.

const A3ul = document.querySelector('ul');

for (let i = 0; i < africa.length; i++) {
    let A3liText = africa[i];
    if (africa[i] == '') {
        continue;
    } else {
        const A3li = document.createElement('li');
        A3li.innerText = A3liText;
        A3ul.append(A3li);
    }
}

//4.Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius,
// vieną <h5> tagą ir du mygtukus: “+” ir “-”.
// Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija,
// o jos rezultatas būtų atvaizduotas <h5> tage.
// Pasirinkite patys sau patogiausius metodus tai atlikti.

const A4input = document.querySelectorAll('input');
const A4h5 = document.querySelector('h5');
const A4plusButton = document.querySelector('#plusButton');
const A4minusButton = document.querySelector('#minusButton');

A4plusButton.addEventListener('click', () => {
    sumA4 = parseInt(A4input[0].value) + parseInt(A4input[1].value);
    console.log(sumA4);
    A4h5.innerText = sumA4;
});
A4minusButton.addEventListener('click', () => {
    sumA4 = A4input[0].value - A4input[1].value;
    console.log(sumA4);
    A4h5.innerText = sumA4;
});

//5. (BOSO lygis) Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą.
// JS pagalba perskaitykite masyvą australia
// ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių,
// o visus gautus stringus sudėkite į vieną bendrą stringą.
// Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai.

const ulA5 = document.querySelector('.ulA5');
let visiString = '';
for (let i = 0; i < australia.length; i++) {
    if (australia[i] != 'Dingo') {
        australia[i] = '<li>' + australia[i] + '</li>';
    } else {
        australia[i] = '<li style="background-color:lightBlue">' + australia[i] + '</li>';
    }
    visiString = visiString + australia[i];
}
ulA5.innerHTML = visiString;
