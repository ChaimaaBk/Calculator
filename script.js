let inputs = document.querySelectorAll('input');
let display = document.querySelector('.display');
let reset = document.querySelector('.reset');
let del = document.querySelector('.delete');

inputs.forEach(input =>{
    input.addEventListener('click',()=>{
        if (input === reset)
            display.value = display.value.toString().slice(-1,0);
        else if (input === del)
            display.value = display.value.toString().slice(0,-1);
        else
            display.value += input.value;
    })
})


