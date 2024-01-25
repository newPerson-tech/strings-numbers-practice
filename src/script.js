document.addEventListener('DOMContentLoaded', onReady);

function onReady() {

    const firstInputForm = document.getElementById('first-input-form');
    const firstNameInputEl = document.getElementById('first-input');
    const secondNameInputEl = document.getElementById('second-input');
    const petNameInputEl = document.getElementById('third-input');
    const outDataFirstFormEl = document.getElementById('outDataFirstForm');

    const textFirstOutputEl = document.createElement('p');

    firstInputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputnames = [
            firstNameInputEl.value,
            secondNameInputEl.value,
            petNameInputEl.value,
        ];

        const message = `Voila, a nourishing soup of a day based on ${inputnames[0]} broth with ${inputnames[1]} added, flavoured with ${inputnames[2]} is ready for you to try`;
        textFirstOutputEl.innerHTML = message;
        outDataFirstFormEl.appendChild(textFirstOutputEl);

    });



    const secondInputForm = document.getElementById('second-input-form');
    const salaryInputEl = document.getElementById('input-number');
    const outDataSecondFormEl = document.getElementById('outDataSecondForm');
    const textSecondOutputEl = document.createElement('span');


    const salaryRecieved = salaryInputEl.value;
    const salarySplitted = 0;

    secondInputForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (typeof salaryRecieved === number) {
            salarySplitted = salaryRecieved.toString().split(''.join(" "));

        } else {
            alert('Entered input is not a number');
        }

        const messageTwo = `Thank you for sharing kindly your salary ${salaryRecieved} with us as ${salarySplitted}. Everyone is happy now! except you :)`;

        textSecondOutputEl.innerHTML = messageTwo;
        outDataSecondFormEl.appendChild(textSecondOutputEl);
    });

}