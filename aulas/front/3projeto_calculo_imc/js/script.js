import {Modal} from "./modal.js"
import {alertError} from "./alertError.js"
import { calcIMC , notNumber } from "./utils.js"

//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = (event) => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    
    const weightOrHeightIsNaN = notNumber(weight) || notNumber(height)
    if(weightOrHeightIsNaN){
        alertError.addError()
        return;
    }
    alertError.removeError()

    const result = calcIMC(weight,height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `seu IMC é de ${result}`

    Modal.message.innerHTML = message
    Modal.open()
}