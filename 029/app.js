console.log('Vietinis Podelis, app.js is loaded');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const manoSkaicius = rand(1, 10);
console.log(`Sugeneruotas skaicius: ${manoSkaicius}`);

// localStorage.setItem('skaicius', manoSkaicius); //padedu skaciu i storage

const gautasSkaicius = localStorage.getItem('skaicius');
console.log(`Sugeneruotas skaicius: ${gautasSkaicius}`, typeof gautasSkaicius);

const bebras = {
    name: 'bebras',
    age: 11,
};

localStorage.setItem('animal', bebras); // ===> [object Object] 'suplotas objektas' kai objektas paverciamas i string

const bebrasStringas = JSON.stringify(bebras); // pries irasant verciame i JSON

localStorage.setItem('animal2', bebrasStringas); // uzsaugojam

const gautasBebras = localStorage.getItem('animal2'); // gauname atgal uzsaugota json

const bebroObjektas = JSON.parse(gautasBebras); // is json vel gauname objekta

console.log(bebroObjektas.name); // naudojam

const nr1 = document.querySelector('#nr1');

nr1.addEventListener('click', (_) => {
    localStorage.setItem('skaicius', manoSkaicius); //padedu skaciu i storage
});

// "mano_skaiciai" dedam

//informacijos vizualus atvaizdavimas vadinamas renderinumu

const renderList = (_) => {
    const ol = document.querySelector('ol');
    ol.innerHTML = ''; // isvalau ol elementa
    daugSkaiciu.forEach((sk) => {
        const li = document.createElement('li');
        li.innerText = sk;
        ol.append(li);
    });
};

let daugSkaiciu;

daugSkaiciu = localStorage.getItem('mano_skaiciai');

if (null === daugSkaiciu) {
    // jei gu local storage neturi tokio iraso (pradzia)
    daugSkaiciu = [];
} else {
    daugSkaiciu = JSON.parse(daugSkaiciu); // tai ka radau, paverciu i objekta
    console.log(daugSkaiciu); // naudojam
}

const nr2 = document.querySelector('#nr2');

nr2.addEventListener('click', (_) => {
    daugSkaiciu.push(manoSkaicius); // pridedu i sarasa
    const daugSkaiciuStringas = JSON.stringify(daugSkaiciu); // paverciu stringu

    localStorage.setItem('mano_skaiciai', daugSkaiciuStringas);
    renderList();
});

// console.log(daugSkaiciu); // naudojam
renderList();
console.log('--------------------------------------------------------------------------');
/*
   
    Yra trys mygtukai: Žalias, mėlynas ir raudonas. 
    Paspaudus vieną iš mygtukų jo spalva įsirašo į localStorage. 
    Kiekvienas mygtuko paspaudimas prideda savo spalvą prie sąrašo.
    Sąrašo spalvos atvaizduojamos html spalvotų (atitinkamai išsaugotai spalvai) kvadratukų pavidale.
    Sąrašas atsinaujina dinamiškai
 
*/

const renderColorList = (_) => {
    const ol = document.querySelector('#ol2');
    ol.innerHTML = ''; // isvalau ol elementa
    spalvuSarasas.forEach((color) => {
        const li = document.createElement('li');

        li.style.width = '50px';
        li.style.height = '50px';
        li.style.backgroundColor = color;
        li.style.color = 'white';
        li.innerHTML = color;
        li.style.textAlign = 'center';
        li.style.lineHeight = '40px';
        li.style.borderTop = '1px solid white';
        ol.append(li);
    });
};

const nr3 = document.querySelector('#nr3');
nr3.style.backgroundColor = 'green';
nr3.style.color = 'white';
const nr4 = document.querySelector('#nr4');
nr4.style.backgroundColor = 'blue';
nr4.style.color = 'white';
const nr5 = document.querySelector('#nr5');
nr5.style.backgroundColor = 'red';
nr5.style.color = 'white';

let spalvuSarasas;
spalvuSarasas = localStorage.getItem('spalvos');

if (null === spalvuSarasas) {
    // jei gu local storage neturi tokio iraso (pradzia)
    spalvuSarasas = [];
} else {
    spalvuSarasas = JSON.parse(spalvuSarasas); // tai ka radau, paverciu i objekta
    console.log(spalvuSarasas); // naudojam
}

nr3.addEventListener('click', (_) => {
    spalvuSarasas.push(nr3.innerHTML); // pridedu i sarasa
    const spalvuSarasasStringas = JSON.stringify(spalvuSarasas); // paverciu stringu

    localStorage.setItem('spalvos', spalvuSarasasStringas);
    renderColorList();
});
nr4.addEventListener('click', (_) => {
    spalvuSarasas.push(nr4.innerHTML); // pridedu i sarasa
    const spalvuSarasasStringas = JSON.stringify(spalvuSarasas); // paverciu stringu

    localStorage.setItem('spalvos', spalvuSarasasStringas);
    renderColorList();
});
nr5.addEventListener('click', (_) => {
    spalvuSarasas.push(nr5.innerHTML); // pridedu i sarasa
    const spalvuSarasasStringas = JSON.stringify(spalvuSarasas); // paverciu stringu

    localStorage.setItem('spalvos', spalvuSarasasStringas);
    renderColorList();
});

renderColorList();

//CRUD create read update delete
