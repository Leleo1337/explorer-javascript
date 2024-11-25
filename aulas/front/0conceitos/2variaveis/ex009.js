/*
    *Scope
        - Escopo determina a visibilidade de alguma variavel no js 
        {

        }

    
    var é global
    isso se chama hoisting
    e também local

*/

// var x;

console.log('> existe x antes do bloco ?', x)

{
    var x = 0
}

console.log('existe x depois do bloco ?', x)