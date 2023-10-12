const inputs = document.querySelectorAll('.form-field')
const mandatory = document.querySelectorAll('.mandatory-hidden')
const btnSend = document.getElementById('send-button')
const form = document.getElementById('form')
const btnErase = document.getElementById('erase')

btnSend.addEventListener('click', (event) => {
    event.preventDefault();

    let i = 0
    const countInput = inputs.length

    inputs.forEach(function(formField) {

        if (formField.value === '') {
            formField.classList.remove('ready')
            formField.classList.add('needed')

            formField.nextElementSibling.classList.add('visible')

            
        } else{
            formField.classList.add('ready')

            formField.nextElementSibling.classList.remove('visible')
            i++
        }

        if(i === countInput) {
            form.submit()
        } else {
            return
        }
    });
});

btnErase.addEventListener('click', () => {
    const elementosDoFormulario = form.elements;

    for (let i = 0; i < elementosDoFormulario.length; i++) {
        if (elementosDoFormulario[i].type !== "button") {
            elementosDoFormulario[i].value = "";
        }
    }
})
