'use strict';

const numbersBtn = document.querySelectorAll('.number-buttons'),
    clearBtn = document.getElementById('clear'),
    operatorsBtns = document.querySelectorAll('.operator'),
    equalBtn = document.getElementById('equal');


const currentDisplayNum = document.getElementById('current-number');
const previousDisplayNum = document.getElementById('previous-number');

equalBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clearCalculator);

let currentNum = '';
let perviousNum = '';
let operator = '';

numbersBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        numbersShow(e.target.value)
    })
})


function numbersShow(number) {
    if (currentNum.length <= 17) {
        currentNum += number;
        currentDisplayNum.textContent = currentNum;
    }
}

operatorsBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        operatorShow(e.target.value)
    })
})


function operatorShow(op) {
    operator = op;
    perviousNum = currentNum;
    previousDisplayNum.textContent = perviousNum + ' ' + operator;
    currentNum = '';
    currentDisplayNum.textContent = '';
}

function calculate() {
    perviousNum = Number(perviousNum);
    currentNum = Number(currentNum);

    if (operator === '+') {
        perviousNum += currentNum;
    } else if (operator === '-') {
        perviousNum -= currentNum;
    } else if (operator === '*') {
        perviousNum *= currentNum;
    } else if (operator === '/') {
        perviousNum /= currentNum;
    }
    showResult();

}

function showResult() {
    perviousNum = perviousNum.toString();
    perviousNum = Math.round(perviousNum * 10000000) / 10000000;
    previousDisplayNum.textContent = '';
    currentDisplayNum.textContent = perviousNum;
}


function clearCalculator() {
    currentNum = '';
    perviousNum = '';
    operator = '';
    currentDisplayNum.textContent = '';
    previousDisplayNum.textContent = '';
}





// function clearDisplay() {
//     clearBtn.addEventListener('click', () => {
//         answerDisplay.textContent = '';
//     })
// }

// clearDisplay();




// function add(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }



// function operate(num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             return add(num1, num2)
//         case '-':
//             return sub(num1, num2)
//         case '*':
//             return multiply(num1, num2)
//         case '/':
//             return divide(num1, num2);
//     }
// }




