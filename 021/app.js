console.log('Masyvai ir dar objektai juose');

const animals = [
    {
        name: 'Briedis',
        age: 54,
    },
    {
        name: 'Lapė',
        age: 12,
    },
    {
        name: 'Vilkas',
        age: 8,
    },
    {
        name: 'Kiškis',
        age: 4,
    },
    {
        name: 'Erelis',
        age: 16,
    },
    {
        name: 'Voverė',
        age: 3,
    },
];

console.log(animals);

// ieškom vilko

let findIndex = -1;

for (let i = 0; i < animals.length; i++) {
    //animals visi zverys > masyvas
    //animals[i] konkretus itasis zveris > elementas
    //animals[i].name konkretus itojo zveries vardas >objektas

    if ('Vilkas' == animals[i].name) {
        findIndex = i;
    }
}
console.log(findIndex);

const pencils = [
    {
        color: 'Raudonas',
        size: 12,
    },
    {
        color: 'Mėlynas',
        size: 8,
    },
    {
        color: 'Žalias',
        size: 15,
    },
    {
        color: 'Geltonas',
        size: 7,
    },
    {
        color: 'Juodas',
        size: 10,
    },
    {
        color: 'Violetinis',
        size: 9,
    },
    {
        color: 'Oranžinis',
        size: 11,
    },
];

// maryte paise paise ir supaise. Kuris marytes piestukas mylimiausias

let favorite = null;

for (let i = 0; i < pencils.length; i++) {
    if (null === favorite) {
        favorite = pencils[i];
    } else {
        if (favorite.size > pencils[i].size) {
            favorite = pencils[i];
        }
    }
}

console.log(favorite.color);

// Maryte sudeliojo savo piestukus i viena linija, kokio ilgumo linija gavosi (Agregacija)

let line = 0;
for (let i = 0; i < pencils.length; i++) {
    line = pencils[i].size + line;
    // line += pencils[i].size;
}

console.log(line);

// Maryte geltona piestuka ismete per balkona. Likusius piestukus sudeliojo i viena linija

let line2 = 0;

for (let i = 0; i < pencils.length; i++) {
    if ('Geltonas' != pencils[i].color) {
        line2 = pencils[i].size + line2;
    }
}
console.log(line2);

//antras variantas
line2 = 0;

for (let i = 0; i < pencils.length; i++) {
    if ('Geltonas' == pencils[i].color) {
        continue;
    }
    line2 = pencils[i].size + line2;
}
console.log(line2);

if (true) {
    console.log('Taip');
} else {
    console.log('Ne');
}

// Bloga praktika, bet sintaksė teisinga
if (false) console.log('Taip'); // jeigu viena eilutė, galima praleisti garbanotus skliaustus
else console.log('Ne');

//Kietai, bet irgi ne kas

const D = false;

D && console.log('=Taip');
D || console.log('=Ne');

// masyvu filtravimas

const oldAnimals = []; // tiems kurie virs 10 metu

for (let i = 0; i < animals.length; i++) {
    if (animals[i].age > 10) {
        oldAnimals.push(animals[i]);
    }
}

console.log(oldAnimals);

//Maryte susirinko piestukus ilgesnius nei 10 ir isejo, kokie piestukai liko voliotis (filtravimas)

const likePiestukai = [];
const ilgesniNei10 = [];

for (let i = 0; i < pencils.length; i++) {
    if (pencils[i].size >= 10) {
        ilgesniNei10.push(pencils[i]);
    } else {
        likePiestukai.push(pencils[i]);
    }
}

console.log('surinkti: ', ilgesniNei10);
console.log('like: ', likePiestukai);

// Bubble sort pencils by size
for (let i = 0; i < pencils.length - 1; i++) {
    for (let j = 0; j < pencils.length - 1 - i; j++) {
        if (pencils[j].size > pencils[j + 1].size) {
            const temp = pencils[j];
            pencils[j] = pencils[j + 1];
            pencils[j + 1] = temp;
        }
    }
}

console.log(pencils);
