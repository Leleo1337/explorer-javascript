export const Modal = {
    //variaveis
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.result'),
    btnClose: document.querySelector('.modal button.close'),

    //funções
    open() {
        Modal.wrapper.classList.add('open')},
    close() {
        Modal.wrapper.classList.remove('open')}
}

Modal.btnClose.onclick = () =>{
    Modal.close()
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event){
    if(event.key == 'Escape'){
        Modal.close()
    }
}