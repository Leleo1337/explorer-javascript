const lightModeButton = document.querySelector('#toggle-mode');
const htmlTag = document.documentElement;

lightModeButton.addEventListener('click', toggleLightMode);  // Remova os parênteses

function toggleLightMode() {
    htmlTag.classList.toggle('light');  // Use 'toggle' para alternar entre adicionar/remover a classe
}
