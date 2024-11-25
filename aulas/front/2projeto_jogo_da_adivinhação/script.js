//variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const text = document.querySelector('#text')
const error = document.querySelector('#error')
let randomNumber = Math.floor(Math.random() * 10) + 1
let attempts = 1

// callback
btnTry.addEventListener('click', handleTry)
btnReset.addEventListener('click', handlePlayAgain)
document.addEventListener('keydown', resetOnEnter)

// funções 
function handleTry(event){
    event.preventDefault()

    const input = document.getElementById('input').value
    if(isNaN(input) || input > 10 || input < 0 || input.length == ''){
        error.innerHTML = "[ERRO] Insira um numero entre 1 a 10"
        attempts--
    }else{
        error.innerHTML = ''
    }
    if(input == Number(randomNumber)){
            screen1.style.display = "none";
            screen2.style.display = "block";
            text.innerHTML = `Acertou em ${attempts} tentativas`
        }else{
            resetInputs()
            attempts++
        }

}

function handlePlayAgain(){
    screen1.style.display = "block"
    screen2.style.display = "none"
    attempts = 1
    randomNumber = Math.floor(Math.random() * 10) + 1
    resetInputs()
}

function resetInputs(){
    document.getElementById('input').value = ''
    document.getElementById('input').focus()
}

function resetOnEnter(e){
    if(e.key == "Enter" && screen2.style.display === 'block'){
        handlePlayAgain()
    }
}