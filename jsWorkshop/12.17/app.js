const dayEl = document.querySelector('.day');
const minuteEl = document.querySelector('.minute');
const hourEl = document.querySelector('.hour');
const secondEl = document.querySelector('.second');

const newYear = new Date('January 1, 2026 00:00:00');

const countDown = (_) => {
    const now = new Date();
    const timeLeft = newYear - now;

    console.log(timeLeft);

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    console.log(parseInt(timeLeft / day));

    const d = Math.floor(timeLeft / day);
    const h = Math.floor((timeLeft % day) / hour);
    const m = Math.floor((timeLeft % hour) / min);
    const s = Math.floor((timeLeft % min) / sec);
    dayEl.innerHTML = d;
    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondEl.innerHTML = s;
    console.log(s);
    setTimeout(countDown, 1000);
    // if (timeLeft <= 1256900000) {
    //     return;
    // }
};

countDown();
