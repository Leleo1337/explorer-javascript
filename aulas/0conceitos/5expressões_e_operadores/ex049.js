//throw

function sayMyname(name = ''){
    if(name === ''){
        throw ("nome é obrigatorio")
    }
    console.log(name)
}



//try...catch

try{
    sayMyname('leo')
}catch(e){
    console.log(e)
}

console.log('após o try/catch')