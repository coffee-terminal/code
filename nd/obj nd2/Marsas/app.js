/* Sukurti klasę Marsas. 
Sukurti statinį metodą pridetiPalydovą(), 
kuris sukuria naują Marsas objektą, 
turintį dvi savybes id: rand 100000 - 999999 ir 
pavadinimas: pagal taisyklę iškvietus pirmą kartą “Deimas”, antrą kartą “Fobas”. 

Metodas grąžina Marsas objektą.

Metodą iškvietus trečią, ketvirtą ir t.t. kartus, metodas turi nekurti daugiau naujų Marsas objektų,
o grąžinti 
atsitiktine tvarka, 
vieną iš dviejų jau sukurtų Marsas objektų.
Tarkim penkis kartus iškvietus metodą, 
turime matyti tik du skirtingus objektus (žiūrim pagal id). */

// class Marsas {
//     static rand(min, max) {
//         const minCeiled = Math.ceil(min);
//         const maxFloored = Math.floor(max);
//         return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
//     }
//     static count = 0;
//     constructor() {
//         this.id = this.constructor.rand(100000, 999999);
//         this.pavadinimas = '';

//         this.constructor.count++;
//         if (this.constructor.count == 1) {
//             this.pavadinimas = 'Deimas';
//             this.constructor.Deimas = this;
//         } else if (this.constructor.count == 2) {
//             this.pavadinimas = 'Fobas';
//             this.constructor.Fobas = this;
//         } else {
//             this.pavadinimas = '';
//         }
//     }

//     static pridetiPalydovą() {
//         if (this.count < 2) {
//             return (this.NewMarsas = new Marsas());
//         } else if (this.rand(0, 1)) {
//             return this.Deimas;
//         } else {
//             return this.Fobas;
//         }
//     }
// }

// console.log(Marsas.pridetiPalydovą());
// console.log(Marsas.pridetiPalydovą());
// console.log(Marsas.pridetiPalydovą());
// console.log(Marsas.pridetiPalydovą());
// console.log(Marsas.pridetiPalydovą());
// console.log(Marsas.count);
// console.log(Marsas.Deimas);

class Marsas {
    // Statinis masyvas saugoti sukurtus palydovus
    static palydovai = [];

    static pridetiPalydova() {
        // Jei dar nėra nė vieno palydovo, sukuriame "Deimas"
        if (this.palydovai.length === 0) {
            const obj = new Marsas();
            obj.id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            obj.pavadinimas = 'Deimas';
            this.palydovai.push(obj);
            return obj;
        }
        // Jei yra vienas, sukuriame "Fobas"
        else if (this.palydovai.length === 1) {
            const obj = new Marsas();
            obj.id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            obj.pavadinimas = 'Fobas';
            this.palydovai.push(obj);
            return obj;
        }
        // Jei jau yra du, grąžiname atsitiktinai vieną iš jų
        else {
            const randomIndex = Math.floor(Math.random() * 2);
            return this.palydovai[randomIndex];
        }
    }
}
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
