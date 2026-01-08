const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const { title } = require('process');

const app = express();
//importuojame services.js duomenis
const { services } = require('./services');

const port = 80;

app.use(bodyParser.urlencoded({ extended: true })); //body duomenu parseris

//Failai folderyje 'public' bus pasiekiami per narsykle
app.use(express.static('public')); // Nurodome, kad statiniai failai bus is 'public' katalogo

// Dalis Router, '/' home
app.get('/', (req, res) => {
    //skaitome tris atskirus failus. Toks skaitymas galimas tiktai backend
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    const home = fs.readFileSync('./html/home.html', 'utf8');

    const pageTitle = 'Home Page';
    const topWithTitle = top.replace('{{title}}', pageTitle);

    res.send(topWithTitle + home + bottom); //vienas html failas is sujungtu failu
});

app.get('/service/:slug', (req, res) => {
    // Iš URL paimame slug parametrą
    const slug = req.params.slug;
    // Randame atitinkamą paslaugą pagal slug
    const service = services.find((s) => s.slug === slug);

    // Tikriname, ar paslauga rasta
    if (!service) {
        // Jei paslauga nerasta, grąžiname 404 klaidą
        return res.status(404).send('Service not found');
    }

    // skaitome tris atskirus failus. Toks skaitymas galimas tik backend'e
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    const serviceHtml = fs.readFileSync('./html/service.html', 'utf8');

    // Sukuriame HTML sąrašą iš paslaugos savybių
    let features = '';
    service.features.forEach((feature) => {
        features += `<li>${feature}</li>`;
    });

    // Pakeičiame vietas HTML faile su faktiniais duomenimis
    let servicePage = serviceHtml
        .replace('{{icon}}', service.icon)
        .replace('{{title}}', service.title)
        .replace('{{description}}', service.description)
        .replace('{{features}}', features);

    // Pakeičiame puslapio pavadinimą
    const pageTitle = service.title;
    const topWithTitle = top.replace('{{title}}', pageTitle);

    // Siunčiame galutinį HTML atsakymą
    res.send(topWithTitle + servicePage + bottom);
});

app.get('/services', (req, res) => {
    //skaitome tris atskirus failus. Toks skaitymas galimas tiktai backend
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    const services = fs.readFileSync('./html/services.html', 'utf8');

    const pageTitle = 'Services Page';
    const topWithTitle = top.replace('{{title}}', pageTitle);

    res.send(topWithTitle + services + bottom); //vienas html failas is sujungtu failu
});

app.get('/about', (req, res) => {
    //skaitome tris atskirus failus. Toks skaitymas galimas tiktai backend
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    const about = fs.readFileSync('./html/about.html', 'utf8');

    const pageTitle = 'About Page';
    const topWithTitle = top.replace('{{title}}', pageTitle);

    res.send(topWithTitle + about + bottom); //vienas html failas is sujungtu failu
});

app.get('/contact', (req, res) => {
    //skaitome tris atskirus failus. Toks skaitymas galimas tiktai backend
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    let contact = fs.readFileSync('./html/contact.html', 'utf8');

    const m = req.query.m; // rodo sekmes zinute
    if (m === 'ok') {
        contact = contact.replace('{{successMessageDisplay}}', '');
    } else {
        // nerodome sekmes zinutes
        contact = contact.replace('{{successMessageDisplay}}', 'style="display:none;"');
    }

    const pageTitle = 'Contact Page';
    const topWithTitle = top.replace('{{title}}', pageTitle);

    res.send(topWithTitle + contact + bottom); //vienas html failas is sujungtu failu
});

app.post('/form-submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    let data = fs.readFileSync('data.json', 'utf8'); // nuskaitome esamus duomenis
    let json = JSON.parse(data); // paverčiame į JSON objektą
    json.push({ name, email, message }); // pridedame naują žinutę
    data = JSON.stringify(json, null, 2); // paverčiame atgal į string'ą
    fs.writeFileSync('data.json', data); // įrašome atgal į failą

    res.redirect('/contact?m=ok');
});

// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
    console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});
