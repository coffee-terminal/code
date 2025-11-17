console.log('Are you having fun learning functions?');

console.log('Top?');

if (true) {
    console.log('if');
}

// funkcijos deklaracija
function fun1() {
    console.log('Block');
}
console.log('Bottom');

fun1();
console.log('Bottom1');
fun1();
console.log('Bottom2');
fun1();

function fun2() {
    console.log('%cFancy', 'color:skyblue;letter-spacing:15px');
}

fun2();
fun2();

//Anonimine funkcija
const fun3 = function () {
    console.log('%cFancy', 'color:crimson;letter-spacing:15px');
};

fun3();
fun3();

const fun4 = function () {
    console.log('Button Clicked');
    const h2 = document.querySelector('h2');
    h2.innerText = 'Fun Fun Fun!';
};

const button1 = document.querySelector('#nr1');

//Kai click ant Button1  paleidziam fun4-
button1.addEventListener('click', fun4);

const fun5 = function () {
    console.log('%cTrue', 'color:darkgreen;font-size:25px');
};
const fun6 = function () {
    console.log('%cFalse', 'color:crimson;font-size:25px');
};

if (5 > 6) {
    fun5();
} else {
    fun6();
}

const fun7 = function () {
    console.log(pirmas * Antras);
};

let pirmas = 2;
let Antras = 5;

fun7();

pirmas = 4;
Antras = 7;

fun7();

const fun8 = function (pirmasParametras, antrasParametras) {
    console.log(pirmasParametras * antrasParametras);
};

let pirmasArgumentas = 2;
let AntrasArgumentas = 5;

fun8(pirmasArgumentas, AntrasArgumentas);
fun8(8, 10);

const nr2 = document.querySelector('#nr2');
const nr3 = document.querySelector('#nr3');

const fun9 = function (sk1, sk2) {
    const rez = sk1 * sk2;
    return rez;
};

nr2.innerText = fun9(8, 4);

const rez1 = fun9(7, 2);
nr3.innerText = rez1;

//Parasyti funkcija du skaicius ir grazina didesni. Grazinta skaiciu atspausdiname konsoleje.

let fun10 = function (sk1, sk2) {
    if (sk1 > sk2) {
        return sk1; //nutraukiame funkcijos veikima
    } else {
        return sk2;
    }
};

const fancyFun = (sk1, sk2) => (sk1 > sk2 ? sk1 : sk2); //arrow funkcija + ternary

let kintamasis1 = 2;
let kintamasis2 = 5;

const skaciusDidesnis = console.log(fun10(kintamasis1, kintamasis2));
console.log(fun10(2, 9));
nr3.innerText = fun10(11, 2);

//parasyti funkcija, kuri gauna du stringu ir grazina ilgesni. Grazinta stringa atspausdiname Konsoleje.

let fun11 = function (st1, st2) {
    if (st1.length > st2.length) {
        return st1;
    } else {
        return st2;
    }
};

console.log(fun11('Bebras', 'Barsukas'));
