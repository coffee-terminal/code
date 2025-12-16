const buttonBMI = document.querySelector('button');

const calculateBMI = (_) => {
    const height = Number(document.querySelector('.height').value);
    const weight = Number(document.querySelector('.weight').value);
    let BMIresult = (weight / (height / 100) ** 2).toFixed(1);
    console.log(BMIresult);
    console.log(typeof height, typeof weight);
    const resultInput = document.querySelector('.bmi');

    resultInput.value = BMIresult;

    const weightCondition = document.querySelector('span');

    if (BMIresult < 18.5) {
        weightCondition.innerText = 'Underweight';
    } else if (BMIresult <= 24.9) {
        weightCondition.innerText = 'Healthy Weight';
    } else if (BMIresult <= 29.9) {
        weightCondition.innerText = 'Overweight';
    } else {
        weightCondition.innerText = 'Obesity';
    }
};

buttonBMI.addEventListener('click', calculateBMI);
