// 1. Parašykite funkciją, kuri atsitiktine tvarka grąžintų stringus: “Bebras”, “Barsukas” arba “Briedis”. Funkcijos grąžinamą rezultatą priskirkite kintamajam ir jį atspausdinkite konsolėje.

const sarasas = ['Bebras', 'Barsukas', 'Briedis'];

const AtsitiktineTvarkaFun = () => {
    const A1kintamasis = sarasas[Math.floor(Math.random() * sarasas.length)];
    return A1kintamasis;
};

console.log('1. ' + AtsitiktineTvarkaFun());

//2. Html faile sukurkite button elementą ir tuščią H2 elementą. Padarykite taip, kad paspaudus mygtuką pasileistų pirmame uždavinyje sukurta funkcija, o funkcijos grąžinamas stringas su gyvunu atsirastų H2 elemente.

const A2h2string = document.querySelector('h2');
const A2button = document.querySelector('#nr1');

A2button.addEventListener('click', () => {
    AtsitiktineTvarkaFun;
    A2h2string.innerText = '2. ' + AtsitiktineTvarkaFun();
});

//3. Parašykite funkciją, kuri priima vieną argumentą- stringą ir grąžina tris pirmas to stringo raides. Jeigu stringas yra trumpesnis nei trys raidės- grąžina visas raides. Funkcijos grąžinamą rezultatą priskirkite kintamajam ir jį atspausdinkite konsolėje.

const A3trysPirmosFun = (A3argumentas) => {
    if (A3argumentas.length > 3) {
        return A3argumentas.slice(0, 3);
    }
    {
        return A3argumentas;
    }
};
const A3zodis = 'DogHouses';
TrysPirmos = A3trysPirmosFun(A3zodis);

console.log('3. ' + A3zodis + ' pirmos trys raides: ' + TrysPirmos);

//4. Parašykite funkciją, kuri priima vieną argumentą- stringą ir grąžiną vidurinę raidę. Jeigu stringe yra porinis simbolių skaičius vietoj vidurinės raidės grąžina pranešimą: “Simbolių skaičius lyginis”. Konsoleje pademostruokite funkcijos veikimą su lyginius ir nelyginius simbolių kiekius turinčiais stringais.

const A4VidReiskme = (A4argumentas) => {
    if (A4argumentas.length % 2 == 0) {
        return 'Simbolių skaičius lyginis';
    }
    {
        return A4argumentas[Math.floor(A4argumentas.length / 2)];
    }
};
const A4zodis = 'DogHouses';
VidReiksme = A4VidReiskme(A4zodis);

console.log('4. ' + A4zodis + ' vidurine raide:  ' + VidReiksme);

//5. Parašykite funkciją, kuri priimtų tris argumentus. Du pirmieji argumentai skaičiai, o trečias matematinio veiksmo ženklas (“+”, “-”, “*”, “/”) kaip stringas. Funkcija turi atlikti atitinkamą veiksmą su duotais skaičiais ir grąžinti rezultatą. Pademonstruokite funkcijos veikimą, rezultatus spausdindami konsolėje.

const A5trysArgumentai = (a, b, c) => {
    if (c == '+') {
        return a + b;
    } else if (c == '-') {
        return a - b;
    } else if (c == '*') {
        return a * b;
    } else if (c == '/') {
        return a / b;
    } else {
        return 'argumentas c nenurodytas';
    }
};

const A5argumentas1 = 3;
const A5argumentas2 = 6;
console.log(
    '5. Argumentai: ' +
        A5argumentas1 +
        ' ' +
        A5argumentas2 +
        ' ' +
        'string:* = ' +
        A5trysArgumentai(A5argumentas1, A5argumentas2, '*')
);

//6. Parašykite funkciją,kuri priimtų du argumentus.
// Abu argumentai skaičiai. Funkcija su skaičiais turi atlikti sumos ir sandaugos matematines operacijas
//  ir argumentus bei abiejų operacijų rezultatus grąžintų objekto tipo kitamajame,
//  turinčiame atitinkamas savybes: “pirmas”, “antras”, “suma”, “sandauga”.
// Funkcijos grąžinamą rezultatą priskirkite kintamajam ir jį atspausdinkite konsolėje.#object

const A6duArgumentai = (a, b) => {
    A6objektas.pirmas = a;
    A6objektas.antras = b;
    A6objektas.suma = a + b;
    A6objektas.sandauga = a * b;
    return A6objektas;
};
const A6objektas = {};
const A6kintamieji = A6duArgumentai(3, 6);

