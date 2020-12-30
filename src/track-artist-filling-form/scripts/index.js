let mainStep1 = document.querySelector('main');

let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let step4 = document.getElementById('step4');
let step5 = document.getElementById('step5');
let step6 = document.getElementById('step6');
let finish = document.getElementById('finish');

let btnNextStep2 = step2.querySelector('.next');
let btnPrevStep2 = step2.querySelector('.prev');
let btnNextStep3 = step3.querySelector('.next');
let btnPrevStep3 = step3.querySelector('.prev');
let btnNextStep4 = step4.querySelector('.next');
let btnPrevStep4 = step4.querySelector('.prev');
let btnNextStep5 = step5.querySelector('.next');
let btnPrevStep5 = step5.querySelector('.prev');
let btnNextStep6 = step6.querySelector('.next');
let btnPrevStep6 = step6.querySelector('.prev');


btnPrevStep2.onclick = function() {
    step2.style.display = 'none';
    step1.style.display = 'block';
    mainStep1.style.display = 'block';
}

btnNextStep3.onclick = function() {
    step3.style.display = 'none';
    step4.style.display = 'block';
}
btnPrevStep3.onclick = function() {
    step3.style.display = 'none';
    step2.style.display = 'block';
}

btnNextStep4.onclick = function() {
    step4.style.display = 'none';
    step5.style.display = 'block';
}
btnPrevStep4.onclick = function() {
    step4.style.display = 'none';
    step3.style.display = 'block';
}

btnNextStep5.onclick = function() {
    step5.style.display = 'none';
    step6.style.display = 'block';
}
btnPrevStep5.onclick = function() {
    step5.style.display = 'none';
    step4.style.display = 'block';
}

btnPrevStep6.onclick = function() {
    step6.style.display = 'none';
    step5.style.display = 'block';
}

