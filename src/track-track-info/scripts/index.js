//подтверждение удаления перенесено в общий скрипт 

//меню приложения в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('.cover-and-name__ellipses').on("click", function() {
            $('.popup-application').css('display', 'block')
            $('body').css('overflow', 'hidden')
            $(".popup-application-menu").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-application').on("click", function(event) {
            e = event || window.event
            if (e.target === this) {
                $('.popup-application').css('display', 'none')
                $('body').css('overflow', 'auto')
            }

        })

        $('.popup-application').on("click", function() {
            $('.popup-application').css('display', 'none')
            $('body').css('overflow', 'auto')
        });


        $('#item-delete_btn-mobile').on("click", function() {
            $(".popup-application").hide()
            $(".popup-delete").css('display', 'flex')
            $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')

        });
        $('.popup-delete__close').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $('body').css('overflow', 'auto')
        });
    }
});