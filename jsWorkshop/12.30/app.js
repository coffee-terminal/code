console.log('OOP');

// deklaruojame klase
class car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    // metodas, tai yra veiksmasm, kurį padaro objektas
    getInfo() {
        console.log(`${this.brand}, ${this.year}`);
    }
}

// Kuriame objektą
let myFirstCar = new car('Audi', 2005);

myFirstCar.getInfo();

//Sukurti klasę kuri vadintusi bankAccount kuri turi vieną savybę balance

class bankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    addToBalance(money) {
        this.balance += money;
    }
    removeFromBalance(money) {
        if (money > this.balance) {
            console.log(`You dont have enough money in your account`);
        } else {
            this.balance -= money;
        }
    }
    balanceTotal() {
        console.log(`${this.balance} eur`);
    }
}
const acc1 = new bankAccount(5000);
acc1.addToBalance(500);
acc1.removeFromBalance(6000);
acc1.balanceTotal();

const swedAccount = new bankAccount(100);
swedAccount.balanceTotal();

swedAccount.addToBalance(50);

swedAccount.balanceTotal();

swedAccount.removeFromBalance(20);

swedAccount.balanceTotal();

swedAccount.removeFromBalance(131);
swedAccount.balanceTotal();

// sukurti klase Student. Savybes - (varda, gimimo metai) bus priskirtos obj kurimo metu
//plius sukurti savybe pazymiai, kuri bus tuscias masymas

class student {
    constructor(vardas, gimMetai) {
        this.vardas = vardas;
        this.gimMetai = gimMetai;
        this.grades = [];
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    addGradeTo1st(grade) {
        this.grades.unshift(grade);
    }
    visiPazymiai() {
        console.log('pazymiai: ' + this.grades);
    }
}
const Petras = new student('Petras', 2007);
Petras.addGrade(5);
Petras.addGrade(7);
Petras.addGradeTo1st(3);
Petras.addGrade(8);
Petras.visiPazymiai();

console.log(Petras);
