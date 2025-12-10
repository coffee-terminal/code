console.log('Dar biski kartojimo');

// ciklas cikle. 'Kotleto valgymas'

const kasniu = 7;
const kramtymo = 4;

for (i = 1; i <= kasniu; i++) {
    // i skaiciuoja kasnius
    for (j = 1; j <= kramtymo; j++) {
        console.log('kasnis nr', i, ' kramtom', j, 'karta');
    }
}
console.clear();

const masyvas = [
    [5, 8, 9],
    [8, 0, 9],
    [1, 6, 3],
];

console.log(masyvas);

for (let i = 0; i < masyvas.length; i++) {
    for (let j = 0; j < masyvas[i].length; j++) {
        console.log(masyvas[i][j]);
    }
}

const masyvasB = [
    [5, 9],
    ['C', 'B', 3],
    [8, 0, 9, 7],
    [1, '', 3],
];
let suma = 0;
for (let i = 0; i < masyvasB.length; i++) {
    for (let j = 0; j < masyvasB[i].length; j++) {
        if (typeof masyvasB[i][j] == 'number') {
            suma += masyvasB[i][j];
        }
    }
}
console.log(suma);

let suma2 = 0;

masyvasB.forEach((eil) => {
    eil.forEach((num) => {
        if (typeof num == 'number') {
            suma2 += num;
        }
    });
});
console.log(suma2);

const sq1 = document.querySelector('.sq1');
const sq2 = document.querySelector('.sq2');

sq1.addEventListener('click', (e) => {
    setTimeout((_) => {
        e.target.style.backgroundColor = 'orange';
    }, 1000);
});

sq2.addEventListener('click', (e) => {
    // e.stopPropagation(); // stabdo evento plitima i tevinius elementus
    e.target.style.backgroundColor = 'crimson';
});

const aTag = document.querySelector('a');
aTag.addEventListener('click', (e) => {
    e.preventDefault(); // stabdo defoltinį tago evento veikimą
    e.target.innerText = 'Gal neik';
    setTimeout(() => {
        window.location.href = e.target.href;
    }, 2000);
});

const fun = (_) => {
    document.querySelector('body').style.backgroundColor = 'gray';
};

setTimeout(fun, 3000); // fun ===> funkcija 3000 laikas milisekundem

//INLINE VARIANTAS
// setTimeout( _ => {
//     document.querySelector('body').style.backgroundColor = 'gray';
// }, 3000)

const h1Tag = document.querySelector('h1');
let count = 0;
const h2Tag = document.querySelector('h2');
let count2 = 0;

const add1 = (_) => {
    count++;
    h1Tag.innerText = count;
};

const add2 = (_) => {
    count2++;
    h2Tag.innerText = count2;
};
const intId1 = setInterval(add1, 1);
const intId2 = setInterval(add2, 1000);

setTimeout((_) => {
    // nutrukia veikimą
    clearInterval(intId1);
    clearInterval(intId2);
}, 10000);
