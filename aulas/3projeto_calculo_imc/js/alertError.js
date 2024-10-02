export const alertError = {
    element: document.querySelector('.error'),

    addError(){
        this.element.classList.add('open')
    },
    removeError(){
        this.element.classList.remove('open')
    }
}
