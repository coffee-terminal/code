console.log('Hello Thursday!');

// 1. Atspausdinti žinutę
// Sukurti funkciją hello(), kuri atspausdina „Hello!“.

const Pasisveikinti = (_) => {
    console.log('Hello!');
};

Pasisveikinti();

// 2. Atspausdinti bet kokį skaičių
// Sukurti funkciją, kuri atspausdina perduotą (kaip argumentas) skaičių.

const BetkoksSkaicius = (x) => {
    console.log(x);
};
BetkoksSkaicius(4);

// 3. Sudėti du skaičius
// Sukurti funkciją sum(a, b), kuri grąžina a + b rezultatą.

const sudeti = (x, y) => {
    return x + y;
};
console.log(sudeti(2, 9));

// 4. Padidinti skaičių
// Sukurti funkciją padidinti(num), kuri grąžina skaičių, padidintą +10.

const plius10 = (x) => {
    return x + 10;
};
console.log(plius10(2));

// 5. Sujungti du žodžius tarpu
// Sukurti funkciją sujungti(a, b), kuri grąžina tekstą „a - b“.
// (Galima naudoti " " tiesiog kaip tekstą. Jokių metodų.)

const sujungti = (a, b) => {
    return a + ' - ' + b;
};
console.log(sujungti('zodis1', 'zodis2'));

// 6. Grąžinti tą pačią reikšmę
// Sukurti funkciją, kuri atspausdina konsolėje tą patį, kas perduota.

const taspats = (x) => {
    console.log(x);
};

taspats(false);

// 7. Sukurti „prisistatymą“
// Sukurti funkciją prisistatymas(vardas), kuri grąžina:
// „Mano vardas VARDAS“ (vietoj VARDAS įrašyti perduotą argumentą).

const prisistatymas = (vardas) => 'Mano vardas ' + vardas;

console.log(prisistatymas('Stasys'));

const funkcijaSuBacktick = (vardas1) => `Mano vardas yra ${vardas1}`;

console.log(funkcijaSuBacktick('Rolandas'));

// 8. Pakėlimas kvadratu

// Sukurti funkciją square(x), kuri grąžina x * x.

const square = (x) => x ** 2;
console.log(square(7));

// 9. Grąžinti dvigubą tekstą
// Sukurti funkciją dvigubasTekstas(text), kuri grąžina text + text.

const dvigubasTekstas = (text) => text + ' ' + text;

function dvigubasTekstas2(text) {
    return text + ' ' + text;
}

console.log(dvigubasTekstas('sdfghjk'));
console.log(dvigubasTekstas2('bbbbbbbbbbbbbb'));

// 10. Paversti skaičių neigiamu

// Sukurti funkciją makeNegative(num), kuri grąžina skaičių -num.

const makeNegative = (num) => -num;

console.log(makeNegative(7));
