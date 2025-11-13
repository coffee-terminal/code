function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

//1 Naudodami JS į tagus h1 - h4 įrašykite skaičius nuo 1 iki 4 (skaičius atitinka tagą).

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

h1.innerText = 1;
h2.innerText = 2;
h3.innerText = 3;
h4.innerText = 4;

//2 Naudodami JS iš vieno div tago padarykite mėlyną keturkampį, o iš kito raudoną apskritimą.

const myResultDiv = document.querySelector('div');

myResultDiv.style.display = 'inline-block';
myResultDiv.style.width = '100px';
myResultDiv.style.height = '100px';
myResultDiv.style.backgroundColor = 'blue';

const myResultDiv2 = document.querySelector('div + div');

myResultDiv2.style.display = 'inline-block';
myResultDiv2.style.width = '100px';
myResultDiv2.style.height = '100px';
myResultDiv2.style.borderRadius = '50%';
myResultDiv2.style.backgroundColor = 'red';

myResultDiv2.style.marginLeft = '50px';

//3 Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Kintamuosius ir gautą rezultatą įrašykite į atitinkamus span tagus, esančius section tage su id=go3.

let A2 = rand(0, 4);
let B2 = rand(0, 4);

console.log(A2, B2);

let didesnisSkaicius = Math.max(A2, B2);
let mazesnisSkaicius = Math.min(A2, B2);

console.log('Didesnis' + ' ' + didesnisSkaicius);
console.log('Mazesnis' + ' ' + mazesnisSkaicius);

const result2 = didesnisSkaicius / mazesnisSkaicius;

console.log('resultatas' + ' ' + result2.toFixed(2));

let span1 = (document.querySelector('#go3>span').innerText = didesnisSkaicius);
let span2 = (document.querySelector('#go3>span+span').innerText =
    mazesnisSkaicius);
let span3 = (document.querySelector('#go3>span + span + span').innerText =
    result2.toFixed(2));

//4 Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 50 iki 200.
// Iš section tage su id=go4 esančių div tagų padarykite atitinkamo dydžio (px) apskritimus.
// Apskritimai turi būti išdėlioti eilute nuo mažiausio iki didžiausio.

let A4 = rand(50, 200);
let B4 = rand(50, 200);
let C4 = rand(50, 200);

console.log(A4 + ' plotis', B4 + ' plotis', C4 + ' plotis');

let didesnisSkaicius4 = Math.max(A4, B4, C4);
let mazesnisSkaicius4 = Math.min(A4, B4, C4);
let vidutinisSkaicius4 = 0;

if (A4 > B4 || A4 > C4) {
    if (A4 > B4 && A4 > C4) {
        if (B4 > C4) {
            vidutinisSkaicius4 = B4;
        } else {
            vidutinisSkaicius4 = C4;
        }
    } else {
        vidutinisSkaicius4 = A4;
    }
} else if (B4 > C4) {
    vidutinisSkaicius4 = C4;
} else {
    vidutinisSkaicius4 = B4;
}
console.log(vidutinisSkaicius4);

let go4div1 = document.querySelector('#go4>div');

go4div1.style.display = 'inline-block';
go4div1.style.width = mazesnisSkaicius4 + 'px';
go4div1.style.height = mazesnisSkaicius4 + 'px';
go4div1.style.backgroundColor = 'orange';
go4div1.style.borderRadius = '50%';

let go4div2 = document.querySelector('#go4>div + div');

go4div2.style.display = 'inline-block';
go4div2.style.width = vidutinisSkaicius4 + 'px';
go4div2.style.height = vidutinisSkaicius4 + 'px';
go4div2.style.backgroundColor = 'lightGreen';
go4div2.style.borderRadius = '50%';

let go4div3 = document.querySelector('#go4>div + div + div');

go4div3.style.display = 'inline-block';
go4div3.style.width = didesnisSkaicius4 + 'px';
go4div3.style.height = didesnisSkaicius4 + 'px';
go4div3.style.backgroundColor = 'pink';
go4div3.style.borderRadius = '50%';

//5 Naudokite funkcija rand(). Į section tage su id=go5 esančius span įrašykite 3 skaičius nuo -10 iki 10. Skaičius mažesnių už 0 spausdinkite raudonai,  didesnius už 0 mėlynai, o 0 žaliai.

let A5 = rand(-10, 10);
let B5 = rand(-10, 10);
let C5 = rand(-10, 10);

console.log(A5, B5, C5);

let go5span1 = document.querySelector('#go5 span');
let go5span2 = document.querySelector('#go5 span + span');
let go5span3 = document.querySelector('#go5 span + span + span');

go5span1.innerText = A5;
if (A5 == 0) {
    color5 = 'green';
} else if (A5 > 0) {
    color5 = 'blue';
} else {
    color5 = 'red';
}
go5span1.style.color = color5;
console.log(go5span1);

go5span2.innerText = B5;
if (B5 == 0) {
    color5 = 'green';
} else if (B5 > 0) {
    color5 = 'blue';
} else {
    color5 = 'red';
}
go5span2.style.color = color5;
console.log(go5span2);

go5span3.innerText = B5;
if (B5 == 0) {
    color5 = 'green';
} else if (B5 > 0) {
    color5 = 'blue';
} else {
    color5 = 'red';
}
go5span3.style.color = color5;
console.log(go5span3);

