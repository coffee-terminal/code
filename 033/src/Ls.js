import { v4 as uuidv4 } from 'uuid';

class Ls {
    constructor(key) {
        this.key = key; // prisimename key
        this.readLocalStorage(); // paleidziame metoda readLocalStorage
    }

    readLocalStorage = (_) => {
        let data = localStorage.getItem(this.key);
        if (null === data) {
            this.list = [];
        } else {
            this.list = JSON.parse(data);
        }
    };

    writeLocalStorage = (_) => {
        let data = JSON.stringify(this.list);
        localStorage.setItem(this.key, data);
    };

    Store = (data) => {
        const id = uuidv4();
        const dataToStore = {
            ...data,
            id,
        };
        this.list.push(dataToStore);
        this.writeLocalStorage();
    };

    Destroy = (id) => {
        this.list = this.list.filter((item) => item.id != id);
        this.writeLocalStorage();
    };

    Update = (id, data) => {
        this.list = this.list.map((item) => (item.id == id ? { ...item, ...data, id } : item));
        this.writeLocalStorage();
    };
}

export default Ls; //iseksportuojame
