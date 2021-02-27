//меню релиза в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('#ellipses_sublabel').on("click", function() {
            $('.popup-sublabel').css('display', 'block')
            $('body').css('overflow', 'hidden')
            $(".popup-sublabel-menu").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-sublabel').on("click", function(event) {
            e = event || window.event
            if (e.target === this) {
                $('.popup-sublabel').css('display', 'none')
                $('body').css('overflow', 'auto')
            }

        })

        $('.popup-sublabel__close').on("click", function() {
            $('.popup-sublabel').css('display', 'none')
            $('body').css('overflow', 'auto')
        });


        $('#item-delete_btn-mobile').on("click", function() {
            $(".popup-sublabel").hide()
            $(".popup-delete").css('display', 'flex')
            $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')

        });
        $('.popup-delete__close').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $('body').css('overflow', 'auto')
        });
    }
});