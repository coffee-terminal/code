import Ls from '../Ls';

console.log('CRUD');

let LS; // klases LS objektas (bus)

const init = (_) => {
    LS = new Ls('myFancyColorsList');
    render(LS.list);
    const createInput = document.querySelector('[data-create-color-input]');
    const createButton = document.querySelector('[data-create-color-button]');

    createButton.addEventListener('click', (_) => {
        const color = createInput.value;
        const dataToStore = {
            color,
        };
        LS.Store(dataToStore);
        render(LS.list);
    });
};
const render = (list) => {
    const listBin = document.querySelector('[data-colors-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    listBin.innerHTML = '';
    list.forEach((colorItem) => {
        const rowHtml = listRowTemplate.content.cloneNode(true);
        const colorSq = rowHtml.querySelector('[data-color-sq]');

        const deleteButton = rowHtml.querySelector('[data-delete-sq]');

        // delete
        deleteButton.dataset.id = colorItem.id;
        deleteButton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            LS.Destroy(id);
            render(LS.list);
        });

        //edit

        const editInput = rowHtml.querySelector('[data-edit-color-input]');
        const editButton = rowHtml.querySelector('[data-edit-color-button]');
        editInput.value = colorItem.color;
        editButton.dataset.id = colorItem.id;

        editButton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            const color = editInput.value;
            const dataToStore = {
                color,
            };
            LS.Update(id, dataToStore);
            render(LS.list);
        });

        colorSq.style.backgroundColor = colorItem.color + '70';
        colorSq.style.borderColor = colorItem.color;

        listBin.appendChild(rowHtml);
    });
};

init();
