

let prev_num = null;
let current_num = null;
let operator = null;
let result = null;

document.addEventListener('DOMContentLoaded', () => {
    enterNumber();
    clearDisplay();
});

function enterNumber() {

    const buttons = document.querySelectorAll('#buttons > button');
    const display = document.getElementById('display');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            switch (button.textContent) {
            case 'C':
                clearDisplay();
                break;
            case 'DEL':
                display.value = display.value.slice(0, -1); // Remove the last character from the display
                break;
            case '-': case '+': case '*': case '/':
                // Handle operator input
                if (display.value !== ''){
                    prev_num = parseFloat(display.value);
                    operator = button.textContent;
                    display.value = ''; // clear the display for the next number
                }
                break;
            case '=':
                result = calculateResult(prev_num, parseFloat(display.value), operator);
                if (result !== null) {
                    display.value = result; // display the result
                    prev_num = result; // store the result for further calculations
                } else {
                    display.value = 'Error'; // handle invalid operation
                }
                //operator = null; // reset operator after calculation
                break;
            default:
                display.value += button.textContent; // string concatenation to add the number
                break;
            }
        });   
    });
}


function calculateResult(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null; // invalid operator
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // clear the display
}


