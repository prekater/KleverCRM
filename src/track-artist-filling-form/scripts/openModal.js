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