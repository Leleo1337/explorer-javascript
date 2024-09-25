// variaveis
const modalCard = document.querySelector('.modal-wrapper')
const closeSVG = document.querySelector('.close')
const btn = document.querySelector('#btnCalc')
const text = document.querySelector('h2.title')

//callbacks
btn.addEventListener('click', calcIMC)
closeSVG.addEventListener('click', togglePopUp)

//funções

function calcIMC(event){
    event.preventDefault()
    
    const weight = Number(document.querySelector('#weight').value)
    const height = Number(document.querySelector('#height').value)
    
    if(weight <= 0 || height <= 0){
        alert('[ERRO] Insira valores validos')
        return
    }
    const imc = (weight / ((height / 100) ** 2)).toFixed(2)
    text.innerHTML = `Seu IMC é de: ${imc}`
    togglePopUp()
    
}

function togglePopUp(){
    console.log('fechei')
    modalCard.classList.toggle('open')
}