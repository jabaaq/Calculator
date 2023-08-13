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


document.addEventListener('keydown', (e) => {
    if (e.code === 'Digit1') {
        numbersShow(1)
    } else if (e.code === 'Digit2') {
        numbersShow(2)
    } else if (e.code === 'Digit3') {
        numbersShow(3)
    } else if (e.code === 'Digit4') {
        numbersShow(4)
    } else if (e.code === 'Digit5') {
        numbersShow(5)
    } else if (e.code === 'Digit6') {
        numbersShow(6)
    } else if (e.code === 'Digit7') {
        numbersShow(7);
    } else if (e.code === 'Digit8') {
        numbersShow(8);
    } else if (e.code === 'Digit9') {
        numbersShow(9)
    } else if (e.code === 'Digit0') {
        numbersShow(0)
    } else if (e.code === 'Slash') {

    }
})

const operatorKeys = {
    'Slash': '/',
    'KeyA': '+',
    'KeyS': '-',
    'KeyM': '*',
    'Equal': '='
}

document.addEventListener('keydown', (e) => {
    if (e.code in operatorKeys) {
        operatorShow(operatorKeys[e.code])
    }
})


document.addEventListener('keydown', (e) => {
    if (e.code === 'Equal') {
        showResult();
    }
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
    if (previousNum === "") {
        previousNum = currentNum;
        checkOperator(op);
    } else if (currentNum === "") {
        checkOperator(op);
    } else {
        calculate();
        operator = op;
        currentDisplayNum.textContent = "0";
        previousDisplayNum.textContent = previousNum + " " + operator;
    }
}

function checkOperator(check) {
    operator = check;
    previousDisplayNum.textContent = previousNum + ' ' + operator;
    currentDisplayNum.textContent = '0';
    currentNum = '';
}

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
        if (currentNum <= 0) {
            previousNum = 'Error'
            showResult()
            return
        }
        previousNum /= currentNum
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


function backSpace(num) {
    num.slice(0, num.length - 1)
}

