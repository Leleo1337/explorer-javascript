// manipulando stringns e numeros

//separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. depois disso transforme o array em um texto e onde eram os espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderScore = myArray.join("_")
console.log(myArray)
console.log(phraseWithUnderScore.toLowerCase())


// let phrase = "Eu quero viver o Amor!"
// let myArray = phrase.split(" ")
// console.log(myArray)
// console.log(phrase.replaceAll(" ", "_"))