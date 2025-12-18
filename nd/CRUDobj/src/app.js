const rand = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

// 1. per cd nugeliaujame i projekto folderi
// 2. npm init -y inicijuoja node
// 3. apsirasome kanors pakeiciame atsiradusiame package.json
// 4. pradedame irasineti bibliotekas kaip npm i uuid ar npm install laravel-mix --save-dev

/* 

Ganykla. Turim trijų rūšių gyvulius: avis, antis ir antilopes. 
Kiekvienas gyvulys turi savo svorį.
Parašyti localStorage CRUD aplikaciją, 
kurioje būtų galima pridėti naujus gyvulius su jų svoriais į ganyklą,
 ištrinti iš ganyklos 
 ir redaguoti kiekvieno jų svorį.
 */

/*   
1. inicijuoja funkcija kuri pirma paziuri ar yra listas, jei yra rendina
2. toje pacioje funcijoje yra migtukas kuris laukia kad nurodytu pasirinkta spalva
3. pasirinkta spalva siunciama i Store funkcija kad papilnai butu aprasomas value objektas
4. store funkcijja ideda objekta i sarasa ir kreipiasi i Write funkcija
5. write funkcija pavercia sarasa stringu, ir prideda prie key jo value data
6.  store kreipiasi i render funkcija, joje selectinama kur bus talpinama, po to  pasirenkama template pagal kuria klonuojama struktuka kiekvienam forEach ciklui


*/

let LIST;
const KEY = 'gyvuliai';
let pasirinktas;
const animalInput = document.querySelector('[data-animal-input]');
const weightInput = document.querySelector('[data-weight-button]');

animalInput.addEventListener('change', (_) => {
    return (pasirinktas = animalInput.value);
});

const init = (_) => {
    readLocalStorage();
    render();
    // const animalInput = document.querySelector('[data-animal-input]');
    const animalAddButton = document.querySelector('[data-add-animal-button]');
    // const weightInput = document.querySelector('[data-weight-button]');

    animalAddButton.addEventListener('click', (_) => {
        const animal = animalInput.value;
        const svorisAnimal = weightInput.value;
        Store(animal, svorisAnimal);
    });
};

const readLocalStorage = (_) => {
    let data = localStorage.getItem(KEY);
    if (null === data) {
        LIST = [];
    } else {
        LIST = JSON.parse(data);
    }
};

const writeLocalStorage = (_) => {
    let data = JSON.stringify(LIST);
    localStorage.setItem(KEY, data);
};

const render = (_) => {
    const listBin = document.querySelector('[data-colors-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    listBin.innerHTML = '';
    LIST.forEach((animal) => {
        //create
        const rowHtml = listRowTemplate.content.cloneNode(true);
        const animalId = rowHtml.querySelector('[data-animal-id]');
        animalId.innerHTML = `${animal.gyvunas} ${animal.svoris} kg `;

        //delete
        const deleteButton = rowHtml.querySelector('[data-delete-animal]');

        deleteButton.dataset.id = animal.id;
        deleteButton.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            Destroy(id);
        });

        //edit
        const editInput = rowHtml.querySelector('[data-edit-weight-input]');
        const editButton = rowHtml.querySelector('[data-edit-weight-button]');
        editInput.value = animal.svoris; // senu duomenu perrrasymas i edit forma
        editButton.dataset.id = animal.id;

        editButton.addEventListener('click', (x) => {
            const id = parseInt(x.target.dataset.id);
            const kg = editInput.value;

            Update(id, kg);
        });

        listBin.appendChild(rowHtml);
    });
};

const Store = (data, meta) => {
    if ('' != pasirinktas && weightInput.value > 0) {
        const id = rand(10000000, 99999999);
        dataToStore = {
            id,
            gyvunas: data,
            svoris: meta,
        };

        LIST.push(dataToStore);
        writeLocalStorage();
        render();
    }
};

const Update = (id, data) => {
    LIST = LIST.map((item) => (item.id == id ? { ...item, svoris: data } : item));
    writeLocalStorage();
    render();
};

const Destroy = (id) => {
    LIST = LIST.filter((color) => color.id != id); //ismetam is saraso kvadratuka su nurodytu id
    writeLocalStorage();
    render();
};

init();

/* ==============================================================================================
==============================================================================================
==============================================================================================
==============================================================================================
============================================================================================== */

// const renderAnimalList = (_) => {
//     const ol = document.querySelector('#ol');
//     ol.innerHTML = '';
//     animalKey.forEach((animal) => {
//         const li = document.createElement('li');
//         li.style.width = '40%';
//         li.style.backgroundColor = 'rgb(255,255,255,0.2)';
//         li.innerHTML = animal;
//         li.style.lineHeight = '40px';
//         li.style.borderBottom = '1px solid white';
//         ol.append(li);
//     });
// };

// let animalKey;

// animalKey = localStorage.getItem('gyvuliai');

// if (null === animalKey) {
//     animalKey = [];
// } else {
//     animalKey = JSON.parse(animalKey);
//     console.log(animalKey);
// }

// const animalsList = document.querySelector('select');
// animalsList.style.backgroundColor = 'lightgray';
// animalsList.style.color = 'black';
// animalsList.style.border = '1px solid white';

// const animalsSvoris = document.querySelector('#svoris');
// animalsSvoris.style.backgroundColor = 'lightgray';
// animalsSvoris.style.border = '1px solid white ';
// animalsSvoris.style.width = '60px';
// animalsSvoris.style.color = 'black';

// const pridetiButton = document.querySelector('#pridetiButton');

// animalsList.addEventListener('change', (_) => {
//     pasirinktas = animalsList.value;
// });

// pridetiButton.addEventListener('click', (_) => {
//     if ('' != pasirinktas && animalsSvoris.value > 0) {
//         animalKey.push(`${pasirinktas} ${animalsSvoris.value} kg`);
//         const animalValue = JSON.stringify(animalKey);
//         localStorage.setItem('gyvuliai', animalValue);
//     }

//     renderAnimalList();
// });

// renderAnimalList();
