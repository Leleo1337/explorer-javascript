const button = document.querySelector('#toggle-mode')
let darkMode = true

button.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light') 

    const mode = darkMode ? 'light' : 'dark'
    event.corruentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})