function randomColor() {
    return (
        '#' +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padEnd(6, '0')
    );
}
function rand2(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
const A = ['Bebras', 'Zebras', 'Vilkas', 'Lapė', 'Barsukas', 'Voverė', 'Laukinis katinas', 'Šuo', 'Naminis katinas'];

const B = ['Kalakutas', 'Višta', 'Antis', 'Žąsis', 'Ančiasnapis'];

const C = [
    'Višta',
    'Gaidys',
    'Šernas',
    'Lapė',
    'Vilkas',
    'Šuo dingo',
    'Barsukas',
    'Voverė',
    'Šuo',
    'Naminis katinas',
    'Laukinis katinas',
    'Šuo atsirado',
    'Bebras',
    'Ožys',
];
//10.Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 03. DOM ir Cycles (one & four edition)).#fun

const bodyElement2 = document.querySelector('body');
bodyElement2.style.margin = 0;
bodyElement2.style.padding = 0;
bodyElement2.style.overflow = 'hidden';
bodyElement2.style.height = '100vh';

const A7Element = document.createElement('div');
A7Element.className = 'backGround';

bodyElement2.append(A7Element);
const divKlaseA7 = document.querySelector('.backGround');

for (let i = 0; i < C.length * 10; i++) {
    const A7Element = document.createElement('div');
    A7Element.className = 'apskritimas' + i;
    A7Element.style.position = 'absolute';
    let AtsitiktisZodis = rand2(0, C.length - 1);
    A7Element.innerText = C[AtsitiktisZodis];

    A7Element.style.color = randomColor();
    let randFontSize = rand2(10, 100) + 'px';
    A7Element.style.fontSize = randFontSize;

    A7Element.style.opacity = 0.8;

    let randApskritimasPozRight = rand2(-10, 100) + '%';
    let randApskritimasPozTop = rand2(-10, 100) + '%';

    A7Element.style.right = randApskritimasPozRight;
    A7Element.style.top = randApskritimasPozTop;

    divKlaseA7.append(A7Element);
}
