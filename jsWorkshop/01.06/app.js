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

    getHighestGrade() {
        return this.grades.length ? Math.max(...this.grades) : null;
    }

    getLowestGrade() {
        return this.grades.length ? Math.min(...this.grades) : null;
    }

    getAverage() {
        if (this.grades.length === 0) {
            console.log('Pažymių nėra');
            return null;
        }

        let sum = 0;
        this.grades.forEach((grade) => {
            sum += grade;
        });

        return (sum / this.grades.length).toFixed(2);
    }

    assignScolarship() {
        if (this.getAverage() >= 8) {
            console.log(`${this.name} is assigned higher scolarship`);
        } else if (this.getAverage() >= 6) {
            console.log(`${this.name} is assigned regular scolarship`);
        } else {
            console.log(`The average grade is too low, no scolarship for ${this.name} this semester`);
        }
    }

    getAge() {
        // const d = new Date().getFullYear();
        // this.ageFull = d - this.birthYear;
        // return this.ageFull;
        return new Date().getFullYear() - this.birthYear;
    }

    introduce() {
        console.log(`Labas as esu ${this.name}, ir man ${this.getAge()} metu`);
    }
}

class onlineStudent extends Student {
    constructor(name, birthYear, platform) {
        super(name, birthYear); // iškviečiam Student constructor
        this.platform = platform;
    }

    getAverage() {
        return (super.getAverage() * 0.8).toFixed(2);
    }

    calculateAttendance() {}
}

let Aldona = new onlineStudent('Aldona', 2008, 'Zoom');
console.log(Aldona);
Aldona.addGrade(7);
Aldona.addGrade(9);
Aldona.addGrade(10);

Aldona.introduce();

// sukurti metodą kuris vidurki * 0,8 gražina skaičių

let Petras = new Student('Petras', 2007);
console.log(Petras);

console.log('Amzius: ' + Petras.getAge());
Petras.introduce();

console.log(Student.getStudentCount());
Petras.addGrade(7);
Petras.addGrade(9);
Petras.addGrade(10);

console.log(Petras.getHighestGrade());
console.log(Petras.getLowestGrade());

console.log(Petras.getAverage());

Petras.assignScolarship();

console.log(Aldona.getAverage());
Aldona.assignScolarship();

let mathStudents = [
    new Student('Jonas', 2008),
    new Student('Antanas', 2007),
    new onlineStudent('Emilija', 2007, 'Teams'),
];

mathStudents.forEach((studentas) => {
    studentas.addGrade(8);
    studentas.addGrade(7);
    studentas.addGrade(10);
    studentas.introduce();
    console.log(studentas.getAverage());
    studentas.assignScolarship();
});

// instanceof  - typeof

console.log(Petras instanceof onlineStudent); //false
console.log(Aldona instanceof Student); // true
