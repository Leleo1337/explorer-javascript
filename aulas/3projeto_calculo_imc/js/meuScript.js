// minha versão do codigo, antes de ver a aula tentei fazer sozinho

// variaveis
const error = document.querySelector('.error')

let weightInput = document.querySelector('#weight')
let heightInput = document.querySelector('#height')

const modalCard = document.querySelector('.modal-wrapper')
const closeSVG = document.querySelector('.close')

const btn = document.querySelector('#btnCalc')
const text = document.querySelector('h2.title')
const result = document.querySelector('.result')

//callbacks
btn.addEventListener('click', calcIMC)
closeSVG.addEventListener('click', togglePopUp)
closeSVG.addEventListener('click', resetInputs)

//funções
function showError() {
    let weight = Number(weightInput.value)
    let height = Number(heightInput.value)
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        error.classList.add('open')
        return true
    } else {
        error.classList.remove('open')
        return false
    }
}

function calcIMC(event) {
    event.preventDefault()
    if (showError()) {
        return 
    }

    let weight = Number(weightInput.value)
    let height = Number(heightInput.value)
    const imc = (weight / ((height / 100) ** 2)).toFixed(2)
    const lista = IMClist(imc)
    togglePopUp()
    text.innerHTML = `Seu IMC é de: ${imc}`
    result.innerHTML = lista
    console.log(weight, height, lista)
}

function togglePopUp(){
    modalCard.classList.toggle('open')
}

function IMClist(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        return  'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade grau II';
    } else if (imc >= 40) {
        return 'Obesidade grau III';
    }
}

function resetInputs(){
    weightInput.value = ''
    heightInput.value = ''
}