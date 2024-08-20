/*
    function() constructor

    *expressão new
    *criar um novo objeto 
    *this keyboard
 */



// let date = new Date()
// let hour = date.getHours()
// let minutes = date.getMinutes()
// let seconds = date.getSeconds()
// console.log(hour,minutes,seconds)

function person(name){
    this.name = name
    this.walk = function(){
        return this.name + ' está andando...'
    }
}
const leo = new person("leo")
const denji = new person("denji")

console.log(leo.name)
console.log(denji.walk())