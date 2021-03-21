//меню приложения в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('#ellipses_track').on("click", function() {
            $('.popup-track').css('display', 'block')
            $('body').css('overflow', 'hidden')
            $(".popup-track-menu").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-track').on("click", function(event) {
            e = event || window.event
            if (e.target === this) {
                $('.popup-track').css('display', 'none')
                $('body').css('overflow', 'auto')
            }

        })

        $('.popup-track').on("click", function() {
            $('.popup-track').css('display', 'none')
            $('body').css('overflow', 'auto')
        });


        $('#track-delete_btn-mobile').on("click", function() {
            $(".popup-track").hide()
            $(".popup-delete").css('display', 'flex')
            $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')

        });
        $('.popup-delete__close').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $('body').css('overflow', 'auto')
        });
    }
});