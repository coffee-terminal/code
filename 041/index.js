const express = require('express');
const fs = require('fs'); // failų sistemos modulis-biblioteka
const app = express();
const port = 80;

// Dalis Router
app.get('/', (req, res) => {
    res.send('Hello?');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/about/racoon/green', (req, res) => {
    res.send(` Green racoon about page <h1>DOG<h1>`);
});

// duomenų perdavimas su parametrais
//parametrai yra URL dalis
// :color yra kintamasis idetas i URL vieta
app.get('/racoon/:color', (req, res) => {
    // iš URL paimame spalvos parametrą
    // color yra kintamasis įdėtas į URL vietą
    const racoonColor = req.params.color;
    res.send('<h1 style="color:' + racoonColor + '" ' + '>This racoon is ' + racoonColor + '</h1>');

    // res.send(`<h1>text<h1>`);
});

app.get('/url-symbols', (req, res) => {
    const symbols = '!--@--#--$--%--^--&--?--=-- ';

    const encodedSymbols = encodeURIComponent(symbols);

    res.send(
        'Original symbols: ' +
            symbols +
            '<br>' +
            'Encoded symbols: ' +
            encodedSymbols +
            '<br>' +
            'Decoded symbols: ' +
            decodeURIComponent(encodedSymbols)
    );
});

// app.get('/kas/:vardas/kiek/:amzius', (req, res) => {
//     const vardas = req.params.vardas;
//     const amzius = req.params.amzius;

//     res.send('Sveikas ' + vardas + '. Tavo amžius yra ' + amzius);
// });

app.get('/kas/:vardas/kiek/:amzius', (req, res) => {
    // nustatome url struktūrą su dviem parametrais
    const vardas = req.params.vardas;
    // req - tai objektas, kuriame yra visa info apie užklausą
    // req.params - tai objektas, kuriame yra visi parametrai iš URL
    // req.params.vardas - paimame vardas parametrą iš URL. Parametrai visada yra tekstinio tipo (string)
    const amzius = req.params.amzius;
    // pradedame klijuoti atsakymą:
    res.send('Sveikas ' + vardas + '. Tavo amžius yra ' + amzius);
    // res - tai objektas, kuriame yra visa info apie atsakymą
    // res.send() - metodas, kuris siunčia atsakymą į naršyklę
    // res.send('tekstas') - siunčia tekstą į naršyklę
});

app.get('/suma/:num1/:num2', (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    let sum = Number(num1) + Number(num2);
    // arba const sum = +num1 + +num2;

    res.send(num1 + ' + ' + num2 + ' = ' + sum);
});

// Padaryti didesnio skaičiaus radimą per URL
// pvz: /didesnis/5/10  => turi parašyti "Didesnis skaičius yra 10"

app.get('/didesnis/:num1/:num2', (req, res) => {
    const num1 = +req.params.num1;
    const num2 = +req.params.num2;
    let didesnis;
    if (num1 == num2) {
        didesnis = 'lygus';
    } else {
        didesnis = Math.max(num1, num2);
    }

    res.send('Didesnis skaičius yra ' + didesnis);
});

app.get('/didesnis2/:skaicius1/:skaicius2', (req, res) => {
    const skaicius1 = parseFloat(req.params.skaicius1); // paverčiame tekstą į skaičių
    const skaicius2 = parseFloat(req.params.skaicius2); // paverčiame tekstą į skaičių
    let didesnis; // kintamasis didesniam skaičiui saugoti
    if (skaicius1 > skaicius2) {
        // tikriname kuris skaičius didesnis
        didesnis = skaicius1; // priskiriame didesnį skaičių kintamajam
    } else {
        didesnis = skaicius2; // priskiriame didesnį skaičių kintamajam
    }

    res.send(`Didesnis skaičius yra ${didesnis}`); // siunčiame atsakymą su didesniu skaičiumi
});

// Vartotojo įvestos informacijos validacija (tikrinimas)

// if (isNaN(skaicius1) || isNaN(skaicius2)) {
//     // tikriname ar abu parametrai yra skaičiai
//     res.send('Klaida: abu parametrai turi būti skaičiai.');
//     return; // baigiame funkcijos vykdymą
// }

// if (skaicius1 == skaicius2) {
//     res.send('Klaida: skaičiai yra lygūs.');
//     return; // baigiame funkcijos vykdymą
// }
// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
    console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});

//-----------------------------------------------------------------------------

/* 

https://duckduckgo.com/?q=karv%C4%97&t=chromentp&ia=web
 
parametrai yra URL dalis po klaustuko ?
parametras susideda iš kintamojo vardo ir reikšmės
vardas rašomas prieš lygybės ženklą =
reikšmė rašoma po lygybės ženklo =
jei yra keli parametrai, jie atskiriami & ženklu
 

karvė at DuckDuckGo
DuckDuckGo. Privacy, Simplified.
 
*/

// duomenų perdavimas su query (užklausos) parametrais
//
app.get('/spalvotas-dydis', (req, res) => {
    // paimame query parametrus iš req objekto
    const spalva = req.query.color;
    const dydis = req.query.size;
    const mazis = req.query.small;
    res.send(`Spalva yra ${spalva}, dydis yra ${dydis}, mazis yra ${mazis}`);
});

// Padaryti kalkuliatorių skaičiuotuvą sumai per URL skaičiuoti
// url pvz: /suma/5/10  => turi parašyti "5 + 10 = 15"

app.get('/spalvotas-dydis', (req, res) => {
    // paimame query parametrus iš req objekto
    const spalva = req.query.color;
    const dydis = req.query.size;
    const mazis = req.query.small;
    res.send(`Spalva yra ${spalva}, dydis yra ${dydis}, mazis yra ${mazis}`);
});

app.get('/didesnisQuery/', (req, res) => {
    const num1 = +req.query.num1;
    const num2 = +req.query.num2;
    let didesnis;
    if (num1 == num2) {
        didesnis = 'lygus';
    } else {
        didesnis = Math.max(num1, num2);
    }

    res.send('Didesnis skaičius yra ' + didesnis);
});

app.get('/sumaQuery/', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    let sum = Number(num1) + Number(num2);
    // arba const sum = +num1 + +num2;

    res.send(num1 + ' + ' + num2 + ' = ' + sum);
});

// Padaryti kalkuliatorių skaičiuotuvą sumai per URL skaičiuoti
// url pvz: /suma/5/10  => turi parašyti "5 + 10 = 15"

app.get('/sumaQueryandParam/:num1/', (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.query.num2;
    const sum = +num1 + +num2;

    res.send(num1 + ' + ' + num2 + ' = ' + sum);
});
