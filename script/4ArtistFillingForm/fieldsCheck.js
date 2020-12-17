let redDots = document.querySelectorAll('.red-dot');
let pages = document.querySelector('.pages');
let btn = document.querySelector('.next-step');
let bottomMobile = document.querySelector('.request-bottom-mobile');
let btnMobile = bottomMobile.querySelector('.next-step');

let allFilled = function() {
    if ((nickname.value != "") && (track.value != "") && (track_url.value != "")) {
        pages.classList.add('checked');
        pages.innerHTML = '&#10004; 1 / 6';
    }
}

let notAllFilled = function() {
    if ((nickname.value == "") || (track.value == "") || (track_url.value == "")) {
        pages.classList.remove('checked');
        pages.innerHTML = '1 / 6';

    }
}

nickname.oninput = function() {
    redDots[0].style.color = 'white';
    allFilled();
};
nickname.onblur = function() {
    if (nickname.value == "") {
        redDots[0].style.color = 'red';
        notAllFilled();
    }
};
track.oninput = function() {
    redDots[1].style.color = 'white';
    allFilled();

};
track.onblur = function() {
    if (track.value == "") {
        redDots[1].style.color = 'red';
        notAllFilled();

    }
};
track_url.oninput = function() {
    redDots[2].style.color = 'white';
    allFilled();

};
track_url.onblur = function() {
    if (track_url.value == "") {
        redDots[2].style.color = 'red';
        notAllFilled();

    }
};

btn.onclick = function() {
    if (pages.classList.contains('checked')) {
        document.location.href = "artist_filling_form_step2.html";
    } else {
        alert('Заполните все поля');
    }
}
btnMobile.onclick = function() {
    if (pages.classList.contains('checked')) {
        document.location.href = "artist_filling_form_step2.html";
    } else {
        alert('Заполните все поля');
    }
}