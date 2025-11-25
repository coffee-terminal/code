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
    const C6Element2 = document.createElement('section');
    C6Element2.className = 'sectionStar' + i;
    for (t = 0; t < 44; t++) {
        const C6Element = document.createElement('span');
        C6Element.innerText = '*';
        bodyElement.append(C6Element);
    }
    C6Element2.innerText = '\n';
    bodyElement.append(C6Element2);

    // console.log(i);
}
