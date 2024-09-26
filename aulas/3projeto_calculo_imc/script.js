// variaveis
const modalCard = document.querySelector('.modal-wrapper')
const closeSVG = document.querySelector('.close')
const btn = document.querySelector('#btnCalc')
const text = document.querySelector('h2.title')
const error = document.querySelector('.error')
const result = document.querySelector('.result')

//callbacks
btn.addEventListener('click', calcIMC)
closeSVG.addEventListener('click', togglePopUp)

//funções
function calcIMC(event){
    event.preventDefault()
    
    const weight = Number(document.querySelector('#weight').value)
    const height = Number(document.querySelector('#height').value)
    
    if(weight <= 1 || height <= 0){
        error.classList.replace('off', 'on') 
    }else if(weight >= 1 || height >= 1){
        error.classList.replace('on', 'off')
        const imc = (weight / ((height / 100) ** 2)).toFixed(2)
        text.innerHTML = `Seu IMC é de: ${imc}`
        togglePopUp()
        IMClist(imc)
    }
}

function togglePopUp(){
    console.log('fechei')
    modalCard.classList.toggle('open')
}

function IMClist(imc) {

    if (imc < 18.5) {
        result.innerHTML = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        result.innerHTML = 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        result.innerHTML = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        result.innerHTML = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        result.innerHTML = 'Obesidade grau II';
    } else if (imc >= 40) {
        result.innerHTML = 'Obesidade grau III';
    }
}
