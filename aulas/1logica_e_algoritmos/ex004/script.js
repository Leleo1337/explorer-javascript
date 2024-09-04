let name = prompt("Qual é o nome do aluno ?")
let n1 = prompt("Digite a primeira nota: ")
let n2 = prompt("Digite a segunda nota: ")
let n3 = prompt("Digite a terceira nota: ")

n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)

let average = (n1 + n2 + n3) / 3
let result = average > 6

if(result == true){
    alert(`Parabéns ${name}! Sua média foi de ${average.toFixed(1)}`)
}else{
    alert(`${name}, estude para sua prova de recuperação! Sua media foi de ${average.toFixed(1)}`)
}   