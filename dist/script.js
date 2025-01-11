"use strict";
const display = document.getElementById('display');
function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        const result = Function(`"use strict"; return (${display.value})`)();
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Err";
    }
}
window.appendToDisplay = appendToDisplay;
window.clearDisplay = clearDisplay;
window.calculate = calculate;
