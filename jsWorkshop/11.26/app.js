console.log('Hello 11.26 morning');

function suma(a, b) {
    console.log('Skaiciuojam a = b funkcija - koncoleje matosi');
    return a + b;
    console.log('Skaiciuojam a = b funkcija - koncoleje nesimato');
}

console.log(suma(5, 7));

const elektrosSkaitliukas = (sioMen, praeitoMen) => {
    return ((sioMen - praeitoMen) * 0.24).toFixed(2);
};

const elektraSpalis = elektrosSkaitliukas(123456, 123349);
console.log(elektraSpalis);

const elektraLapkritis = elektrosSkaitliukas(123700, 123456);
console.log(elektraLapkritis);

const elektraGruodis = elektrosSkaitliukas(124000, 123700);

console.log(elektraGruodis);

//sukurti funkcija kuri skaiciuoti KMI. Funkcijai paduodam 2 argumentus tai butu ugis svoris  - > KMI

const KMIskaiciuokle = (svoris, ugis) => {
    return (svoris / (ugis / 100) ** 2).toFixed(2);
};

console.log(KMIskaiciuokle(100, 180));

let PetroKMI = KMIskaiciuokle(87, 183);

console.log(PetroKMI);

function KMI(s, u) {
    return (s / Math.pow(u / 100, 2)).toFixed(1);
}

const AldonKMI = KMI(175, 75);
console.log(AldonKMI);

let PetrKMI = KMI(85, 190);
console.log(`Petro KMI ${PetrKMI}`);

//sukurti funkcija, kuri gauna (x,y) ir grazina rezultata x * y

//deklaruoti funkcija (function, arba per kintamaji)
//funkcija tures 2 parametrus

const dauginti2 = (x, y) => {
    return x * y;
};

console.log(dauginti2(3, 5));

function daugyba(x, y) {
    return x * y;
}
console.log(daugyba(3, 5));
