// operador condicionar (ternario)

// dependendo da condição, nós receberemos valores diferentes

//condição então valor 1 se não valor 2
// condition ? value1 : value2

//exemplos

 let pao = true
 let queijo = true
 
 const niceBreakfast = pao && queijo? 'Café top': 'Café ruim'

 console.log(niceBreakfast)

 //maior de 18

 let idade = 17

 const permitidaEntrada = idade < 18 ? 'acesso negado': 'acesso permitido'

 console.log(permitidaEntrada)
