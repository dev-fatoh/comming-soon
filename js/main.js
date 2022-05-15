const form = document.querySelector ('form')
const email = document.getElementById('email');
const errorIcon = document.querySelector('.error-icon')
const errorMsg = document.querySelector('.inval-msg')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    if (/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/.test(email.value.trim())) {
        email.style.borderColor="green"
    } else {
        errorIcon.classList.add('show')
        errorMsg.innerText = "please provide a valid email"
        email.style.borderColor="red"
    }

})
email.addEventListener('input', function() {
    if (email.value == "") {
        errorIcon.classList.remove('show')
        errorMsg.innerText = ""
        email.style.borderColor="var(--primary-Desaturated-Red)"

    }
})