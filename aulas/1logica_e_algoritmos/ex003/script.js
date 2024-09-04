/*
    Capturar 2 numeros 
    e fazer as operações matematicas
    de soma, subtração, multiplicação
    divisão e resto da divisão

    E para cada operação, mostrar um alerta
    com o resultado
*/

let firstNumber = prompt("digite o primeiro numero: ")
let secondNumber = prompt("digite o segundo numero: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const subtraction = firstNumber - secondNumber
const multiplication = firstNumber * secondNumber
const divison = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert(`soma: ${sum}` )
alert(`subtração ${subtraction}`)
alert(`multiplicação: ${multiplication}`)
alert(`divisão: ${divison}`)
alert(`resto: ${rest}`)
