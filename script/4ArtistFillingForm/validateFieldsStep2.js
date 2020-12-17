let fio = document.getElementById('text_author');
let error = document.querySelector('.error');


fio.oninput = function() {
    for (let char of this.value) {
        if (!char.match(/[\p{L}\p{Zs}]/gu)) {
            this.classList.add('invalid');
            error.style.display = 'block';
            error.innerHTML = 'Пожалуйста, вводите только буквы и пробел.';
        } else {
            this.classList.remove('invalid');
            error.style.display = 'none';
        }
    }
};