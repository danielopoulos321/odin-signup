//Input Validity 
const inputs = document.querySelectorAll('input');
const errorSpan = document.querySelector('span');

inputs.forEach(function(input){
    input.addEventListener('invalid', function(event){
        event.preventDefault();
        input.classList.add('error');
        errorSpan.classList.add('visible');
    })
})

//Reset Red Border on new inputs
inputs.forEach(function(input){
    input.addEventListener('input', ()=>
        input.classList.remove('error'))
    });

//Password Comparison

const password = document.getElementById('pwd');
const passwordConfirm = document.getElementById('pwd-confirm');

function passwordCheck(){
    if(password.value === passwordConfirm.value){
        password.classList.remove('error');
        passwordConfirm.classList.remove('error');
        errorSpan.classList.remove('visible');
        errorSpan.textContent = '* Please fill out the required boxes';

    } else {
        password.classList.add('error');
        passwordConfirm.classList.add('error');
        errorSpan.classList.add('visible');
        errorSpan.textContent = '* Passwords do not match'
    }
}

password.addEventListener('input', passwordCheck);
passwordConfirm.addEventListener('input', passwordCheck);