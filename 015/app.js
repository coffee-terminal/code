console.log('Are you having fun learning functions?');

console.log('Top?');

if (true) {
    console.log('if');
}

// funkcijos deklaracija
function fun1() {
    console.log('Block');
}
console.log('Bottom');

fun1();
console.log('Bottom1');
fun1();
console.log('Bottom2');
fun1();

function fun2() {
    console.log('%cFancy', 'color:skyblue;letter-spacing:15px');
}

fun2();
fun2();

//Anonimine funkcija
const fun3 = function () {
    console.log('%cFancy', 'color:crimson;letter-spacing:15px');
};

fun3();
fun3();

const fun4 = function () {
    console.log('Button Clicked');
    const h2 = document.querySelector('h2');
    h2.innerText = 'Fun Fun Fun!';
};

const button1 = document.querySelector('#nr1');

//Kai click ant Button1  paleidziam fun4-
button1.addEventListener('click', fun4);

const fun5 = function () {
    console.log('%cTrue', 'color:darkgreen;font-size:25px');
};
const fun6 = function () {
    console.log('%cFalse', 'color:crimson;font-size:25px');
};

if (5 > 6) {
    fun5();
} else {
    fun6();
}
