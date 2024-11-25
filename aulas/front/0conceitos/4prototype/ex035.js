// manipulando arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")

//adicionar no começo
techs.unshift("sql")  // posição 0 

//remover do fim
// techs.pop()
//remover do começo
// techs.shift()
//pegar somente alguns elementos do array
// console.log(techs.slice(1,2))

//remover 1 ou mais itens de qualquer posição do array
// techs.splice(0,1)
//encontrar a posição de um elemento no array
let index = techs.indexOf("sql")
console.log(index)

techs.splice(index, 1)  // removeu sql

console.log(techs)