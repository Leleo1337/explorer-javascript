/*
    Solicite dois numeros, faça a soma deles 
    e apresente o resultado final ao usuario
*/

alert("iremos somar dois números")
let n1 = window.prompt("digite um numero: ")
let n2 = window.prompt("digite outro numero: ")

let soma = Number(n1) + Number(n2)
alert(`a soma desses numeros é igual a ${soma}`)