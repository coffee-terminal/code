const month = document.querySelector('.month');
const weekday = document.querySelector('.weekday');
const dayNumber = document.querySelector('.dayNumber');
const year = document.querySelector('.year');

const currentDate = new Date();
console.log(currentDate.getMonth());

const allMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

month.innerText = allMonth[currentDate.getMonth()];

const allWeekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
weekday.innerText = allWeekday[currentDate.getDay()];

year.innerText = currentDate.getFullYear();
dayNumber.innerText = currentDate.getDate();
