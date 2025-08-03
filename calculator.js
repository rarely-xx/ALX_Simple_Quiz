// Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Error: Division by zero';
    }
    return num1 / num2;
}

// Get input values and parse them
function getInputs() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return { num1, num2 };
}

// Display result
function display(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners
document.getElementById('add').addEventListener('click', () => {
    const { num1, num2 } = getInputs();
    display(add(num1, num2));
});

document.getElementById('subtract').addEventListener('click', () => {
    const { num1, num2 } = getInputs();
    display(subtract(num1, num2));
});

document.getElementById('multiply').addEventListener('click', () => {
    const { num1, num2 } = getInputs();
    display(multiply(num1, num2));
});

document.getElementById('divide').addEventListener('click', () => {
    const { num1, num2 } = getInputs();
    display(divide(num1, num2));
});
