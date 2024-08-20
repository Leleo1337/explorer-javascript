// callback function

function sayMyName(callback){
    console.log('antes de executar callback')

    callback()

    console.log('depois de executar callback')
}

sayMyName(
    () => {
        console.log('estou em um callback')
    }
)