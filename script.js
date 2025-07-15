let inputs = document.querySelectorAll('input');
let display = document.querySelector('.display');

inputs.forEach(input =>{
    input.addEventListener('click',()=>{
        
            display.value += input.value;
    })
})
