//10. Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau permatomus atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun

function randomColor() {
    return (
        '#' +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padEnd(6, '0')
    );
}
function rand2(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const bodyElement2 = document.querySelector('body');
bodyElement2.style.margin = 0;
bodyElement2.style.padding = 0;
bodyElement2.style.overflow = 'hidden';
bodyElement2.style.height = '100vh';

const A7Element = document.createElement('div');
A7Element.className = 'backGround';

bodyElement2.append(A7Element);
const divKlaseA7 = document.querySelector('.backGround');

for (let i = 0; i < 444; i++) {
    const A7Element = document.createElement('div');
    A7Element.className = 'apskritimas' + i;
    A7Element.style.position = 'absolute';

    A7Element.style.backgroundColor = randomColor();

    let randApskritimas = rand2(50, 450) + 'px';
    let randApskritimasPozRight = rand2(-10, 100) + '%';
    let randApskritimasPozTop = rand2(-10, 100) + '%';

    A7Element.style.width = randApskritimas;
    A7Element.style.height = randApskritimas;

    A7Element.style.borderRadius = '50%';
    A7Element.style.opacity = 0.5;
    A7Element.style.right = randApskritimasPozRight;
    A7Element.style.top = randApskritimasPozTop;
    divKlaseA7.append(A7Element);
}
