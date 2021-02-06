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
            body.css('overflow', 'hidden')
            popup.css('animation', 'translating 0.3s linear 1')
            popupText = $(this).attr('tooltip')
            $('.popup__content').text(popupText)

        });

        p.click(function(event) {
            e = event || window.event
            if (e.target === this) {
                p.css('display', 'none')
                body.css('overflow', 'auto')
            }
        })
        $('.popup__close').on("click", function() {
            p.css('display', 'none')
            body.css('overflow', 'auto')
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