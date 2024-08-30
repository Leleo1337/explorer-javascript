// if ... else

let temperature = 38
let highTemperature = temperature >= 38
let mediumTemperature = temperature > 37.5 && temperature < 38

if(highTemperature){
    console.log('febre alta')
}else if(mediumTemperature){
    console.log('febre moderada')
}else{
    console.log('saudavel')
}