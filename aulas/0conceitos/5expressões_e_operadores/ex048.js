// switch
    // exemplo 
// let expression = 'c'

// switch(expression){
//     case 'a':
//         console.log('a')
//         break
//     case 'b':
//         console.log('b')
//         break
//     default:  // caso não cumpriu nenhuma das opção
//         console.log('default')
//         break
// }
let n1 = 5
let n2 = 8
let operador = '%'

const calculadora = calculate(n1, operador, n2)


function calculate(number1, operator, number2){
    let result;
    switch(operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '/':
            result = number1 / number2
            break
        case 'x':
            result = number1 * number2
            break
        default:
            console.log("operador invalido, tente: + - x /")
            return
    }
    return console.log(result)
}


