function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// Naudodami JS į tagus h1 - h4 įrašykite skaičius nuo 1 iki 4 (skaičius atitinka tagą).

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");

h1.innerText = 1;
h2.innerText = 2;
h3.innerText = 3;
h4.innerText = 4;

// Naudodami JS iš vieno div tago padarykite mėlyną keturkampį, o iš kito raudoną apskritimą.

const myResultDiv = document.querySelector("div");

myResultDiv.style.display = "inline-block";
myResultDiv.style.width = "100px";
myResultDiv.style.height = "100px";
myResultDiv.style.backgroundColor = "blue";

const myResultDiv2 = document.querySelector("div + div");

myResultDiv2.style.display = "inline-block";
myResultDiv2.style.width = "100px";
myResultDiv2.style.height = "100px";
myResultDiv2.style.borderRadius = "50%";
myResultDiv2.style.backgroundColor = "red";

myResultDiv2.style.marginLeft = "50px";

// Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Kintamuosius ir gautą rezultatą įrašykite į atitinkamus span tagus, esančius section tage su id=go3.

let A2 = rand(0, 4);
let B2 = rand(0, 4);

console.log(A2, B2);

let didesnisSkaicius = Math.max(A2, B2);
let mazesnisSkaicius = Math.min(A2, B2);

console.log("Didesnis" + " " + didesnisSkaicius);
console.log("Mazesnis" + " " + mazesnisSkaicius);

const result2 = didesnisSkaicius / mazesnisSkaicius;

console.log("resultatas" + " " + result2.toFixed(2));

let span1 = (document.querySelector("#go3>span").innerText = didesnisSkaicius);
let span2 = (document.querySelector("#go3>span+span").innerText =
  mazesnisSkaicius);
let span3 = (document.querySelector("#go3>span + span + span").innerText =
  result2.toFixed(2));

// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 50 iki 200.
// Iš section tage su id=go4 esančių div tagų padarykite atitinkamo dydžio (px) apskritimus.
// Apskritimai turi būti išdėlioti eilute nuo mažiausio iki didžiausio.

let A4 = rand(50, 200);
let B4 = rand(50, 200);
let C4 = rand(50, 200);

console.log(A4, B4, C4);

let didesnisSkaicius4 = Math.max(A4, B4, C4);
let mazesnisSkaicius4 = Math.min(A4, B4, C4);
let vidutinisSkaicius4 = 0;

if (A4 > B4 || A4 > C4) {
  if (A4 > B4 && A4 > C4) {
    if (B4 > C4) {
      vidutinisSkaicius4 = B4;
    } else {
      vidutinisSkaicius4 = C4;
    }
  } else {
    vidutinisSkaicius4 = A4;
  }
} else if (B4 > C4) {
  vidutinisSkaicius4 = C4;
} else {
  vidutinisSkaicius4 = B4;
}
console.log(vidutinisSkaicius4);

let go4div1 = document.querySelector("#go4>div");

go4div1.style.display = "inline-block";
go4div1.style.width = mazesnisSkaicius4 + "px";
go4div1.style.height = mazesnisSkaicius4 + "px";
go4div1.style.backgroundColor = "orange";
go4div1.style.borderRadius = "50%";

let go4div2 = document.querySelector("#go4>div + div");

go4div2.style.display = "inline-block";
go4div2.style.width = vidutinisSkaicius4 + "px";
go4div2.style.height = vidutinisSkaicius4 + "px";
go4div2.style.backgroundColor = "orange";
go4div2.style.borderRadius = "50%";

let go4div3 = document.querySelector("#go4>div + div + div");

go4div3.style.display = "inline-block";
go4div3.style.width = didesnisSkaicius4 + "px";
go4div3.style.height = didesnisSkaicius4 + "px";
go4div3.style.backgroundColor = "pink";
go4div3.style.borderRadius = "50%";

// Naudokite funkcija rand(). Į section tage su id=go5 esančius span įrašykite 3 skaičius nuo -10 iki 10. Skaičius mažesnių už 0 spausdinkite raudonai,  didesnius už 0 mėlynai, o 0 žaliai.

let A5 = rand(-10, 10);
let B5 = rand(-10, 10);
let C5 = rand(-10, 10);

let spalvos3 = [A5, B5, C5];
console.log(A5, B5, C5);

let go5span1 = document.querySelector("#go5 span");
let go5span2 = document.querySelector("#go5 span + span");
let go5span3 = document.querySelector("#go5 span + span + span");
go5span1.innerText = A5;
go5span2.innerText = B5;
go5span3.innerText = C5;
go5span1.style.color = "red";
go5span2.style.color = "blue";
go5span3.style.color = "green";

// let go5span2 = document.querySelector("#go5>span+span");
// let go5span3 = (document.querySelector("#go5>span + span + span").innerText =
//   didesnisSkaicius5);

// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuris skaičiuos žvakių kainą ir užpildykite formą easnčią section tage su id=go6. Žvakių kiekį generuokite ​rand() funkcija nuo 5 iki 3000.

// Naudokite funkciją rand(). Parašykite skriptą, kuris atsitiktine tvarka generuotų ir iš section su  id=go7 esančio div tago padarytų apskritimą, arba keturkampį arba trikampį.

// Suskaičiuoti kiek kiekvienos spalvos apskritimų yra section su id=go8. Rezultatus įrašyti į šalia tam skirtas vietas.

// Užpildyti daugybos lentelę, esančią tage section su id=go9.

// Keturkapius, esančius tage section su id=go10, kurių plotas didesnis nei 10000 (px) nuspalvinkite raudonai.
