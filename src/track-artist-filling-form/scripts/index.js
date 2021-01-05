// //переключение между шагами формы
//проверка заполненности  и праивльности полей первого экрана


let stepNumber = 1;
let toNextStep = document.querySelector(".step-bottom_next");
let toPrevStep = document.querySelector(".step-bottom_prev");
let stepsList = document.querySelectorAll(".steps__step");
let progressBarPassed = document.querySelector(".progress-bar__passed");
let infoForArtist = document.querySelector(".info-for-artist");
let artistForm = document.getElementById("artist_form");
let succes = document.getElementById("success");
let stepNamesTablet = ["Шаг 2 - Дополнительная информация", "Шаг 3 - Текст песни", "Шаг 4 - Развернутое описание", "Шаг 5 - Социальные сети", "Шаг 6 - Персональная информация"];
let stepNamesMobile = ["2. Дополнительная инф.", "3. Текст песни", "4. Развернутое описание", "5. Социальные сети", "6. Персональная инф."];
let nextStepNameTablet = document.querySelector(".next-step_tablet");
let nextStepNameMobile = document.querySelector(".next-step_mobile");
let stepsMobilePages = document.querySelector(".steps-mobile__pages");
let bottomPages = document.querySelector(".pages");
let submitButton = document.getElementById("btn_submit");
let redDots = document.querySelectorAll('.field__red-dot');
let pages = document.querySelector('.pages');
let pageSuccessImg = document.querySelector(".pages__success");
let inputs = document.querySelectorAll('input');
let errorNickname = document.querySelector('.field__error-nickname');
let errorTrack = document.querySelector('.field__error-track');
let errorTrackUrl = document.querySelector('.field__error-track-url');
let nickname = document.getElementById('nickname');
let track = document.getElementById('track');
let trackUrl = document.getElementById('track_url');

let allFilled = function() {
    if ((nickname.value != "") && (track.value != "") && (trackUrl.value != "")) {
        stepsList[0].style.color = '$green';
        pages.classList.add('pages_checked');
        pageSuccessImg.style.display = "block";
    }
}

let notAllFilled = function() {
    if ((nickname.value == "") || (track.value == "") || (trackUrl.value == "")) {
        stepsList[0].style.color = '$black';

        pages.classList.remove('pages_checked');
        pageSuccessImg.style.display = "none";
    }
}


let showNext = function() {
    pages.classList.remove('pages_checked');

    window.scrollTo(0, 0);
    let formId = `step${stepNumber}_form`;
    let prevFormId = `step${stepNumber - 1}_form`;
    switch (stepNumber) {
        case 1:
            infoForArtist.style.display = "flex";
            toPrevStep.style.display = "none";
            break;
        case 2:
            infoForArtist.style.display = "none";
            toPrevStep.style.display = "flex";
            break;

        case 6:
            toNextStep.style.display = "none";
            submitButton.style.display = "block";
            break;
    }
    document.getElementById(prevFormId).style.display = "none";
    document.getElementById(formId).style.display = "block";
    for (let i = 0; i < stepNumber; i++) {
        stepsList[i].classList.add("steps__step_passed");
        if (i == (stepNumber - 1)) {
            stepsList[i].classList.remove("steps__step_passed");
        }
    }
    let prevPrevStepNumber = stepNumber - 2;
    let prevStepNumber = stepNumber - 1;
    stepsList[prevStepNumber].classList.add("steps__step_active");
    stepsList[prevPrevStepNumber].classList.remove("steps__step_active");
    progressBarPassed.style.width = 100 / 6 * stepNumber + "%";
    let index = stepNumber - 1;
    nextStepNameTablet.textContent = stepNamesTablet[index];
    nextStepNameMobile.textContent = stepNamesMobile[index];
    stepsMobilePages.textContent = `${stepNumber} / 6`;
    bottomPages.textContent = `${stepNumber} / 6`;


}
let showPrev = function() {
    window.scrollTo(0, 0);
    let formId = `step${stepNumber+1}_form`;
    let prevFormId = `step${stepNumber}_form`;
    infoForArtist.style.display = "none";
    document.getElementById(prevFormId).style.display = "block";
    document.getElementById(formId).style.display = "none";
    switch (stepNumber) {
        case 1:
            infoForArtist.style.display = "flex";
            toPrevStep.style.display = "none";
            allFilled();

            break;
        case 2:
            infoForArtist.style.display = "none";
            toPrevStep.style.display = "flex";
            break;
        case 5:
            toNextStep.style.display = "flex";
            submitButton.style.display = "none";
            break;
    }
    for (let i = (stepNumber - 1); i >= 0; i--) {
        stepsList[i].classList.add("steps__step_passed");
        if (i == (stepNumber - 1)) {
            stepsList[i].classList.remove("steps__step_passed");
        }
    }
    let prevStepNumber = stepNumber - 1;
    stepsList[prevStepNumber].classList.add("steps__step_active");
    stepsList[prevStepNumber].classList.remove("steps__step_passed");
    stepsList[stepNumber].classList.remove("steps__step_active");
    progressBarPassed.style.width = 100 / 6 * stepNumber + "%";
    let index = stepNumber - 1;
    nextStepNameTablet.textContent = stepNamesTablet[index];
    nextStepNameMobile.textContent = stepNamesMobile[index];
    stepsMobilePages.textContent = `${stepNumber} / 6`;
    bottomPages.textContent = `${stepNumber} / 6`;
}




