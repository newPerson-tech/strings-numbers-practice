
const firstInputForm = document.getElementById('first-input-form');
const firsInputEl = document.getElementById('first-input');
const secondInputEl = document.getElementById('second-input');
const thirdInputEl = document.getElementById('third-input');
const outDataFirstFormEl = document.getElementById('outDataFirstForm');

const textFirstOutputEl = document.createElement('p');

firstInputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const values = [
        firsInputEl.value,
        secondInputEl.value,
        thirdInputEl.value,
    ];

    const message = `Voila, a nourishing soup of a day based on ${values[0]} broth with ${values[1]} added, flavoured with ${values[2]} is ready for you to try`;
    textFirstOutputEl.innerHTML = message;
    outDataFirstFormEl.appendChild(textFirstOutputEl);

});


const outDataSecondFormEl = document.getElementById('outDataSecondForm');

function splitNumber() {
    const userInput = document.getElementById('numberInput').value;

    if (isNaN(userInput) || (userInput.length !== 5)) {
        alert('Please enter a valid 5-digit number');
    } else {
        const digitsArray = userInput.split(' ');
        console.log(digitsArray);

        document.getElementById('outDataSecondForm').innerHTML = "Splitted numbers are: " + digitsArray;
    }


}
