document.addEventListener('DOMContentLoaded', onReady);

function onReady() {
    const formInputDataEl = document.getElementById('main-input-form');
    const firstNameInputEl = document.getElementById('first-input');
    const secondnameInputEl = document.getElementById('second-input');
    const petnameInputEl = document.getElementById('third-input');
    const outDataTextEl = document.getElementById('output-input');

    const textOutputEl = document.createElement('p');
    formInputDataEl.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputnames = [
            firstNameInputEl.value,
            secondnameInputEl.value,
            petnameInputEl.value,
        ];

        const message = `Voila, a nourishing soup of a day based on ${inputnames[0]} broth with ${inputnames[1]} added, flavoured with ${inputnames[2]} is ready for you to try`;
        textOutputEl.innerHTML = message;
        outDataTextEl.appendChild(textOutputEl);

    })

    const secondInputForm = document.getElementById('number-input');
    const yourSalary = document.getElementById('user-input-number');
    const outputNumbersEl = document.getElementById('output-number-splitted');

    const textSecondOutput = document.createElement('span');
    let ourSalary = 0;

    secondInputForm.addEventListener('submit', getNumberSplitted);

    function getNumberSplitted(number) {
        if (typeof (yourSalary) === number) {
            yourSalary.value;
            ourSalary = numberRecieved.toString().split(''.join(" "));
        } else {
            alert('Entered input is not a number');
        }
    }


    const messageTwo = `Thank you for sharing kindly your salary ${yourSalary} with us as ${ourSalary}. Everyone is happy now! except you :)`;
    textSecondOutput.innerHTML = messageTwo;
    outputNumbersEl.appendChild(textSecondOutput);
}