console.log('Labas, Apiau!');

fetch('https://jsonplaceholder.typicode.com/todos/1') // siuncia uzklausa
    .then((response) => response.json()) // laukiam tada JSON gauta rezultata
    .then((json) => console.log(json)); // kai yra JSON tada loginam

//turiu objekta

const namas = {
    kaminas: true,
    kambariai: 5,
    adresas: 'Pievos g.',
};
console.log(namas);

// Reikia perduoti per interneta, todel reikia versti i stringa(teksta)

const objektasKaipStringas = JSON.stringify(namas);

console.log(objektasKaipStringas);

//Perduodam

//Reikia vel atversti i objekta

const velNamas = JSON.parse(objektasKaipStringas);

console.log(velNamas);

const userUl = document.querySelector('#users-container');
const printUserList = (users) => {
    users.forEach((user) => {
        const li = document.createElement('li'); // tuscias li elementas
        const userName = user.name; // paimu is strukturos name
        const phrase = user.company.catchPhrase; // paimu fraze
        const id = user.id;
        const idVat = (id * 21) / 100;
        li.innerText = userName + ': ' + phrase; // i li dedu paimta name
        li.classList.add('user');
        userUl.append(li);
        const liVat = document.createElement('li');
        liVat.innerText = idVat;
        li.classList.add('livat');
        userUl.append(liVat);
    });
};
fetch('https://jsonplaceholder.typicode.com/users') // siuncia uzklausa
    .then((res) => res.json()) // laukiam tada JSON gauta rezultata
    .then((users) => {
        console.log(users);
        printUserList(users);
    }); // kai yra JSON tada loginam
