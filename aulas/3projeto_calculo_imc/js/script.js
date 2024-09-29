//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {
    //variaveis
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.result'),
    btnClose: document.querySelector('.modal button.close'),

    //funções
    open() {
        Modal.wrapper.classList.add('open')},
    close() {
        Modal.wrapper.classList.remove('open')}
}

form.onsubmit = (event) => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    
    const result = imc(weight,height)
    const message = `seu IMC é de ${result}`

    Modal.open()
    Modal.message.innerHTML = message
}

Modal.btnClose.onclick = () =>{
    Modal.close()
}

function imc(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
