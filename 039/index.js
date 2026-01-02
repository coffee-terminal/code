const express = require('express');
const fs = require('fs');
const app = express();

const port = 80;

//Dalis Router
app.get('/', (req, res) => {
    //req yra request kuris yra jau kaip objektas
    //res yra response yra objektas, veliau automatiskai yra verciamas i stringa
    res.status(200).send('<h1>Labas, Bebrai! Ka tu?<h1>');
    // res.status(418).send('<h1>Kavos nebus<h1>');
});

//Paleidzia serveri ir paraso terminale, kad viskas yra gerai.
app.listen(port, () => {
    console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});

app.get('/Bebras', (req, res) => {
    res.status(200).send('Bebro puslapis');
});

//URL su perduodamu parametru
app.get('/Barsukas/:id', (req, res) => {
    const id = req.params.id; // params yra raktinis zodis gau parametra

    res.status(200).send('Barsuko puslapis 1');
});

// app.get('/Barsukas/2', (req, res) => {
//     res.status(200).send('Barsuko puslapis 2');
// });

app.get('/briedis', (req, res) => {
    // read file synchronously
    const data = fs.readFileSync('./html/briedis.html', 'utf8');
    res.send(data);
});
