const link = document.querySelector('a');

const display = document.querySelector('.calculator input[name=display]');

let memory;

document.querySelectorAll('.digits button, .opers button')
    .forEach(btn => btn.addEventListener('click', digitOperPressed));

function digitOperPressed(e) {
    display.value += e.target.innerText;
}

document.querySelector('.result')
    .addEventListener('click', function() {
        display.value = eval(display.value);
    });

document.querySelector('.clear')
    .addEventListener('click', function() {
        display.value = '';

    });

document.querySelector('.backspace')
    .addEventListener('click', function() {
        display.value = display.value.substring(0, display.value.length - 1)
    });

document.querySelector('.memory-save')
    .addEventListener('click', function() {
        memory = display.value;

    });

document.querySelector('.memory-return')
    .addEventListener('click', function() {
        if (memory !== undefined) {
            display.value = memory;
        }

    });

document.querySelector('.memory-clear')
    .addEventListener('click', function() {
        memory = '';

    });

document.querySelector('.sqrt')
    .addEventListener('click', function() {
        const calcResult = eval(display.value)
        display.value = Math.sqrt(calcResult);

    });