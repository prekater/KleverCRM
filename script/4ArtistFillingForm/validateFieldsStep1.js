let redDots = document.querySelectorAll('.red-dot');
let pages = document.querySelector('.pages');
let btn = document.querySelector('.next-step');
let bottomMobile = document.querySelector('.request-bottom-mobile');
let btnMobile = bottomMobile.querySelector('.next-step');
let warning = document.querySelector('.warning');
let inputs = document.querySelectorAll('input');
let page1MainStep1 = document.querySelector('main');
let page1Step1 = document.getElementById('step1');
let page1Step2 = document.getElementById('step2');
let stepList = step1.querySelector('.steps');
let steps = stepList.querySelectorAll('li');
let errorNickname = document.querySelector('.error-nickname');
let errorTrack = document.querySelector('.error-track');
let errorTrackUrl = document.querySelector('.error-track-url');
let nickname = document.getElementById('nickname');
let track = document.getElementById('track');
let trackUrl = document.getElementById('track_url');

let allFilled = function() {
    if ((nickname.value != "") && (track.value != "") && (trackUrl.value != "")) {
        steps[0].style.color = '#21BAA8';
        pages.classList.add('checked');
        pages.innerHTML = '&#10004; 1 / 6';
    }
}

let notAllFilled = function() {
    if ((nickname.value == "") || (track.value == "") || (trackUrl.value == "")) {
        pages.classList.remove('checked');
        pages.innerHTML = '1 / 6';
    }
}



nickname.oninput = function() {
    redDots[0].style.color = 'white';
    this.classList.remove('invalid');
    errorNickname.style.display = "none";
    allFilled();
};
nickname.onblur = function() {
    if (this.value == "") {
        redDots[0].style.color = 'red';
        notAllFilled();
    }
};
track.oninput = function() {
    this.classList.remove('invalid');
    errorTrack.style.display = "none";

    redDots[1].style.color = 'white';
    allFilled();

};
track.onblur = function() {
    if (this.value == "") {
        redDots[1].style.color = 'red';
        notAllFilled();

    }
};
trackUrl.oninput = function() {
    this.classList.remove('invalid');
    errorTrackUrl.style.display = "none";

    redDots[2].style.color = 'white';
    allFilled();
};
trackUrl.onblur = function() {
    if (this.value == "") {
        redDots[2].style.color = 'red';
        notAllFilled();
    }
};

btn.onclick = function() {
    if (pages.classList.contains('checked')) {
        page1Step1.style.display = 'none';
        page1MainStep1.style.display = 'none';
        page1Step2.style.display = 'block';
    } else if ((nickname.value == null) || (nickname.value == "") || (nickname == undefined)) {
        nickname.classList.add('invalid');
        errorNickname.style.display = 'block';
    }
    if ((track.value == null) || (track.value == "") || (track == undefined)) {
        track.classList.add('invalid');
        errorTrack.style.display = 'block';
    }
    if ((trackUrl.value == null) || (trackUrl.value == "") || (trackUrl == undefined)) {
        trackUrl.classList.add('invalid');
        errorTrackUrl.style.display = 'block';

    }

}
btnMobile.onclick = function() {
    if (pages.classList.contains('checked')) {
        page1Step1.style.display = 'none';
        page1MainStep1.style.display = 'none';
        page1Step2.style.display = 'block';
    } else {
        if ((nickname.value == null) || (nickname.value == "") || (nickname == undefined)) {
            nickname.classList.add('invalid');
            errorNickname.style.display = 'block';
        }
        if ((track.value == null) || (track.value == "") || (track == undefined)) {
            track.classList.add('invalid');
            errorTrack.style.display = 'block';
        }
        if ((trackUrl.value == null) || (trackUrl.value == "") || (trackUrl == undefined)) {
            trackUrl.classList.add('invalid');
            errorTrackUrl.style.display = 'block';
        }
    }
}