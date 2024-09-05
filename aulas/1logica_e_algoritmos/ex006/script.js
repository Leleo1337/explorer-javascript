/*
    ** Jogo da adivinhação **

    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie um lógica para gerar um número aleatório
    e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adivinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
let xAttempt = 1
const randomNumber = Math.round(Math.random() * 10)

while(Number(result) != randomNumber){
    result = prompt('Erro, tente novamente')
    xAttempt++
}

alert(`Parabéns! Você adivinhou o número em ${xAttempt} tentativas`)


/*  Parte que fiz sozinho ( abaixo )

let randomNumber = (Math.random() * 10).toFixed(0)
let acertou = false
let tentativas = 1

while(acertou == false){
    let message = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
    if(randomNumber == message){
        acertou = true
        alert(`Parabéns! Você adivinhou o número em ${tentativas} tentativas `)
    }else if(!acertou){
        alert("Erro, tente novamente")
    }
    tentativas++
}

console.log(randomNumber)

*/