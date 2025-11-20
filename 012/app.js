function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('Labas, Džiava scriptai');

let = myVar1 = 54 + 2;

console.log(myVar1);

let myResultDiv = document.querySelector('.my-result');

myResultDiv.innerText = myVar1;
myResultDiv.style.fontSize = '160px';
// myResultDiv.style.backgroundColor = "#015646";

// font-size ====> fontSize nes kintamasis negali tureti minusu
// 160px ===> '160px' be kabiciu butu kintamojo vardas ar skaicius
// let spalvaH2 = "orange";

let myH2 = document.querySelector('h2 + h2');

myH2.style.letterSpacing = '5px';
myH2.style.color = 'orange';

// parasyti Js koda kurs antra h2 nuspalvintu orange spalva

let myFancyRandom = rand(5, 18);

console.log('skacius' + myFancyRandom);

console.clear();

const A = 11;
const B = 5;

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(A / B);
console.log(A % B); // 5 + 5 + 1

console.log(9 % 2); //2 + 2 + 2 + 2 + 1
console.log(7 % 4); //4 + 3
console.log(8 % 4); //4 + 4 + 0

console.log(0.2 + 0.4);
const S = 0.2 + 0.4;
myResultDiv.innerText = S.toFixed(2); // suformatavimas ir vertimas i stringa
console.log(S.toFixed(2));
let L = 1;
const C = 1;

L = 2;
// C = 2;

/* 

1 10 100 1000 
2 4 8 16 32 64 128 256 512 1024

 */

const MyStr = '25';

const myNumB = parseInt(MyStr);

console.log(5 + MyStr, 5 + myNumB);

let funNumber = 2;

funNumber++; //didinamas vienu
funNumber++; // veiksmas tada didinamas

console.log(funNumber++); // kaire
console.log(funNumber); // 5

const what = funNumber++ * ++funNumber; // 5 * 7

console.log(what);

let bananas = 'bananas';

bananas++;

console.log(bananas, typeof bananas);

let daug = 5 / 0;

console.log(daug, typeof daug);

const animal1 = 'Bebras';
const action1 = 'eina namo';

const animal1InAction1 = animal1 + ' ' + action1; // suklijavimas

console.log(animal1InAction1);

myResultDiv.innerText = animal1InAction1;

console.log(animal1[3], animal1[0], animal1[52], typeof animal1[52]);

console.log(animal1.length, animal1InAction1.length);

let kas;

console.log(kas);
// console.log(kurasda);
