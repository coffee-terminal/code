/* Sukurti klasę Post. 
Kuriant objektą iš šios klasės, 
reikia įrašyti id savybę, pasirinktinai nuo 1 iki 100. 
Objektas turi turėti visas savybes gautas iš serverio adresu: https://jsonplaceholder.typicode.com/posts/1 (objektas su id: 1). */

class Post {
    static async duomenys(id) {
        if (id >= 1 || id <= 100) {
            this.id = id;
        } else {
            return console.log('id nera tarp 1 ir 100');
        }

        const fetchSavybes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const visosSavybes = await fetchSavybes.json();
        new Post(visosSavybes);
    }

    constructor({ id, userId, title, body }) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
        return console.log(this);
    }
}

Post.duomenys(78);
