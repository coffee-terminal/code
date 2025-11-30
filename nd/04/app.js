function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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

//1. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.

const ulTag = document.querySelector('ul');

for (let i = 0; i < A.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerText = A[i];
    ulTag.append(liTag);
}

//2. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka.

const ulTag2 = document.querySelector('.AntrasUl');

const Asorted = A.sort();
// console.log(Asorted);

for (let i = 0; i < Asorted.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerText = Asorted[i];
    // console.log(liTag.innerText);
    ulTag2.append(liTag);
}

//3.Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip

const AirB = A.concat(B);
AirB.sort();
// console.log(AirB);

const ulTag3 = document.querySelector('.TreciasUl');

for (let i = 0; i < AirB.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerText = AirB[i];
    ulTag3.append(liTag);
}

//4.Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.

const sectionTag = document.querySelector('section');
sectionTag.style.display = 'flex';

for (let i = 0; i < A.length; i++) {
    let divTag = document.createElement('div');
    divTag.className = 'div' + [i];
    divTag.innerText = A[i];
    divTag.style.backgroundColor = 'blue';
    divTag.style.color = 'white';
    divTag.style.borderRadius = '50%';
    divTag.style.display = 'flex';
    divTag.style.alignItems = 'center';
    divTag.style.padding = '10px';

    sectionTag.append(divTag);
}

//5.Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.
const sectionTag2 = document.querySelector('section+section');
sectionTag2.style.display = 'flex';

for (let i = 0; i < B.length; i++) {
    let divTag = document.createElement('div');
    divTag.className = 'div' + [i];
    divTag.innerText = B[i] + B[i].length;
    divTag.style.backgroundColor = 'red';
    divTag.style.color = 'white';
    divTag.style.borderRadius = '50%';
    divTag.style.display = 'flex';
    divTag.style.alignItems = 'center';
    divTag.style.padding = '10px';

    sectionTag2.append(divTag);
}

//6. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.

const sectionTag3 = document.querySelector('section:nth-of-type(3)');
sectionTag3.style.display = 'flex';

for (let i = 0; i < A.length; i++) {
    if (A[i].includes(' ')) {
        let divTag = document.createElement('div');
        divTag.className = 'div' + [i];
        divTag.innerText = A[i];
        divTag.style.backgroundColor = 'green';
        divTag.style.color = 'white';
        divTag.style.borderRadius = '50%';
        divTag.style.display = 'flex';
        divTag.style.alignItems = 'center';
        divTag.style.padding = '10px';

        sectionTag3.append(divTag);
    }
}

//7.Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle

const sectionTag4 = document.querySelector('section:nth-of-type(4)');
sectionTag4.style.display = 'flex';
sectionTag4.style.flexWrap = 'wrap';

for (let i = 0; i < B.length; i++) {
    // console.log(B[i].length);

    for (let t = 0; t < B[i].length; t++) {
        let divTag = document.createElement('span');
        divTag.className = 'span' + [t];
        divTag.innerText = B[i].slice(t, t + 1);
        // console.log(divTag.innerText);
        divTag.style.backgroundColor = 'yellow';
        divTag.style.borderRadius = '50%';
        divTag.style.alignItems = 'center';
        divTag.style.padding = '10px';

        sectionTag4.append(divTag);
    }
}

//8.Html faile sukurkite du ul tagus (tiesiogiai). Į  vieną sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais, kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.

const ulTag4 = document.querySelector('ul:nth-of-type(4)');
const ulTag5 = document.querySelector('ul:nth-of-type(5)');

for (let i = 0; i < C.length; i++) {
    if (C[i].length <= 6) {
        let liTag = document.createElement('li');
        liTag.innerText = C[i];
        ulTag4.append(liTag);
    } else {
        let liTag = document.createElement('li');
        liTag.innerText = C[i];
        ulTag5.append(liTag);
    }
}

//9. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.

const ulTag6 = document.querySelector('.ul6th');

for (let i = 0; i < C.length; i++) {
    if (C[i].includes('šuo') || C[i].includes('Šuo')) {
    } else {
        let liTag = document.createElement('li');
        liTag.innerText = C[i];
        ulTag6.append(liTag);
    }
}
