/*
    var funciona global   
    let e const são locais e só funcionam no escopo onde foi criada
    
    */

let y = 1
{   
    y = 0
    console.log('> existe y antes?', y)
    //retorna 0 nos dois  


    // let y = 0
    // console.log('> existe y antes?', y)
    // retorna 0 no do escopo, e o de baixo 1
}

console.log('existe y depois do bloco ?', y)
