/* Tarpinis žinių patikrinimas #5

Reikalavimui JS kodui: turi būti sukurti 1. masyvas balls ir 2. klasė ColorBall.


Reikalavimui HTML: turi būti sukurti du laukeliai duomenims 
įvesti- spalvai ir numeriui;
 vieta, kurioje bus atvaizduojami sukurti rutuliukai, 

du mygtukai- “sukurti naują” ir “ištrinti seniausią”.

Klases ar kitus elementų atributus galite pridėti jeigu manote, kad jie jums yra reikalingi. Galite naudoti CSS tiek atskirame faile, tiek <style> viduje ar inline be jokių ribojimų.
----------------------------------
Sukurti klasę ColorBall, 
kuri turėtų dvi savybes: color ir number. 

Savybės turi būti įrašomos objekto kūrimo metu. Kiekvienas sukurtas naujas objektas turi būti pridedamas į masyvą balls.

Mygtukas “sukurti naują” turi inicijuoti kodą, kuris perskaitytų duomenis iš laukelių ir pagal juos sukurtų naują objektą. 

Masyvas turi būti atvaizduojamas vizualiai HTML’e. Jame esantys objektai turi būti atvaizduojami kaip atitinkamos spalvos apskritimai su numeriu viduryje.

Mygtukas “ištrinti seniausią” turi inicijuoti kodą, kuris iš masyvo pašaliną seniausią kamuoliuką (seniausias yra masyvo pradžioje)

Pasikeitus masyvo elementams (pridėjus, ištrynus) vizualinis masyvo atvaizdas HTML’e turi keistis dinamiškai.

 */

// -----------------------------------------------------------------------------

const balls = [];

class ColorBall {
    constructor(color, number) {
        this.color = color;
        this.number = number;
    }
}

const colorInput = document.getElementById('colorInput');
const numberInput = document.getElementById('numberInput');
const createBtn = document.getElementById('createBtn');
const deleteBtn = document.getElementById('deleteBtn');
const ballsContainer = document.getElementById('ballsContainer');

const renderBalls = (_) => {
    ballsContainer.innerHTML = '';

    balls.forEach((ball) => {
        const div = document.createElement('div');
        div.className = 'ball';
        div.style.backgroundColor = ball.color;
        div.textContent = ball.number;
        ballsContainer.appendChild(div);
    });
};

createBtn.addEventListener('click', () => {
    const color = colorInput.value;
    const number = numberInput.value.trim();

    if (number === '') {
        console.log('Įveskite numerį!');
        return;
    }

    const newBall = new ColorBall(color, number);
    balls.push(newBall);
    renderBalls();
});

deleteBtn.addEventListener('click', () => {
    if (balls.length === 0) {
        console.log('Nėra ką trinti!');
        return;
    }
    balls.shift();
    renderBalls();
});

renderBalls();
