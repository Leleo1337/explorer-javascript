/*
Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite a opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.

---
O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem:
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

/*
Dados de entrada do usuario
1. Número desejado
2. Item da lista

Variaveis
1. opção digitada
2. lista de itens

*/


// SOLUÇÃO DO PROFESSOR 

let option;
let items = []

while(option != 3){
    option = Number(prompt(`
    Olá usuário! Digite a opção desejada
        
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.`))

    if(option ==  1){
        let item = prompt("digite o nome do item")
        items.push(item)
    }
    else if(option == 2){
        if(items.length == 0){
            alert("Não existem itens cadastrados")
        }else{
            alert(items)
        }
    }else{
        alert('tchau')
    }
}

/*   MINHA SOLUÇÃO
// adicionei a opção de reiniciar o programa e de adicionar uma quantidade de itens
// eu devia ter convertido a option para um numero
// Descobri que na proxima aula o professor faz o exercicio com o switch

let items = []
let option;
let loop = true

while(loop == true){
    option = prompt(
    `Olá usuário! Digite a opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.
    4. Reiniciar o programa.`) 

    switch(option){
        case '1':
            let itensQuantity = prompt("Quantos itens quer adicionar?")
            for(let c = 0; c < itensQuantity; c++){
                let addItem = prompt(`adicione um item abaixo`) 
                items.push(addItem)   
            }
            break
        case '2':
            if(items.length == 0){
                alert("Não existem itens cadastrados")
            }else{
                alert(items)
            }
            break
        case '3':
            loop = false
            break
        case '4':
            items = []
            alert("Lista reiniciada com sucesso!")
            break
        default:
            alert("Opção invalida. Tente novamente")
    }
    
}
console.log(items)

*/