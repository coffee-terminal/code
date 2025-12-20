// 1. per cd nukeliaujame i projekto folderi
// 2. npm init -y inicijuoja node
// 3. apsirasome kanors pakeiciame atsiradusiame package.json
// 4. pradedame irasineti bibliotekas kaip npm i uuid ar npm install laravel-mix --save-dev
// 5. sukuriame weboack mix js  sukuriame const kuris paima laravel ir poto nurodome mix js failus app js ir scss
// 6. npx mix x2 jis sugeneruoje public folderyje failus
// 7. npx mix watch  - automatiskai pasileidzia save ir sumixuoje pateikdamas su pakitimais i public Ctrl ^ C nutraukti
// 8. package json "scripts" skiltyje  "start npx mix watch", package json galimai reitu istrinti arba pakeisti type i module

// 9. galime pradeti importuoti bibliotekas kaip uuid, bei atlikti objektini programavima iportuojant exportuojant

import Ls from './Ls';

console.log('CRUD');

let LS; // siam kintamajam priskirsime importuota klase  is Ls js

const init = (_) => {
    let pasirinktas = '';
    LS = new Ls('gyvuliai'); // naujai klasei priskiriamas KEY name
    render(LS.list);
    const animalInput = document.querySelector('[data-animal-input]');
    const weightInput = document.querySelector('[data-weight-button]');
    const animalAddButton = document.querySelector('[data-add-animal-button]');
    animalInput.addEventListener('change', (_) => {
        pasirinktas = animalInput.value;
        return pasirinktas;
    });
    animalAddButton.addEventListener('click', (_) => {
        const gyvunas = animalInput.value;
        const svoris = weightInput.value;

        if ('' != pasirinktas && weightInput.value > 0) {
            console.log(pasirinktas);

            const dataToStore = {
                gyvunas,
                svoris,
            };
            LS.Store(dataToStore);
            render(LS.list);
        }
    });
};

const render = (list) => {
    const listBin = document.querySelector('[data-colors-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    listBin.innerHTML = '';
    list.forEach((animal) => {
        //create
        const rowHtml = listRowTemplate.content.cloneNode(true);
        const animalId = rowHtml.querySelector('[data-animal-id]');
        animalId.innerHTML = `${animal.gyvunas} ${animal.svoris} kg `;

        //delete
        const deleteButton = rowHtml.querySelector('[data-delete-animal]');

        deleteButton.dataset.id = animal.id;
        deleteButton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            LS.Destroy(id);
            render(LS.list);
        });

        //edit
        const editInput = rowHtml.querySelector('[data-edit-weight-input]');
        const editButton = rowHtml.querySelector('[data-edit-weight-button]');
        // editInput.value = animal.svoris; // senu duomenu perrrasymas i edit forma
        editButton.dataset.id = animal.id;

        editButton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            const svoris = editInput.value;
            const dataToStore = {
                svoris,
            };
            LS.Update(id, dataToStore);
            render(LS.list);
        });

        listBin.appendChild(rowHtml);
    });
};

init();
