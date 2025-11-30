function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1.Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką.
// Paspaudus mygtuką
// kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir
// jį įrašykite į tago vidų naudojant innerText() metodą.
// Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo.
// Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai.

const A1button = document.querySelector('button');
A1button.style.height = '30px';
A1button.style.width = '100px';
const A1h2 = document.querySelectorAll('h2');
A1h2[0].innerText = 'random skaicius';
A1h2[1].innerText = 'random skaicius';

A1button.addEventListener('click', () => {
    console.log('clicked');
    const h2Random = rand(1, 6);
    console.log(typeof h2Random);
    A1h2[0].innerText = rand(h2Random);
});
