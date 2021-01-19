// плагин для  выпадающего меню 
$(document).on("ready", function() {
    $('select').niceSelect();
});

// подсказки popup в мобилке

$(function() {
    if ($(window).width() <= 575.9) {
        p = $('.popup__overlay')
        popup = $(".popup")
        body = $('body')
        $('.field__question').on("click", function() {
            p.css('display', 'block')
            $(body).css('overflow', 'hidden')
            popup.css('animation', 'translating 0.3s linear 1')
            popupText = $(this).attr('tooltip')
            $('.popup__content').text(popupText)

        });

        p.click(function(event) {
            e = event || window.event
            if (e.target === this) {
                $(p).css('display', 'none')
                $(body).css('overflow', 'auto')
            }
        })
        $('.popup__close').on("click", function() {
            p.css('display', 'none')
            $(body).css('overflow', 'auto')
        });
    }
});

//редактирование обложки 
$(function() {

    p = $('.popup-change-cover')
    popup = $(".popup-cover")
    body = $('body')
    $('.cover-change').on("click", function() {
        p.css('display', 'flex')
        $(body).css('overflow', 'hidden')
        popup.css('animation', 'translating 0.3s linear 1')
        console.log($('cover-and-name__cover').attr("src"))
            // if ($('cover-and-name__cover').attr("src") != "./images/no-cover.svg") {
            //     $('popup-cover__has-cover').css('display', 'flex')
            //     $('popup-cover__place-here').css('display', 'none')

        // } else {
        //     $('popup-cover__has-cover').css('display', 'none')
        //     $('popup-cover__place-here').css('display', 'flex')
        // }
    });

    p.click(function(event) {
        e = event || window.event
        if (e.target === this) {
            $(p).css('display', 'none')
            $(body).css('overflow', 'auto')
        }
    })
    $('.popup-cover__close').on("click", function() {
        p.css('display', 'none')
        $(body).css('overflow', 'auto')
    });

});

//меню релиза в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        p = $('.popup-release')
        popup = $(".popup-release-menu")
        body = $('body')
        $('.cover-and-name__ellipses').on("click", function() {
            p.css('display', 'block')
            $(body).css('overflow', 'hidden')
            popup.css('animation', 'translating 0.3s linear 1')
        });

        p.click(function(event) {
            e = event || window.event
            if (e.target === this) {
                $(p).css('display', 'none')
                $(body).css('overflow', 'auto')
            }
        })
        $('.popup-release__close').on("click", function() {
            p.css('display', 'none')
            $(body).css('overflow', 'auto')
        });
    }
});


//переход с кнопки Отправить на экран Успешно создан
let createRelease = document.getElementById("create_release");
let addingRelease = document.getElementById("adding_release");
let addedSucccess = document.getElementById("added_success");

createRelease.onsubmit = function(evt) {
    evt.preventDefault();
    addingRelease.style.display = "none";
    addedSucccess.style.display = "block";
}

// переход из сайдбара ф форму добавления релиза
// let sidebarAddRelease = document.getElementById("sidebar_add_release");
// sidebarAddRelease.onclick = function() {
//     addingRelease.style.display = "block";

// }


//переход ко всем релизам из сайдбара
let sidebarExpReleases = document.getElementById("sidebar_exp_releases");
let sidebarColReleases = document.getElementById("sidebar_col_releases");
let allReleases = document.getElementById("all_releases");

sidebarExpReleases.onclick = function() {
    addedSucccess.style.display = "none";
    allReleases.style.display = "block";
}

sidebarColReleases.onclick = function() {
    addedSucccess.style.display = "none";
    allReleases.style.display = "block";
}

//переход с формы добалвения релиза ко всем релизам
let toReleasesMob = document.querySelector(".to-releases");
let toReleases = document.querySelector(".form-header__to-releases");


toReleasesMob.onclick = function() {
    addingRelease.style.display = "none";
    allReleases.style.display = "block";
}

toReleases.onclick = function() {
    addingRelease.style.display = "none";
    allReleases.style.display = "block";
}

//переход к информации о релизе из названия в таблице со всеми релизами
let releaseInfo = document.getElementById("release1");
let release = document.getElementById("release");
releaseInfo.onclick = function() {
    allReleases.style.display = "none";
    release.style.display = "block";

}

//переход ко всем релизам из информации о релизе 
let toAllReleases = document.getElementById("to_all_releases");
toAllReleases.onclick = function() {
    release.style.display = "none";
    allReleases.style.display = "block";

}