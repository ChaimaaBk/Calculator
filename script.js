let inputs = document.querySelectorAll('input');
let display = document.querySelector('.display');
let reset = document.querySelector('.reset');

inputs.forEach(input =>{
    input.addEventListener('click',()=>{
        if (input === reset)
            display.value = display.value.toString().slice(-1,0);
        else
            display.value += input.value;
    })
})