//6 Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuris skaičiuos žvakių kainą ir užpildykite formą easnčią section tage su id=go6. Žvakių kiekį generuokite ​rand() funkcija nuo 5 iki 3000.

let zvakiuKiekis = rand(5, 3000);
console.log('Zvakiu skaicius ' + zvakiuKiekis);
let zvakesKaina = 1;
let nuolaida3 = 0.97;
let nuolaida4 = 0.96;
const daugiauKaip1000 = 1000;
const daugiauKaip2000 = 2000;

let beNuolaidos = zvakesKaina * zvakiuKiekis;

let pirkimas = zvakiuKiekis * zvakesKaina;
let zvakiuKaina = pirkimas;

let priskirtaNuolaida;

if (pirkimas > daugiauKaip2000) {
    zvakiuKaina = pirkimas * nuolaida4;
    priskirtaNuolaida = '4';
    console.log('4%');
} else if (pirkimas > daugiauKaip1000) {
    zvakiuKaina = pirkimas * nuolaida3;
    priskirtaNuolaida = '3';
    console.log('3%');
} else {
    priskirtaNuolaida = '0';
    console.log('Nuolaida netaikoma');
}
console.log(zvakiuKaina.toFixed(2));

let go6span1 = document.querySelector('#go6 p:nth-child(2) span');
let go6span2 = document.querySelector('#go6 p:nth-child(3) span');
let go6span3 = document.querySelector('#go6 p:nth-child(4) span');
let go6span4 = document.querySelector('#go6 p:nth-child(5) span');

go6span1.innerText = zvakiuKiekis;
go6span2.innerText = beNuolaidos;
go6span3.innerText = priskirtaNuolaida;
go6span4.innerText = zvakiuKaina.toFixed(2);
console.log(go6span4);

//7 Naudokite funkciją rand(). Parašykite skriptą, kuris atsitiktine tvarka generuotų ir iš section su  id=go7 esančio div tago padarytų apskritimą, arba keturkampį arba trikampį.

let A7 = rand(1, 3);
console.log(A7);
const figura7 = document.querySelector('#go7 > div');

if (A7 == 1) {
    //apskritimas
    figura7.style.width = '100px';
    figura7.style.height = '100px';
    figura7.style.borderRadius = '50%';
    figura7.style.backgroundColor = 'orange';
} else if (A7 == 2) {
    //keturkampis
    figura7.style.width = '100px';
    figura7.style.height = '100px';
    figura7.style.backgroundColor = 'red';
} else {
    //trikampis
    figura7.style.width = '0px';
    figura7.style.height = '0px';
    figura7.style.borderLeft = '50px solid transparent';
    figura7.style.borderRight = '50px solid transparent';
    figura7.style.borderBottom = '100px solid green';
}

//8 Suskaičiuoti kiek kiekvienos spalvos apskritimų yra section su id=go8. Rezultatus įrašyti į šalia tam skirtas vietas.

const green8 = 'green';
const blue8 = 'blue';
const red8 = 'red';

let greenCount = 0;
let blueCount = 0;
let redCount = 0;

const circle8_1 = document.querySelectorAll('#go8 div');

for (i = 0; i < 6; ++i) {
    if (circle8_1[i].style.backgroundColor == green8) {
        ++greenCount;
    } else if (circle8_1[i].style.backgroundColor == blue8) {
        ++blueCount;
    } else {
        ++redCount;
    }
}

console.log('green ' + greenCount);
console.log('blue ' + blueCount);
console.log('red ' + redCount);

const circle8_2 = document.querySelector(
    '#go8 div:nth-child(7) p:nth-child(2) span'
);
const circle8_3 = document.querySelector(
    '#go8 div:nth-child(7) p:nth-child(3) span'
);
const circle8_4 = document.querySelector(
    '#go8 div:nth-child(7) p:nth-child(4) span'
);

circle8_2.innerText = greenCount;
circle8_3.innerText = blueCount;
circle8_4.innerText = redCount;

//9 Užpildyti daugybos lentelę, esančią tage section su id=go9.

const table9_1 = document.querySelectorAll('#go9 div span:nth-child(1)');
const table9_2 = document.querySelectorAll('#go9 div span:nth-child(2)');
const table9_3 = document.querySelectorAll('#go9 div span:nth-child(3)');

let lygu9;

for (i = 0; i < 5; ++i) {
    console.log(table9_1[i].innerHTML);
    console.log(table9_2[i].innerHTML);
    lygu9 = table9_1[i].innerHTML * table9_2[i].innerHTML;
    console.log(' = ' + lygu9);
    table9_3[i].innerHTML = lygu9;
}

// Keturkapius, esančius tage section su id=go10, kurių plotas didesnis nei 10000 (px) nuspalvinkite raudonai.

const square10 = document.querySelectorAll('#go10 div');

let widthAndHeight;

for (i = 0; i < 5; ++i) {
    console.log(parseInt(square10[i].style.width));
    console.log(parseInt(square10[i].style.height));
    widthAndHeight =
        parseInt(square10[i].style.width) * parseInt(square10[i].style.height);
    console.log(' = ' + widthAndHeight);
    if (widthAndHeight > 10000) {
        square10[i].style.backgroundColor = 'red';
    }
}
