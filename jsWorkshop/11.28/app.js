console.log('Hello Friday!');

function funkcija1(par) {
    'kodas';
}

const funkcija2 = function (par) {
    'kodas';
};

const funkcija3 = () => {
    'kodas';
};

const funkcija4 = () => 'kodas';

if ('saliga') {
    ('ką darom jei true');
} else {
    ('ką darom jei false');
}

function funkcija5(par) {
    if ('saliga') {
        ('ką darom jei true');
    } else {
        ('ką darom jei false');
    }
}

funkcija5();
console.log(funkcija5());

// 1. Patikrinti ar skaičius teigiamas
// Sukurti funkciją, kuri gauna skaičių (kaip argumentą) ir:
// išspausdina konsolėje „Teigiamas“ arba „Neigiamas“

const ArTeigiamas = (x) => console.log(x > 0 ? 'Teigiamas' : 'Neigiamas');
ArTeigiamas(-1);

// 2. Patikrinti slaptažodį
// Jei slaptažodis yra „labas“ , spausdinam konsolėje -  „Teisingas“
// Kitu atveju - „Neteisingas“

const ArLabas = (x) => console.log(x == 'Labas' ? 'Teisingas' : 'Neteisingas');
ArLabas('Nelabas');
ArLabas('Labas');

// 3. Temperatūros tikrinimas. Sukurti funkciją
// Jei temp > 20 , spausdinam konsolėje - „Šilta“
// Kitu atveju - „Vėsu“

const TempOver20 = (x) => console.log(x > 20 ? 'Šilta' : 'Vėsu');
TempOver20(15);
TempOver20(25);

const TempOver20_2 = (x) => {
    if (x == 20) {
        return 'Lygi 20';
    } else if (x > 20) {
        return 'Šilta';
    } else {
        return 'Vėsu';
    }
};

console.log(TempOver20_2(15));
console.log(TempOver20_2(20));
console.log(TempOver20_2(25));

// 4. Sukurti funkciją kuri patikrintų ar vardas lygus „Jonas“. Sukurti funkciją
// Jei vardas "Jonas" spausdinam konsolėje - „Labas, Jonai!“
// Kitu atveju  -  „Sveiki.“

const VardasJ = (x) => {
    if (x == 'Jonas') {
        return 'Labas, Jonai!';
    } else {
        return 'Sveiki.';
    }
};
console.log(VardasJ('Jonas'));
console.log(VardasJ('Petras'));

// 5. Sukurti funkciją kuri patikrintų ar skaičius didesnis už 100.
// Jei >= 100 = „Daug!“
// Kitu atveju = „Mažai.“

const ArDidesnis = (x) => console.log(x >= 100 ? 'Daug!' : 'Mažai.');

// console.log(ArDidesnis(99));
ArDidesnis(100);
ArDidesnis(99);

// 6. Sukurti funkciją kuri patikrintų ar tekstas yra tuščias
// Jei textas yra  "" - „Tuščia“
// Kitu atveju - „Yra tekstas“

const ArTuscias = (word) => {
    if (word.length > 0) {
        return 'Yra tekstas';
    } else {
        return 'Tuscia';
    }
};

console.log(ArTuscias(String(4)));

const tekstas = (par) => console.log(par === '' ? 'Tuščia1' : 'Yra tekstas1');
tekstas('kazkas');
tekstas('');

// Petras ir Birutė ridena kauliuką.

// Parašyti funkciją, kuri sukurtų ir konsolėje atspausdintų išridentus skaičius.

// Parašytų kas nugalėjo.

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function KaulioRidenimas() {
    let Petras = rand(1, 6);
    let Birute = rand(1, 6);
    console.log(`Petrui iškrito ${Petras}, Birutei iškrito ${Birute}`);
    if (Petras == Birute) {
        return console.log(`Lygiosios: Petrui iškrito ${Petras}, Birutei iškrito ${Birute}`);
    } else if (Petras > Birute) {
        return console.log(`Laimejo Petras  ${Petras}`);
    } else {
        return console.log(`Laimejo Birute ${Birute}`);
    }
}

KaulioRidenimas();
// KaulioRidenimas(6, 1);
// KaulioRidenimas(3, 3);

//Užduotis:
//Parašykite funkciją, kurį gauna krepšelio sumą ir kliento tipą ir grąžina galutinę kainą:
// Klientas "bazinis:  nuolaidos nėra
// Klientas "vip" -  20% nuolaida
// Klientas "darbuotojas" -  30% nuolaida

const kainosPaskaiciavimas = (krSuma, klientoTipas) => {
    if (klientoTipas === 'bazinis') {
        return krSuma;
    } else if (klientoTipas === 'vip') {
        return krSuma * 0.8;
    } else if (klientoTipas === 'darbuotojas') {
        return krSuma * 0.7;
    } else {
        return krSuma;
    }
};

console.log(kainosPaskaiciavimas(100, 'bazinis'));
console.log(kainosPaskaiciavimas(100, 'vip'));
console.log(kainosPaskaiciavimas(100, 'darbuotojas'));
console.log(kainosPaskaiciavimas(100, 'akcija'));

const manoKaipVIPKr = kainosPaskaiciavimas(10, 'vip');

let manoDraugesKaipDar = kainosPaskaiciavimas(120, 'darbuotojas');
console.log(200 - manoKaipVIPKr - manoDraugesKaipDar);
