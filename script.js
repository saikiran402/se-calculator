let currentInput = "";
let previousInput = "";
let operation = null;

function input(digit) {
    if (currentInput.length < 8) {
        currentInput += digit;
        updateDisplay(currentInput);
    }
}

function operate(op) {
    if (currentInput !== "") {
        if (operation !== null) {
            calculate();
        }
        previousInput = currentInput;
        currentInput = "";
        operation = op;
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch(operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    updateDisplay(String(result).substring(0, 8));
    operation = null;
    currentInput = String(result);
    previousInput = "";
}





function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

function clearAll() {

}
function clearEntry() {
 
}
function scientificOperate(op) {

}


window.onload = function() {
    updateDisplay("0");
}
