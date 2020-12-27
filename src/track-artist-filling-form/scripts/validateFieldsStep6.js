let pageStep6 = document.getElementById('step6');
let email = document.getElementById('email');
let errorEmail = document.querySelector('.error-email');
let formStep6 = document.getElementById('step6_form');

let checkEmail = function() {
    if ((email.value == null) || (email.value == "") || (email.value == undefined)) {
        return true;
    } else {
        for (let char of email.value) {
            if (!(email.value.includes('@') && email.value.includes('.'))) {
                email.classList.add('invalid');
                errorEmail.style.display = 'block';
                errorEmail.innerHTML = 'Пожалуйста, введите e-mail в формате qwe@asd.zxc';
                window.scrollTo(0, 0);
                return false;
            } else {
                return true;
            }
        }
    }

}
formStep6.onsubmit = function(evt) {
    evt.preventDefault();
    checkEmail();
    if (checkEmail()) {
        formStep6.submit();
        step6.style.display = 'none';
        finish.style.display = 'block';
    }
}
email.oninput = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        errorEmail.style.display = 'none';
    }
}