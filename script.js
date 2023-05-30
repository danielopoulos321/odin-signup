//Input Validity
const inputs = document.querySelectorAll('input');

inputs.forEach(function(input){
    input.addEventListener('invalid', function(event){
        event.preventDefault();
        input.classList.add('error');

    })
})