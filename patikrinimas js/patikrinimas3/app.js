function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

//1.Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus).

bitGirls.unshift('Nausėda'); // prideda i pradzia unshift
console.log(bitGirls);

//2.Sukurkite naują masyvą bitCats Pagridu paimkite masyvą cats. Naujasis masyvas turėtų turėti elementus iš mažų, dviejų narių, masyviukų: pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.

const bitCats = [];

bitCats.push();
for (let i = 0; i < cats.length; i++) {
    let SvorisRand = rand(0, 1);
    if (SvorisRand == 1) {
        SvorisRand = 'storas';
    } else {
        SvorisRand = 'normalus';
    }

    let katinukas = {
        vardas: cats[i],
        svoris: SvorisRand,
    };
    bitCats.push(katinukas);
}
console.log(bitCats);

//3. bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.

let NormalusKatinai = 0;
let StoriKatinai = 0;
for (let i = 0; i < bitCats.length; i++) {
    if (bitCats[i].svoris == 'normalus') {
        NormalusKatinai += 1;
    } else {
        StoriKatinai += 1;
    }
}
console.log(NormalusKatinai + ' normalus');
console.log(StoriKatinai + ' stori');

//4. Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.
// const sarasasPagalAntraRaide = [];
// let antraRaide = '';
// bitCats.forEach((cat) => {
//     antraRaide = cat.vardas.slice(1, cat.vardas.length);
//     sarasasPagalAntraRaide.push(antraRaide);
// });
// console.log(sarasasPagalAntraRaide);

// console.log(bitCats[0].vardas);
bitCats.sort((a, b) => {
    a1 = a.vardas.slice(1, 2);
    // console.log(a1);
    b1 = b.vardas.slice(1, 2);
    // console.log(b1);
    if (a1 === b1) {
        return 0;
    }
    return a1 > b1 ? 1 : -1;
});
console.log(bitCats);

//5. (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. Nausėdai katinuko neduokit (nes neužteks) ir vietoj katinuko Nausėdai priskirkite stringą “Barsukas”.

const happyCats = [];
let t = 0;
for (let i = 0; i < bitGirls.length; i++) {
    if (bitGirls[i] == 'Nausėda') {
        mergaitesKatinukas = {
            MergaitesVardas: bitGirls[i],
            Barsukas: 'Barsukas',
        };
        t;
    } else {
        mergaitesKatinukas = {
            MergaitesVardas: bitGirls[i],
            Katinas: bitCats[t].vardas,
        };
        t += 1;
    }

    happyCats.push(mergaitesKatinukas);
}
console.log(happyCats);
