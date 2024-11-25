/*
    capture 10 itens para compor uma lista de supermercado

    após capturar os 10 itens, imprima-os, separando por virgula
*/

let items = []             

for(let i = 0; i <= 10; i++){
    let itemName = prompt("digite o item " + (i + 1))
    
    items[i] = itemName
}
alert(items)
