const display = document.getElementById('display') as HTMLInputElement;

function appendToDisplay(input: string): void {
    display.value += input;
}

function clearDisplay(): void {
    display.value = '';
}

function calculate(): void {
    try {
        const result = Function(`"use strict"; return (${display.value})`)();
        display.value = result.toString();
    } catch (error) {
        display.value = "Err";
    }
}

(window as any).appendToDisplay = appendToDisplay;
(window as any).clearDisplay = clearDisplay;
(window as any).calculate = calculate;
