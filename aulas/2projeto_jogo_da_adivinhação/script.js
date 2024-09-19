



const screen1 = document.getElementsByClassName('screen1')[0]
const screen2 = document.getElementsByClassName('screen2')[0]

let randomNumber = Math.floor(Math.random() * 10) + 1
let guessedAttempts = document.getElementById('guess')
let attempts = 1

function tentar(event){
    event.preventDefault()

    let attemptNumber =document.getElementById('attemptNumber').value
    if(isNaN(attemptNumber) || attemptNumber > 10 || attemptNumber < 0 || attemptNumber.length == 0){
        alert('[ERRO] Insira um numero de 0 a 10')
    }else if(attemptNumber == Number(randomNumber)){
            screen1.style.display = "none";
            screen2.style.display = "block";
            guessedAttempts.innerHTML = `Acertou em ${attempts} tentativas`
        }else{
            attempts++
        }
        console.log(attemptNumber)
}


function playAgain(){
    screen1.style.display = "block";
    screen2.style.display = "none";
    attempts = 1
    randomNumber = Math.floor(Math.random() * 10) + 1
}
