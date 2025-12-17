import { v4 as uuidv4 } from 'uuid';

console.log('CRUD');

/*
Naujo pridėjimas

Create - vaizdas
Store - veiksmas


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
const KEY = 'myFancyColorsList';

const init = (_) => {
    readLocalStorage();
    render();
    const createInput = document.querySelector('[data-create-color-input]');
    const createButton = document.querySelector('[data-create-color-button]');

    createButton.addEventListener('click', (_) => {
        const color = createInput.value;
        const dataToStore = {
            color,
        };
        Store(dataToStore);
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

const rand = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const render = (_) => {
    const listBin = document.querySelector('[data-colors-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    listBin.innerHTML = '';
    LIST.forEach((colorItem) => {
        const rowHtml = listRowTemplate.content.cloneNode(true);
        const colorSq = rowHtml.querySelector('[data-color-sq]');

        const deleteButton = rowHtml.querySelector('[data-delete-sq]');

        // colorItem.id sugeneruotas Store metode id
        // dataset.id; // i elementa prideda atributa 'data-id'
        // dataset.id = colorItem.id atributui priskiria reiksme data-id = '1326623'
        deleteButton.dataset.id = colorItem.id;
        deleteButton.addEventListener('click', (e) => {
            // e eventas
            // e.target is evento gautas paspaustas mygtuko elementas
            // e.target.dataset kreipimasis i elemento 'data-' atributus
            // e.target.dataset.id kreipimasis i atributa 'data-id;
            const id = e.target.dataset.id;
            Destroy(id);
        });

        /* EDIT */

        const editInput = rowHtml.querySelector('[data-edit-color-input]');
        const editButton = rowHtml.querySelector('[data-edit-color-button]');
        editInput.value = colorItem.color; // senu duomenu perrrasymas i edit forma
        editButton.dataset.id = colorItem.id;

        editButton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            const color = editInput.value;
            const dataToStore = {
                color,
            };
            Update(id, dataToStore);
        });

        colorSq.style.backgroundColor = colorItem.color + '70'; // + permatomumas
        colorSq.style.borderColor = colorItem.color;

        listBin.appendChild(rowHtml);
    });
};

/*
Store vykdo naujo "daikto" įrašymą į saugyklą
Turi gauti "daiktą"
Turi "daiktui" priskirt ID ir įrašyti į saugyklą
*/
const Store = (data) => {
    // const id = rand(10000000, 99999999); // netikras unikalus id

    const id = uuidv4();
    const dataToStore = {
        ...data,
        id, // ====> supaprastintintas id: id
    };
    LIST.push(dataToStore);
    writeLocalStorage();
    render();
};

/* 

//Destroy pas mus vykdo 'daikto' pasalinima is saugyklos 
//Turi gauti 'daikto' indentifikatoriu  
// Turi pasalinti daikta su nurodytu identifikatoriumi 

*/

const Destroy = (id) => {
    LIST = LIST.filter((item) => item.id != id);
    writeLocalStorage();
    render();
};

/* 
Update vykdo redaguoto 'daikto' saugojima saugykloje 
Turi gauti 'daikto' indentifikatoriu ir daikto naujas savybes
Turi persaugoti daikta su nurodytu indentifikatoriumi ir naujom savybem



 */
const Update = (id, data) => {
    LIST = LIST.map((item) => (item.id == id ? { ...item, ...data, id } : item));
    writeLocalStorage();
    render();
};

init();
