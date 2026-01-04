/* Sukurti klasę Div. 
Sukūrus naują objektą iš šios klasės
 HTML’e turi atsirasti naujas <div> tagas su rand 1000 - 9999 skaičiumi viduje.
 
 Sukurti metodą spalva(color), 
 kuris keistų to <div> tago spalvą. 
 Taip pat statinį metodą visuSpalva(color), 
 kuris keistų visų <div> tagų, 
 sukurtų per klasę, spalvą. */

class Div {
    static allDiv = [];
    constructor() {
        this.newTag = document.createElement('div');
        this.newTag.innerHTML = Math.floor(Math.random() * 9000) + 1000;
        document.body.appendChild(this.newTag);
        Div.allDiv.push(this);
    }

    spalva(color) {
        this.newTag.style.backgroundColor = 'light' + color;
        this.newTag.style.color = color;
    }

    static visuSpalva(color) {
        Div.allDiv.forEach((e) => {
            e.newTag.style.backgroundColor = 'light' + color;
            e.newTag.style.color = color;
        });
    }
}

const div1 = new Div();
const div2 = new Div();
const div3 = new Div();
div1.spalva('blue');
div2.spalva('GREEN');
div3.spalva('GRAY');
// Div.visuSpalva('green');
setTimeout(() => {
    Div.visuSpalva('blue');
}, 3000);
