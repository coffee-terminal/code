// 1. Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.

const bodyElement = document.querySelector('body');
const C1Element = document.createElement('span');

C1Element.innerText = '\n';

for (i = 0; i < 14; i++) {
    const h1Element = document.createElement('h1');
    const h4Element = document.createElement('h4');
    h4Element.innerText = 1;
    h1Element.innerText = 4;
    h1Element.style.display = 'inline-block';
    bodyElement.append(h1Element);
}

for (i = 0; i < 14; i++) {
    const h4Element = document.createElement('h4');
    h4Element.innerText = 1;

    h4Element.style.display = 'inline-block';
    bodyElement.append(h4Element);
}
bodyElement.append(C1Element);

// 2. Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const C2Element = document.createElement('span');

C2Element.innerText = '\n';

const A2 = [];
let B2;
for (i = 0; i < 44; i++) {
    A2[i] = rand(14, 44);
    const C2Element = document.createElement('span');
    C2Element.style.color = 'blue';
    C2Element.innerText = ' ' + A2[i];
    if (A2[i] % 4 == 0) {
        C2Element.style.color = 'red';
        bodyElement.append(C2Element);
    } else {
        bodyElement.append(C2Element);
    }
}

//3. Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.
bodyElement.append(C2Element);

for (i = 0; i < 14; i++) {
    const A3 = document.createElement('div');
    A3.style.width = '20px';
    A3.style.height = '20px';
    A3.style.backgroundColor = 'blue';

    A3.style.borderRadius = '50%';
    A3.style.display = 'inline-block';
    A3.style.marginRight = '10px';
    bodyElement.append(A3);
}

// 4. Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus, išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).
const C4Element = document.createElement('span');
C4Element.innerText = '\n';
bodyElement.append(C4Element);

for (i = 0; i < 4; i++) {
    const B4 = document.createElement('div');

    B4.style.width = '20px';
    B4.style.height = '20px';
    B4.style.backgroundColor = 'red';
    B4.style.borderRadius = '50%';
    B4.style.display = 'inline-block';
    B4.style.marginRight = '10px';

    bodyElement.append(B4);

    const A4 = document.createElement('div');

    A4.style.width = '20px';
    A4.style.height = '20px';
    A4.style.backgroundColor = 'blue';
    A4.style.borderRadius = '50%';
    A4.style.display = 'inline-block';
    A4.style.marginRight = '10px';

    bodyElement.append(A4);
}

//5.Naršyklėje nupieškite daugybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.

const C5Element = document.createElement('span');
C5Element.innerText = '\n';
bodyElement.append(C5Element);

const A5Element = document.createElement('div');
A5Element.className = 'Keturi';
A5Element.innerText = 4 + '*';
A5Element.style.display = 'inline-block';
bodyElement.append(A5Element);

const B5Element = document.createElement('input');
B5Element.type = 'number';
B5Element.placeholder = 'Įvesti nuo 4 iki 14';
B5Element.style.display = 'inline-block';
// B5Element.style.width = ``;
bodyElement.append(B5Element);

const CountElement5 = document.createElement('div');
CountElement5.className = 'Skaiciuoti';
CountElement5.style.display = 'inline-block';
bodyElement.append(CountElement5);

B5Element.addEventListener('input', () => {
    if (B5Element.value >= 4 && B5Element.value <= 14) {
        CountElement5.innerText = 4 * B5Element.value;
        // console.log('kart keturi ', B5Element.value * 4);
    } else {
        return (CountElement5.innerText = 'Įveskite skačių tarp 4 ir 14');
    }
});

const C5Element2 = document.createElement('span');
C5Element2.innerText = '\n';
bodyElement.append(C5Element2);

for (i = 4; i <= 14; i++) {
    const x4 = document.createElement('div');
    x4.style.display = 'inline-block';
    x4.innerText = 4 + ' * ' + i + ' = ' + 4 * i;
    bodyElement.append(x4);

    // const x4to14 = document.createElement('div');
    // x4to14.style.display = 'inline-block';
    // x4to14.innerText = i + '= ' + 4 * i;
    // bodyElement.append(x4to14);

    // const A5equal = document.createElement('div');
    // A5equal.style.display = 'inline-block';
    // A5equal.innerText = '= ' + 4 * i;
    // bodyElement.append(A5equal);

    const C5Element2 = document.createElement('span');
    C5Element2.innerText = '\n';
    bodyElement.append(C5Element2);
}

//6.Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm) žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.

for (i = 44; i < 444; i += 44) {
    const C6Element2 = document.createElement('span');
    C6Element2.className = 'span' + i;
    C6Element2.style.display = 'block';
    for (t = 0; t < 44; t++) {
        C6Element2.innerText += '*';
    }
    // C6Element2.innerText += '\n';
    bodyElement.append(C6Element2);
}

//7.Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).#pamastykKaip
function randomColor() {
    return (
        '#' +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padEnd(6, '0')
    );
}
function rand2(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const bodyElement2 = document.querySelector('body');
const A7Element = document.createElement('div');
A7Element.className = 'kvadratas';
bodyElement2.append(A7Element);

A7Element.style.display = 'flex';
A7Element.style.justifyContent = 'center';

const divKlaseA7 = document.querySelector('.kvadratas');

A7Element.style.width = '500px';
A7Element.style.height = '500px';
A7Element.style.alignItems = 'center';

for (let i = 0; i < 14; i++) {
    const A7Element = document.createElement('div');
    A7Element.className = 'kvadratas' + i;
    A7Element.style.position = 'absolute';

    A7Element.style.backgroundColor = randomColor();

    let randKvadratas = rand2(50, 450) + 'px';
    A7Element.style.width = randKvadratas;
    A7Element.style.height = randKvadratas;

    A7Element.style.display = 'flex';
    divKlaseA7.append(A7Element);
}

// 8.Iš simbolio &#9632; (kopijuoti visą žalią tekstą su kabliataškiu) sudėliokite žalią kvadratą turintį 41x41 šių simbolių. Kad kvadratas atrodytų “kvadratiškai” panaudokite css stilių ir papildomus tagus.

const A8 = '&#9632;';

const A8symbolDiv = document.createElement('div');
A8symbolDiv.className = 'x41';
A8symbolDiv.style.width = '41px';
A8symbolDiv.style.height = '41px';
A8symbolDiv.style.display = 'flex';

A8symbolDiv.style.flexDirection = 'column';
// A8symbolDiv.style.justifyContent = 'center';
// A8symbolDiv.style.alignContent = 'center';

A8symbolDiv.style.backgroundColor = 'lightgray';

bodyElement2.append(A8symbolDiv);

const A8symbolDivselect = document.querySelector('.x41');

for (let i = 0; i < 6; i++) {
    const A8symbolSpan = document.createElement('p');
    A8symbolSpan.className = 'SymbolClass';
    A8symbolSpan.style.display = 'block';
    A8symbolSpan.style.margin = 0;
    A8symbolSpan.style.color = 'green';
    A8symbolSpan.style.letterSpacing = '-3px';
    A8symbolSpan.style.lineHeight = '6.5px';
    for (let t = 0; t < 6; t++) {
        A8symbolSpan.innerHTML += A8;
    }
    A8symbolDivselect.append(A8symbolSpan);
}

//9.Uždavinyje prieš tai nupieštam kvadratui nupieškite geltonas istrižaides (geltonai nudažykite atitinkamus simbolius). #ciklasCikle
// const color = 'red';
// const elts = document.querySelector('.SymbolClass');
// const symboliai = elts.innerHTML[3];

// elts.style.color = 'black';
// console.log(symboliai);
// elts[2].style.color = color;
