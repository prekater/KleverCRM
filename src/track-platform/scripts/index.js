//меню платформы в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('#ellipses_platform').on("click", function() {
            $('.popup-platform').css('display', 'block')
            $('body').css('overflow', 'hidden')
            $(".popup-platform-menu").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-platform').on("click", function(event) {
            e = event || window.event
            if (e.target === this) {
                $('.popup-platform').css('display', 'none')
                $('body').css('overflow', 'auto')
            }
        })

        $('.popup-platform__close').on("click", function() {
            $('.popup-platform').css('display', 'none')
            $('body').css('overflow', 'auto')
        });

        $('#platform-delete_btn-mobile').on("click", function() {
            $(".popup-platform").hide()
            $(".popup-delete").css('display', 'flex')
            $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-delete__close').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $('body').css('overflow', 'auto')
        });
    }
});