console.log('6. ');
console.log(A6kintamieji);

//7. Naudodami Html ir CSS nupaišykite mėlyną kvadratą.
// Kvadratui uždėkite “click” įvykį, kuris paleistų funkciją,
// kuri kvadratą nudažytų raudonai. Paspaudus mygtuką antrą kartą, turi pasileisti ta pati funkcija, bet kvadratą vėl nudažytų mėlynai. Spaudinėjant ant kvadrato, kvadrato spalva turėtų pastoviai keistis iš mėlynos į raudoną ir iš raudonos vėl atgal į mėlyną.

const A7kvadratas = document.querySelector('.kvadratas');
A7kvadratas.style.backgroundColor = 'blue';

A7kvadratas.addEventListener('click', () => {
    // console.log('clicked');
    if (A7kvadratas.style.backgroundColor === 'blue') {
        A7kvadratas.style.backgroundColor = 'red';
    } else {
        A7kvadratas.style.backgroundColor = 'blue';
    }
});

//8. Html faile sukurkite button elementą su skaičiumi “0” elemento viduje.
// Parašykite funkciją, kuri pasileidinėtų spaudinėjant mygtuką ir kiekvienu paspaudimu didintų mygtuke esantį skaičių vienetu. Spaudinėjant mygtuką, jo viduje esantis skaičius turi pastoviai didėti: 0, 1, 2, 3…

const A8button2 = document.querySelector('#nr2');
let A8 = 0;
A8button2.innerText = A8;

A8button2.addEventListener('click', () => {
    A8++;
    A8button2.innerText = A8;
});

//9. Html faile sukurkite button elementą ir tuščią H2 elementą.
//  H2 elemente pradžioje įrašytas “1” nuspalvintas juodai.
//  Paspaudus mygtuką, paleidžiama funkcija, kuri atsitiktiniu būdu į H2 elementą įrašo skaičius nuo 1 iki 6.
// Jeigu atsitiktinis skaičius tampa 6, jis nuspalvinamas raudonai
// ir toliau spaudinėjant mygtuką skaičius nebesikeičia.#elektroninisKauliukas

const A9h2 = document.querySelector('h2 ~ h2');
const A9button9 = document.querySelector('#nr3');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const A9h2SkaiciusFun = () => {
    const A9 = rand(1, 6);
    // console.log(A9);
    if (A9 < 6) {
        A9h2.innerText = A9;
        A9h2.style.color = 'black';
    } else {
        A9h2.innerText = A9;
        A9h2.style.color = 'red';
        A9button9.removeEventListener('click', A9h2SkaiciusFun);
    }
};

A9button9.addEventListener('click', A9h2SkaiciusFun);

//10. Penkto uždavinio funkciją modifikuokite ir pritaikykite jos veikimą kalkuliatoriuje veikiančiame naršyklėje.
//  Kalkuliatorius turi turėti du input elementus skaičiams įvesti
// ir select tipo elementą aritmetiniams veiksmams
//  bei mygtuką “skaičiuoti” ir elementą rezultato atvaizdavimui.#fun

const A10button10 = document.querySelector('#nr4');
let A10h3 = document.querySelector('h3');

let A10calc1 = document.querySelector('#calc1');
let A10calc2 = document.querySelector('#calc2');
let A10calc3 = document.getElementById('calc3');

// console.log(A10calc3);

const A10apskaiciuoti = () => {
    let A10calc3 =
        document.getElementById('calc3').options[
            document.getElementById('calc3').selectedIndex
        ].text;
    console.log(A10calc3);

    if (A10calc3 == '+') {
        return (A10h3.innerHTML =
            parseInt(A10calc1.value) + parseInt(A10calc2.value));
    } else if (A10calc3 == '-') {
        return (A10h3.innerHTML =
            parseInt(A10calc1.value) - parseInt(A10calc2.value));
    } else if (A10calc3 == '*') {
        return (A10h3.innerHTML =
            parseInt(A10calc1.value) * parseInt(A10calc2.value));
    } else if (A10calc3 == '/') {
        return (A10h3.innerHTML =
            parseInt(A10calc1.value) / parseInt(A10calc2.value));
    } else {
        return (A10h3.innerHTML = 'try again');
    }
};

A10button10.addEventListener('click', A10apskaiciuoti);
