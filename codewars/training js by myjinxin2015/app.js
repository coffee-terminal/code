function helloWorld() {
    let str = 'Hello World!';
    console.log(str);
}
console.log('------------------------------');
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1() {
    let a = v1,
        b = v1;
    return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
    let a = v4, //set number value to a
        b = v2; //set number value to b
    return a - b;
}

function equal3() {
    let a = v1, //set number value to a
        b = v5; //set number value to b
    return a * b;
}

function equal4() {
    let a = v4, //set number value to a
        b = v5; //set number value to b
    return a / b;
}

function equal5() {
    let a = v6, //set number value to a
        b = v3; //set number value to b
    return a % b;
}

console.log('------------------------------');
var a1 = 'A',
    a2 = 'a',
    b1 = 'B',
    b2 = 'b',
    c1 = 'C',
    c2 = 'c',
    d1 = 'D',
    d2 = 'd',
    e1 = 'E',
    e2 = 'e',
    n1 = 'N',
    n2 = 'n';
function Dad() {
    //select some variable to combine "Dad"
    return d1 + a2 + d2;
}
function Bee() {
    //select some variable to combine "Bee"
    return b1 + e2 + e2;
}
function banana() {
    //select some variable to combine "banana"
    return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
    //the answer should be "yes" or "no"
    return 'no';
}
function answer2() {
    //the answer should be "yes" or "no"
    return 'no';
}
function answer3() {
    //the answer should be "yes" or "no"
    return 'yes';
}
console.log('------------------------------');
function getLength(arr) {
    //return length of arr
    return arr.length;
}
function getFirst(arr) {
    //return the first element of arr
    return arr[0];
}
function getLast(arr) {
    //return the last element of arr[arr.lenght-1]
    return arr[arr.length - 1];
}
function pushElement(arr) {
    var el = 1;
    //push el to arr
    arr.push(el);
    return arr;
}
function popElement(arr) {
    //pop an element from arr
    arr.pop();
    return arr;
}
console.log('------------------------------');
function animal(obj) {
    return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.';
}

something = { name: 'dog', legs: 4, color: 'white' };

animal(something);
console.log('------------------------------');
const trueOrFalse = (val) => (val == false || val == undefined ? 'false' : 'true');

console.log('------------------------------');
function howManydays(month) {
    let days;
    switch (month) {
        case 2:
            days = 28;
            break;
        case 4:
            days = 30;
            break;
        case 6:
            days = 30;
            break;
        case 9:
            days = 30;
            break;
        case 11:
            days = 30;
            break;

        default:
            days = 31;
            break;
    }
    return days;
}
console.log('------------------------------');
function saleHotdogs(n) {
    if (n < 5) {
        SaleHotDogs = n * 100;
    } else if (n >= 5 && n < 10) {
        SaleHotDogs = n * 95;
    } else {
        SaleHotDogs = n * 90;
    }
    return SaleHotDogs;
}
console.log('------------------------------');
function padIt(str, n) {
    pad = '*';
    times = 1;
    while (n >= times) {
        if (times % 2 == 0) {
            str = str + pad;
        } else {
            str = pad + str;
        }
        times++;
    }
    return str;
}
console.log('------------------------------');
function pickIt(arr) {
    let odd = [],
        even = [];
    for (let i = 0; i < arr.length; i++) {
        x = arr[i];
        if (x % 2 == 0) {
            even.push(x);
        } else {
            odd.push(x);
        }
    }
    return [odd, even];
}
const array2 = [1, 2];
console.log(pickIt(array2));

console.log('------------------------------');
console.log('------------------------------');
console.log('------------------------------');
console.log('------------------------------');
console.log('------------------------------');
console.log('------------------------------');
console.log('------------------------------');
