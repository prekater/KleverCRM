let email = document.getElementById('email');
let error = document.querySelector('.error');
let btn = document.querySelector('button');
let form = document.querySelector('form');

let checkEmail = function() {
    for (let char of email.value) {
        if (!(email.value.includes('@') && email.value.includes('.'))) {
            email.classList.add('invalid');
            error.style.display = 'block';
            error.innerHTML = 'Пожалуйста, введите e-mail в формате qwe@asd.zxc';
            return false;
        } else {
            return true;
        }
    }
}
form.onsubmit = function(evt) {
    evt.preventDefault();
    checkEmail();
    if (checkEmail()) {
        form.submit();
    }
}
email.oninput = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error.style.display = 'none';
    }
}