console.log('Dar miegu');

function pasisveikinti() {
    console.log('Sveiki prisijungę');
}

pasisveikinti();

function pasisveikinti2(vardas) {
    console.log('Sveiki prisijungę ' + vardas);
}

pasisveikinti2('Aldona');

function pasisveikinti3(vardas) {
    console.log(`Sveiki prisijungę ${vardas}. Gerų pirkinių.`);
}
pasisveikinti3('Aldona');

// Prisijungimas prie paskyros.
// Patikrinti ar vartotojo vardas užregustruotas. Jei ne, konsolėje atspausdinti // "Toks vartotojas neegzistuoja"
// Patikrinti ar slaptažodis teisingas. Jei teisingas, konsolėje atspausdinti "Sveiki atvykę".
// Jei slaptažodis neteisingas, konsolėje atskžpausdinti "Slaptažodis ir vartotojo vardas neatitinka".
// Vartotojo vardas ir slaptažodis atsitiktinai yra true/false.
// Parašyti funkciją, kurį sukurtų ir patikrintų prisijungumo duomenis.
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function pasykyra() {
    let VartotojoVardas = rand(0, 1) ? true : false;
    console.log(`Vartotojo vardo reikšmė - ${VartotojoVardas}`);
    let VartotojoSlaptazodis = rand(0, 1) ? true : false;
    console.log(`Slaptažodžio reikšmė - ${VartotojoSlaptazodis}`);
    if (!VartotojoVardas) {
        console.log(`Toks vartotojas neegzistuoja`);
    } else if (VartotojoSlaptazodis) {
        pasisveikinti();
    } else {
        console.log('Slaptažodis ir vartotojo varas neatitinka');
    }
}

pasykyra();

console.clear();

// Parašykite funkciją, kuri gauna amžių ir parašo konsolėje ar žmogus yra pilnametis.
// function pilnametis (amzius){};

const pilnametis = (amzius) => {
    if (amzius >= 18) {
        console.log('Pilnametis');
    } else {
        console.log('Ne pilnametis');
    }
};

// pilnametis(rand(12, 30));
pilnametis(17);
pilnametis(18);
pilnametis(26);

const pilnametis2 = (amzius) => (amzius >= 18 ? console.log('Pilnametis') : console.log('Ne pilnametis'));
pilnametis2(17);
pilnametis2(18);
pilnametis2(26);

const pilnametis3 = (amzius) => console.log(amzius >= 18 ? 'Pilnametis' : 'Ne pilnametis');
pilnametis3(17);
pilnametis3(18);
pilnametis3(26);

const Arlyginis = (x) => console.log(x % 2 == 0 ? 'Lyginis' : 'Nelyginis');

Arlyginis(12);
Arlyginis(7);

// deklaravom funkciją = parametras => (sąlyga, kurią tikrinom) ? (ką darom jei true) : (ką darom jei false);
