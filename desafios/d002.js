/*

Crie uma função chamada alphabet(a) que receba um número como argumento. 
A função deve retornar um array contendo as primeiras letras do alfabeto, de acordo com o número fornecido. 
Por exemplo, se a for 5, a função deve retornar as cinco primeiras letras do alfabeto: ['A', 'B', 'C', 'D', 'E']. 
Caso o número seja menor que 1 ou maior que 26, a função deve imprimir algum aviso.

*/
const alphabet = (a) =>{
    let shortAlphabet = []
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let stop = a - 1

    if(stop < 0 || stop > 25){
        console.log('pod n')
        return
    }
    for(let letra = 0; letra <= stop; letra++){
        shortAlphabet[letra] = alphabet[letra]
    }
    console.log(shortAlphabet)
}

alphabet(5)

