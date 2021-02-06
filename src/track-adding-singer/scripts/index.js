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
let createSinger = document.getElementById("create_singer");
let addingSinger = document.getElementById("adding_singer");
let addedSucccess = document.getElementById("added_success");

createSinger.onsubmit = function(evt) {
    evt.preventDefault();
    addingSinger.style.display = "none";
    addedSucccess.style.display = "block";
}