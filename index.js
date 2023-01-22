const signInEl = document.querySelector('.sign-in');
const signUpEl = document.querySelector('.sign-up');
const signInFormEl = document.querySelector('.container-sign-in');
const signUpFormEl = document.querySelector('.container-sign-up');
const closeBtnEl = document.querySelector('.close-icon');
const closeBtnsEl = document.querySelector('.close-icons');
const containerEl = document.querySelector('.container-text');


signInEl.addEventListener('click', () => {
    containerEl.classList.add('active')
    signInFormEl.classList.remove('active')
})

signUpEl.addEventListener('click', () => {
    containerEl.classList.add('active')
    signUpFormEl.classList.remove('active')
})

closeBtnEl.addEventListener('click', () => {
    containerEl.classList.remove('active')
    signInFormEl.classList.add('active')
})

closeBtnsEl.addEventListener('click', () => {
    signUpFormEl.classList.add('active')
    containerEl.classList.remove('active')
})
