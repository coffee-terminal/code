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
console.log('------------------------------------');
class Student {
    static count = 0;
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.grades = [];
        Student.count++;
    }
    static getStudentCount() {
        return Student.count;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }

    addGradeToFirstPlace(grade) {
        this.grades.unshift(grade);
    }

    biggestGrade() {
        return Math.max(...this.grades);
    }
    lowestGrade() {
        let min = this.grades.toSorted((a, b) => a - b);
        return min[0];
        // Math.min(...this.grades);
    }

    gradesAverage() {
        // let average = 0;
        // for (let i = 0; i < this.grades.length; i++) {
        //     average += this.grades[i];
        // }
        // return average / this.grades.length;

        if (this.grades.length === 0) {
            console.log('Pažymių nėra');
        }

        let sum = 0;
        this.grades.forEach((grade) => {
            sum += grade;
        });

        return Number((sum / this.grades.length).toFixed(2));
    }

    assignscolarship() {
        //if condition su ternary
        // return this.gradesAverage() > 8
        //     ? console.log('Padidinti stipendija')
        //     : this.gradesAverage() > 6 && this.gradesAverage() < 8
        //     ? console.log('Paprasta stipendija')
        //     : this.gradesAverage() <= 6
        //     ? console.log('Nera stipendijos')
        //     : 'null';
        // }

        //mano if condition
        // if (this.gradesAverage() > 8) {
        //     return console.log('Padidinti stipendija');
        // } else if (this.gradesAverage() > 6 && this.gradesAverage() < 8) {
        //     return console.log('Paprasta stipendija');
        // } else if (this.gradesAverage() <= 6) {
        //     return console.log('Nera stipendijos');
        // }

        //destytojos
        if (this.gradesAverage() >= 8) {
            console.log(`${this.name} is assigned higher scolarship`);
        } else if (this.gradesAverage() >= 6) {
            console.log(`${this.name} is assigned regular scolarship`);
        } else {
            console.log(`The average grade is too low, no scolarship for ${this.name} this semester`);
        }
    }
}

class OnlineStudent extends Student {
    constructor(name, birth, platform) {
        super(name, birth); // iskviecia Student construktor
        this.platform = platform;
    }

    gradesAverage() {
        return (super.gradesAverage() * 0.8).toFixed(2);
    }

    calculateAtendance() {}
}

let Aldona = new OnlineStudent('Aldona', 2007, 'Zoom');
console.log(Aldona);
Aldona.addGrade(7);
Aldona.addGrade(9);
Aldona.addGrade(10);
console.log(Aldona.gradesAverage());
Aldona.assignscolarship();
//sukurti metoda kuris vidurki * 0.8

console.log(Student.getStudentCount());

let Petras = new Student('Petras', 2007);
console.log(Petras);

Petras.addGrade(7);
Petras.addGrade(9);
Petras.addGrade(10);
console.log(Petras.biggestGrade());
console.log(Petras.lowestGrade());
console.log(Petras.gradesAverage());
console.log(Petras.assignscolarship());

console.log(Student.getStudentCount());

// Petras.addGradeTo1st(3);
// Petras.visiPazymiai();
// console.log(Petras);

//Sukurti metoda kuris leis prideti pazymius
// addGrade(grade)

//Sukurti metoda kuris grazintu didziausia pazimį

//Kurti metoda assignscolarship()
// jei vidurkis 8 ir daugiau stipendija padidinta
// 6 - 8 paprasta stipendija
// jei maziau uz 6 tai jokios stipendijos
//rezultata isvesime i konsole
