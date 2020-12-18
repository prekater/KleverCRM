let textAuthor = document.getElementById('text_author');
let errorAuthor = document.querySelector('.error-author');

let singer = document.getElementById('singer');
let errorSinger = document.querySelector('.error-singer');

let arranger = document.getElementById('arranger');
let errorArranger = document.querySelector('.error-arranger');

let composer = document.getElementById('composer');
let errorComposer = document.querySelector('.error-composer');

let genre = document.getElementById('genre');
let errorGenre = document.querySelector('.error-genre');

let date = document.getElementById('date');
let errorDate = document.querySelector('.error-date');

let btn = document.querySelector('.next');
let form = document.querySelector('form');

let checkAuthor = function(field) {
    for (let char of field.value) {
        if (!char.match(/[\p{L}\p{Zs}-]/gu)) {
            field.classList.add('invalid');
            errorAuthor.style.display = 'block';
            errorAuthor.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис.';
        }
    }
}
let checkSinger = function(field) {
    for (let char of field.value) {
        if (!char.match(/[\p{L}\p{Zs}-]/gu)) {
            field.classList.add('invalid');
            errorSinger.style.display = 'block';
            errorSinger.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис.';
        }
    }
}

let checkArranger = function(field) {
    for (let char of field.value) {
        if (!char.match(/[\p{L}\p{Zs}-]/gu)) {
            field.classList.add('invalid');
            errorArranger.style.display = 'block';
            errorArranger.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис.';
        }
    }
}

let checkComposer = function(field) {
    for (let char of field.value) {
        if (!char.match(/[\p{L}\p{Zs}-]/gu)) {
            field.classList.add('invalid');
            errorComposer.style.display = 'block';
            errorComposer.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис.';
        }
    }
}
let checkGenre = function(field) {
    for (let char of field.value) {
        if (!char.match(/[\p{L}\p{Zs}\u{27}-]/gu)) {
            field.classList.add('invalid');
            errorGenre.style.display = 'block';
            errorGenre.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис, апостроф.';
        }
    }
}
let checkDate = function(field) {
    let regexp = /\d\d.\d\d.\d\d\d\d/;
    if (!regexp.test(field.value) && field.value != "") {
        field.classList.add('invalid');
        errorDate.style.display = 'block';
        errorDate.innerHTML = 'Пожалуйста, вводите дату в формате дд.мм.гггг.';
    }
}
btn.onclick = function() {
    checkAuthor(textAuthor);
    checkSinger(singer);
    checkArranger(arranger);
    checkComposer(composer);
    checkGenre(genre);
    checkDate(date);
}
textAuthor.oninput = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        errorAuthor.style.display = 'none';
    }
}
singer.oninput = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        errorSinger.style.display = 'none';
    }
}
arranger.oninput = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        errorArranger.style.display = 'none';
    }
}
composer.oninput = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        errorComposer.style.display = 'none';
    }
}
genre.oninput = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        errorGenre.style.display = 'none';
    }
}
date.oninput = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        errorDate.style.display = 'none';
    }
}