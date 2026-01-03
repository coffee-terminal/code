console.log('MapSet');

const arr = []; // sutrumpintas
const arr1 = new Array(); //pilnas

arr.push('red');
arr.push('blue');
arr.push('raccon');

console.log(arr, arr.length);
console.log(arr[2]);

const map = new Map(); // pilnas, sutrumpinto nera, nes pasibaige skliausteliai

map.set('spalva1', 'red');
map.set('spalva2', 'blue');
map.set('zveris', 'raccon');
map.set('spalva2', 'black');
map.set(87, 'skaicius');
map.set({ bla: 123 }, 'objektas'); // yra objektas su nuoroda i niekur
map.set({ bla: 123 }, 'objektas2');

const fun1 = (_) => _;
map.set(fun1, 'fun1text');

const o123 = { bla: 123 };

map.set(o123, 'objektas3');

console.log(map, map.size);
console.log(map.get('zveris')); //gauti meskena, naudojam rakta ne indeksa
console.log(map.get({ bla: 123 })); // raktas yra naujas objektas
console.log({ bla: 123 } === { bla: 123 }); // objektai lybinami pagal nuoroda ne reiksme
console.log(map.get(o123)); // raktas yra objektas
console.log(map.get(fun1));

//map turi forEach cikla (kitko ka turi masyvas neturi)

map.forEach((verte, raktas) => console.log(raktas, '===>', verte));

// console.clear();
//mandrai

const fancyMap = new Map();

fancyMap.set((a) => a * 3, 5);
fancyMap.set((a) => a * 3, 8);
fancyMap.set((a) => a * 10, 5);
fancyMap.set((a) => a * 10, 15);
fancyMap.set((a) => a / 3, 2);

console.log(fancyMap);

fancyMap.forEach((v, f) => console.log(f(v)));

console.log(map.has(87)); // ar yra elementas su tokiu raktu
map.delete(87);
console.log(map.has(87));
console.log(map.has('labas'));

// bandom pasorirtint

const arrFromMap = [...map];

console.log(arrFromMap);

arrFromMap.sort((a, b) => a[1].localeCompare(b[1]));

console.log(arrFromMap);

const sortedMap = new Map(arrFromMap); // ne tuscia, o pagal duomenis is masyvo
console.log(sortedMap);

// console.clear();

const set = new Set();

set.add('red');
set.add('blue');
set.add('raccon');
set.add('red'); // set yra unikaliu reiksmiu rinkinys

console.log(set, set.size);
console.log(set.has('red'), set.delete('red'), set.has('red'));
// console.clear();

// for in (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
// for of (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
console.log(arr, arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(i, '===>', arr[i]);
}
//for of

for (const element of arr) {
    console.log(element);
}

//for in

for (const index in arr) {
    console.log(index);
}
// neiteruojamas objektas, tai yra objektas neturinris indekso
const obj = {
    kas: 'Malkos',
    kam: 'Krosniai',
    kodel: 'Nes salta',
    prop: 'Bla bla bla',
};

// for in skirtas pagrinde, neiteruojamu objektu iteracijai

for (const prop in obj) {
    console.log(prop, ':', obj[prop]); // savybes vardas irasytas i kintamaji "prop" todel [prop]
}
