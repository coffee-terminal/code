console.log('Laba');
console.log('Bebras nori banano');
// "Bebras nori banano" kiek yra a raidžių?

const text1 = 'Bebras nori banano';
let count_a = 0;
for (let i = 0; i < text1.length; i++) {
    text1[i] == 'a' ? (count_a += 1) : false;
}
console.log(`letter 'a' was used ${count_a} times`);

// "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai

const masyvas2 = [];
for (let i = 0; i < text1.length; i++) {
    masyvas2.push(text1[i]);
}
console.log(masyvas2);

// "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai, a raidžių nedėti

const masyvas3 = [];
for (let i = 0; i < text1.length; i++) {
    // text1[i] == 'a' ? {} : masyvas3.push(text1[i]);
    if (text1[i] == 'a') {
        continue;
    }
    masyvas3.push(text1[i]);
}
console.log(masyvas3);

// const lettersArrayWOA = [];
// for (let i = 0; i < where.length; i++) {
//     where[i] == 'a' || lettersArrayWOA.push(where[i]);

// where[i] == 'a' ==> true
// po || operatoriaus push nedaromas

// where[i] == 'a' ==> false
// po || operatoriaus push daromas

// if (where[i] == 'a') {
//     continue
// }

// lettersArrayWOA.push(where[i]);
// }

// console.log(lettersArrayWOA);

const masyvas = [45, 87, 'a', 32, 74, 53];

let sumA = 0;

for (let i = 0; i < masyvas.length; i++) {
    typeof masyvas[i] == 'number' ? (sumA += masyvas[i]) : false;
}
console.log(sumA);

const masyvas4 = ['45', 87, 32, '74', 53];
// suskaičiuoti skaičių sumą (visų)
let sumA2 = 0;
for (let i = 0; i < masyvas4.length; i++) {
    if (typeof masyvas4[i] == 'text') {
        sumA2 += parseInt(masyvas4[i]);
    } else {
        sumA2 += masyvas4[i];
    }
}
console.log(sumA2);