nickname.oninput = function() {
    redDots[0].style.color = 'white';
    this.classList.remove('field__input_text_invalid');
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
    this.classList.remove('field__input_text_invalid');
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
    this.classList.remove('field__input_text_invalid');
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

let checkStep1 = function() {
    if (pages.classList.contains('pages_checked')) {
        stepNumber++;
        showNext();
    } else if ((nickname.value == null) || (nickname.value == "") || (nickname == undefined)) {
        nickname.classList.add('field__input_text_invalid');
        errorNickname.style.display = 'block';
    }
    if ((track.value == null) || (track.value == "") || (track == undefined)) {
        track.classList.add('field__input_text_invalid');
        errorTrack.style.display = 'block';
    }
    if ((trackUrl.value == null) || (trackUrl.value == "") || (trackUrl == undefined)) {
        trackUrl.classList.add('field__input_text_invalid');
        errorTrackUrl.style.display = 'block';
    }
}

// //правильности заполнения шага 2

let textAuthor = document.getElementById('text_author');
let errorAuthor = document.querySelector('.field__error-author');

let singer = document.getElementById('singer');
let errorSinger = document.querySelector('.field__error-singer');

let arranger = document.getElementById('arranger');
let errorArranger = document.querySelector('.field__error-arranger');

let composer = document.getElementById('composer');
let errorComposer = document.querySelector('.field__error-composer');

let genre = document.getElementById('genre');
let errorGenre = document.querySelector('.field__error-genre');

let date = document.getElementById('date');
let errorDate = document.querySelector('.field__error-date');

let checkAuthor = function(field) {
    if ((field.value == null) || (field.value == "") || (field.value == undefined)) {
        return true;
    } else {
        for (let char of field.value) {
            if (!char.match(/[\p{L}\p{Zs}-]/gu)) {
                field.classList.add('field__input_text_invalid');
                errorAuthor.style.display = 'block';
                errorAuthor.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис.';
                return false;
            } else {
                return true;
            }
        }
    }
}
let checkSinger = function(field) {
    if ((field.value == null) || (field.value == "") || (field.value == undefined)) {
        return true;
    } else {
        for (let char of field.value) {
            if (!char.match(/[\p{L}\p{Zs}-]/gu)) {
                field.classList.add('field__input_text_invalid');
                errorSinger.style.display = 'block';
                errorSinger.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис.';
                return false;
            } else {
                return true;
            }
        }
    }
}



let checkArranger = function(field) {
    if ((field.value == null) || (field.value == "") || (field.value == undefined)) {
        return true;
    } else {
        for (let char of field.value) {
            if (!char.match(/[\p{L}\p{Zs}-]/gu)) {
                field.classList.add('field__input_text_invalid');
                errorArranger.style.display = 'block';
                errorArranger.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис.';
                return false;
            } else {
                return true;
            }
        }
    }

}

let checkComposer = function(field) {
    if ((field.value == null) || (field.value == "") || (field.value == undefined)) {
        return true;
    } else {
        for (let char of field.value) {
            if (!char.match(/[\p{L}\p{Zs}-]/gu)) {
                field.classList.add('field__input_text_invalid');
                errorComposer.style.display = 'block';
                errorComposer.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис.';
                return false;
            } else {
                return true;
            }
        }
    }

}
let checkGenre = function(field) {

    if ((field.value == null) || (field.value == "") || (field.value == undefined)) {
        return true;
    } else {
        for (let char of field.value) {
            if (!char.match(/[\p{L}\p{Zs}\u{27}-]/gu)) {
                field.classList.add('field__input_text_invalid');
                errorGenre.style.display = 'block';
                errorGenre.innerHTML = 'Пожалуйста, вводите только буквы, пробел, дефис, апостроф.';

                return false;
            } else {
                return true;
            }
        }
    }

}
let checkDate = function(field) {
    let regexp = /\d\d.\d\d.\d\d\d\d/;
    if ((field.value == null) || (field.value == "") || (field.value == undefined)) {
        return true;
    } else {
        for (let char of field.value) {
            if (!regexp.test(field.value) && field.value != "") {
                field.classList.add('field__input_text_invalid');
                errorDate.style.display = 'block';
                errorDate.innerHTML = 'Пожалуйста, введите дату в формате дд.мм.гггг';


                return false;
            } else {
                return true;
            }
        }
    }




}
let checkStep2 = function() {
    checkAuthor(textAuthor);
    checkSinger(singer);
    checkArranger(arranger);
    checkComposer(composer);
    checkGenre(genre);
    checkDate(date);
    if (checkAuthor(textAuthor) && checkSinger(singer) && checkArranger(arranger) && checkComposer(composer) && checkGenre(genre) && checkDate(date)) {
        stepNumber++;
        showNext();
    }
}
textAuthor.oninput = function() {
    if (this.classList.contains('field__input_text_invalid')) {
        this.classList.remove('field__input_text_invalid');
        errorAuthor.style.display = 'none';
    }
}
singer.oninput = function() {
    if (this.classList.contains('field__input_text_invalid')) {
        this.classList.remove('field__input_text_invalid');
        errorSinger.style.display = 'none';
    }
}
arranger.oninput = function() {
    if (this.classList.contains('field__input_text_invalid')) {
        this.classList.remove('field__input_text_invalid');
        errorArranger.style.display = 'none';
    }
}
composer.oninput = function() {
    if (this.classList.contains('field__input_text_invalid')) {
        this.classList.remove('field__input_text_invalid');
        errorComposer.style.display = 'none';
    }
}
genre.oninput = function() {
    if (this.classList.contains('field__input_text_invalid')) {
        this.classList.remove('field__input_text_invalid');
        errorGenre.style.display = 'none';
    }
}
date.oninput = function() {
    if (this.classList.contains('field__input_text_invalid')) {
        this.classList.remove('field__input_text_invalid');
        errorDate.style.display = 'none';
    }
}

toNextStep.onclick = function() {
    if (stepNumber == 1) {
        checkStep1();
    } else if (stepNumber == 2) {
        checkStep2();
    } else {
        stepNumber++;
        showNext();
    }
}
toPrevStep.onclick = function() {
        stepNumber--;
        showPrev();
    }
    // //проверка правильности имейла шаг 6

let pageStep6 = document.getElementById('step6');
let email = document.getElementById('email');
let errorEmail = document.querySelector('.field__error-email');
let formStep6 = document.getElementById('step6_form');

let checkEmail = function() {
    if ((email.value == null) || (email.value == "") || (email.value == undefined)) {
        return true;
    } else if (!(email.value.includes('@') && email.value.includes('.'))) {
        email.classList.add('field__input_text_invalid');
        errorEmail.style.display = 'block';
        errorEmail.innerHTML = 'Пожалуйста, введите e-mail в формате qwe@asd.zxc';
        window.scrollTo(0, 0);
        return false;
    } else {
        return true;
    }
}


artistForm.onsubmit = function(evt) {
    evt.preventDefault();
    checkEmail();
    if (checkEmail()) {
        //artistForm.submit();
        artistForm.style.display = 'none';
        success.style.display = 'flex';
    }
}
email.oninput = function() {
    if (this.classList.contains('field__input_text_invalid')) {
        this.classList.remove('field__input_text_invalid');
        errorEmail.style.display = 'none';
    }
}


// подсказки popup в мобилке

$(function() {
    if ($(window).width() <= 575.9) {
        p = $('.popup__overlay')
        popup = $(".popup")
        body = $('body')
        $('.field__question').click(function() {
            p.css('display', 'block')
            $(body).css('overflow', 'hidden')
            popup.css('animation', 'translating 0.3s linear 1')
            popupText = $(this).attr('tooltip')
            $('.popup__content').text(popupText)
        })
        p.click(function(event) {
            e = event || window.event
            if (e.target == this) {
                $(p).css('display', 'none')

                $(body).css('overflow', 'auto')
            }
        })
        $('.popup__close').click(function() {
            p.css('display', 'none')

            $(body).css('overflow', 'auto')
        })
    }
});



