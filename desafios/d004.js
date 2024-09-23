// Número Par ou Ímpar
//Escreva uma função que receba um número e retorne se ele é par ou ímpar.

const parImpar = (a) => {
    if(a % 2 === 0){
        return 'par'
    }else{
        return 'impar'
    }
    
}

console.log(parImpar(2))