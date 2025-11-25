// 1. Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą
//  ir kiekviename cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti.
//  Paskutinis skaičius turėtų būti 1. Visas rezultatas turėtų būti toks:  10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).

for (i = 0; i < 10; i++) {
    console.log('Liko nužiuoti ratų ', 10 - i);
}

// 2. Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Kiekvieną ratą automobilis važiuoja skirtingu nuo 120 iki 220 km/h greičiu.
// Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą,
// rand() funkcija generuokite atsitiktinį automobilio greitį
// o visiems ciklams pasibaigus pateikite bendrą visų 10 ratų vidutinį greitį.

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const ratuSkaicius = 10;
let vidGreitis = 0;

let greitis;
for (i = 0; i < ratuSkaicius; i++) {
    greitis = rand(120, 220);
    // console.log(greitis);
    vidGreitis = greitis + vidGreitis;
}
console.log('vidutinis greitis', (vidGreitis = vidGreitis / ratuSkaicius), 'km/h');

// 3.Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų.
// Jo kuro bake liko 44 litrai kuro.
// Kiekviename rate automobilis sunaudoja atsitiktinį kiekį kuro: nuo 3 iki 6 litrų.
// Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, o ciklams pasibaigus pateikite išvadą ar automobiliui užteko kuro įveikti visus 10 ratų. Kurui pasibaigus ciklą nutraukite anksčiau laiko.

let likoBake = 44;
let litrSanaudos;
let ratuSkaiciusX = 0;
let arUzteko;

for (i = 0; i < ratuSkaicius; i++) {
    litrSanaudos = rand(3, 6);
    arUzteko = 'užteko kuro įveikti visus 10 ratų';
    if (likoBake >= litrSanaudos) {
        likoBake = likoBake - litrSanaudos;
        console.log(i + 1 + ':', likoBake);
        ratuSkaiciusX++;
    } else {
        arUzteko =
            'Bake liko litru: ' +
            likoBake +
            '\n' +
            'Sekancio rato kuro sanaudos: ' +
            litrSanaudos +
            '\n' +
            'Pravaziuotu ratu skaicius: ' +
            ratuSkaiciusX;
        break;
    }
}
console.log(arUzteko);

// console.clear();

// 4.Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų (žiedų).
// Kiekviename žiede yra 5 posūkiai,
// kuriuose automobilio greitis yra atsitiktinis dydis nuo 20 iki 120 km/h.
// Imituokite tokią situaciją dviem for ciklais (vienas 10 ratų, kitas 5 posūkiai)
// ir ciklams pasibaigus atspausdinkite mažiausią automobilio greitį kažkuriame iš posūkių.

let posukioGreitis;
const maziausiasGreitis = [];
const posukis = [];

let index;
const indexs = [];

const konkretu = [' '];

for (i = 0; i < 10; i++) {
    for (t = 0; t < 5; t++) {
        posukioGreitis = rand(20, 120);
        posukis[t] = posukioGreitis;
    }
    // console.log(posukis);
    // console.log(Math.min(...posukis));
    maziausiasGreitis[i] = Math.min(...posukis);
    index = posukis.indexOf(maziausiasGreitis[i]);
    indexs[i] = index + 1;
    konkretu[i] = 'Žiedas: ' + (i + 1) + ' Posukis: ' + indexs[i] + ' Mažiausias greitis: ' + maziausiasGreitis[i] + '\n';
}
console.log(konkretu.toString());
console.log('kiekvieno rato maziausias posukio greits:', maziausiasGreitis);
console.log('Mažiausias posūkio greitis: ', Math.min(...maziausiasGreitis));

//5. (BOSO lygis) Dykumoje vyksta lenktynės. Automobilis Nr. 55 juose dalyvauja.
// Kiekviename kilometre gali atsitikti arba neatsitikti rand(0, 1)
// tokie trys įvykiai: netikėtai iššokti - neiišokti ant kelio kengūra, vairuotojas gali nespėti - spėti pasukti vairą ir vairuotojas gali nespėti - spėti paspausti stabdžius.
// Imituokite tokią situaciją do while ciklu-
// vienas kilometras vienas ciklo prasisukimas.
// Cikle rand() funkciją atsitiktinai generuokite visų įvykių tikimybę.
// Jeigu viename cikle įvyksta visi nepalankūs įvykiai: iššoka kengūra, vairuotojas nespėja pasukti vairo ir nespėja paspausti stabdžių while ciklą baikite.
//  Ciklo pabaigoje atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.

let kilometraiBeAvarijos = 0;
let kengura;
let vairoPasukimas;
let stabdziuSpaudimas;

do {
    kengura = rand(0, 1) ? 'neiišokti' : 'iššokti';
    console.log(kengura);
    vairoPasukimas = rand(0, 1) ? 'spėti' : 'nespėti';
    console.log(vairoPasukimas);
    stabdziuSpaudimas = rand(0, 1) ? 'spėti' : 'nespėti';
    console.log(stabdziuSpaudimas);
    console.log('===============');
    if (kengura == 'iššokti' && vairoPasukimas == 'nespėti' && stabdziuSpaudimas == 'nespėti') {
        console.log(kilometraiBeAvarijos + ' km');
        break;
    } else {
        kilometraiBeAvarijos++;
    }
} while (true);
