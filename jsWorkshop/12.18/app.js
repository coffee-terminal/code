function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const diceImage = document.querySelector('.image');
const diceNumber = document.querySelector('.diceNumber');

const button = document.querySelector('.Roll');

const kauliukas = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
let simbolis = '';

function rollDice() {
    let rollRezult = rand(1, 6);
    console.log(rollRezult);
    diceNumber.innerText = rollRezult;
    diceImage.innerHTML = kauliukas[rollRezult - 1];
}

button.addEventListener('click', rollDice);