$(function() {
    if ($(window).width() <= 575.9) {
        p = $('.popup__overlay')
        body = $('body')
        $('.question').click(function() {
            p.css('display', 'block')
            $(body).css('overflow', 'hidden')
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

let btnStep2 = document.querySelector('.next');
let form = document.querySelector('form');

let page2Step1 = document.getElementById('step1');
let page2Step2 = document.getElementById('step2');
let page2Step3 = document.getElementById('step3');



let checkAuthor = function(field) {
    if ((field.value == null) || (field.value == "") || (field.value == undefined)) {
        return true;
    } else {
        for (let char of field.value) {
            if (!char.match(/[\p{L}\p{Zs}-]/gu)) {
                field.classList.add('invalid');
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
                field.classList.add('invalid');
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
                field.classList.add('invalid');
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
                field.classList.add('invalid');
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
                field.classList.add('invalid');
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
                field.classList.add('invalid');
                errorDate.style.display = 'block';
                errorDate.innerHTML = 'Пожалуйста, введите дату в формате дд.мм.гггг';


                return false;
            } else {
                return true;
            }
        }
    }




}
btnStep2.onclick = function() {
    checkAuthor(textAuthor);
    checkSinger(singer);
    checkArranger(arranger);
    checkComposer(composer);
    checkGenre(genre);
    checkDate(date);
    if (checkAuthor(textAuthor) && checkSinger(singer) && checkArranger(arranger) && checkComposer(composer) && checkGenre(genre) && checkDate(date)) {
        page2Step2.style.display = 'none';
        page2Step3.style.display = 'block';
    }
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



let $profit = $("#profit");
let $liSidebar = $(".li-sidebar");
let $liSidebarImage = $('.li-sidebar__img');
let $profitIcon = $profit.find($('.li-sidebar__img'));
let $sidebarProfit = $(".li-sidebar_profit");
let $expandProfitImg = $profit.find(".li-sidebar__expand").find("img");
let $settings = $("#settings");
let $settingsIcon = $settings.find($('.li-sidebar__img'));
let $sidebarSettings = $(".li-sidebar_settings");
let $expandSettingsImg = $settings.find(".li-sidebar__expand").find("img");
let $sidebar = $(".sidebar");
let $sidebarCollapsed = $("#sidebar-collapsed");
let $sidebarExpanded = $("#sidebar-expanded");
let $sidebarExpandedHeader = $("#sidebar-expanded").find($(".header"));
let $arrowToExpand = $sidebarCollapsed.find($(".sidebar_to-expand"));
let $arrowToCollapse = $sidebarExpanded.find($(".sidebar_to-collapse"));
let $mainBlock = $(".main-block");
let $searchForm = $('.search-form');
let $tabProfileSettings = $('#tab-profile-settings');
let $tabChangePassword = $('#tab-change-password');
let $formProfileSettings = $("#profile-settings");
let $formChangePassword = $("#change-password");
let $hamburger = $("#hamburger");
let $bodyOverlay = $(".body__overlay");
let $body = $('body');
$tabProfileSettings.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabChangePassword.removeClass("tabs__tab_active");
    $formProfileSettings.css("display", "flex");
    $formChangePassword.css("display", "none");
});

$tabChangePassword.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabProfileSettings.removeClass("tabs__tab_active");
    $formProfileSettings.css("display", "none");
    $formChangePassword.css("display", "flex");
});


let inactivateProfitItem = function() {
    $profit.removeClass('li-sidebar_active');
    $sidebarProfit.css("display", "none");
    $expandProfitImg.attr("src", "./images/arrow_down.svg");
    $profitIcon.attr("src", "./images/sales.svg");
}
let inactivateSettingsItem = function() {
    $settings.removeClass('li-sidebar_active');
    $sidebarSettings.css("display", "none");
    $settingsIcon.attr("src", "./images/settings.svg");
    $expandSettingsImg.attr("src", "./images/arrow_down.svg");
}
let activateProfitItem = function() {
    $sidebarProfit.css("display", "flex");
    $profit.addClass('li-sidebar_active');
    $profitIcon.attr("src", "./images/sales_black.svg");
    $expandProfitImg.attr("src", "./images/arrow_up.svg");
}
let activateSettingsItem = function() {
    $sidebarSettings.css("display", "flex");
    $settings.addClass('li-sidebar_active');
    $settingsIcon.attr("src", "./images/settings_black.svg");
    $expandSettingsImg.attr("src", "./images/arrow_up.svg");
}

$liSidebar.hover(
    function() {
        $(this).find($liSidebarImage).addClass("li-sidebar__img_active");
    },

    function() {
        $(this).find($liSidebarImage).removeClass("li-sidebar__img_active");
    }
);
$profit.on("click", function() {
    if ($(this).hasClass('li-sidebar_active')) {
        inactivateProfitItem();
    } else {
        activateProfitItem();
    }

});
$settings.on("click", function() {
    if ($(this).hasClass('li-sidebar_active')) {
        inactivateSettingsItem();
    } else {
        activateSettingsItem();
    }
});

$(function() {
    if ($(window).width() >= 992) {
        $arrowToExpand.on("click", function() {
            $sidebarExpanded.css("left", "0");
            $sidebarCollapsed.css("left", "-70px");
            $mainBlock.css("padding-left", "226px");
            $searchForm.css("margin-left", "232px");
        });
        $arrowToCollapse.on("click", function() {
            $sidebarExpanded.css("left", "-250px");
            $sidebarCollapsed.css("left", "0");

            $mainBlock.css("padding-left", "70px");
            $searchForm.css("margin-left", "76px");
            inactivateProfitItem();
            inactivateSettingsItem();
        });
    }
});
$(function() {
    if ($(window).width() < 992) {
        $hamburger.on("click", function() {
            $sidebarExpanded.css("left", "0");
            $bodyOverlay.css('display', 'block');
            $body.css('overflow', 'hidden');

        });
        $bodyOverlay.on("click", function(event) {
            e = event || window.event;
            if (e.target == this) {
                $sidebarExpanded.css("left", "-600px");
                $bodyOverlay.css('display', 'none');
                $body.css('overflow', 'auto');
                inactivateProfitItem();
                inactivateSettingsItem();
            }
        });
        $arrowToCollapse.on("click", function() {
            $sidebarExpanded.css("left", "-600px");
            $bodyOverlay.css('display', 'none');
            $body.css('overflow', 'auto');
            inactivateProfitItem();
            inactivateSettingsItem();
        });
    }
});