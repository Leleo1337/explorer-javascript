//for in 

let person = {
    name: 'john',
    age: 18,
    weight: 78.5,
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}