const display = document.querySelector('.calculator input[name=display]')

document.querySelectorAll('.digits button, .opers button')
.forEach( button => button.addEventListener('click', pressDigitOrOper));

function pressDigitOrOper(e){
    display.value += e.target.innerText;
}

document.querySelector('.result')
.addEventListener('click', function(){
    display.value = eval(display.value);
}
)

document.querySelector('.clear-all')
.addEventListener('click', function(){
    display.value = "";
})
