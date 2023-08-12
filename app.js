'use strict';

const numbersBtn = document.querySelectorAll('.number-buttons'),
    clearBtn = document.getElementById('clear'),
    operatorsBtns = document.querySelectorAll('.operator'),
    equalBtn = document.getElementById('equal');


const currentDisplayNum = document.getElementById('current-number');
const previousDisplayNum = document.getElementById('previous-number');

equalBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clearCalc);

let currentNum = '';
let previousNum = '';
let operator = '';

numbersBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        numbersShow(e.target.value)
    })
})


function numbersShow(number) {
    if (previousNum !== '' && currentNum !== '' && operator === '') {
        previousNum = ''
        currentDisplayNum.textContent = currentNum;
    }
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
    calculate();
    operator = op;
    currentDisplayNum.textContent = '0';
    previousDisplayNum.textContent = previousNum + ' ' + operator + ' ';
}

// function checkOperator(check) {
//     operator = check;
//     previousDisplayNum.textContent = previousNum + ' ' + operator;
//     // currentDisplayNum.textContent = '0';
//     currentNum = '';
// }

function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === '+') {
        previousNum += currentNum;
    } else if (operator === '-') {
        previousNum -= currentNum;
    } else if (operator === '*') {
        previousNum *= currentNum;
    } else if (operator === '/') {
        previousNum /= currentNum;
    }
    previousNum = roundNumbers(previousNum);
    previousNum = previousNum.toString();
    currentDisplayNum.textContent = previousNum;
    showResult();
}


function roundNumbers(number) {
    return Math.round(number * 100000) / 100000;
}


function showResult() {
    if (previousNum.length <= 11) {
        currentDisplayNum.textContent = previousNum;
    } else {
        currentDisplayNum.textContent = previousNum.slice(0, 11) + '...'
    }

    previousDisplayNum.textContent = '';
    operator = '';
    currentNum = '';
}


function clearCalc() {
    currentNum = '';
    previousNum = '';
    operator = '';
    currentDisplayNum.textContent = '';
    previousDisplayNum.textContent = '';
}




