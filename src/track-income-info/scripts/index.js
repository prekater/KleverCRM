//меню контракта в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('#ellipses_income').on("click", function() {
            $('.popup-income').css('display', 'block')
            $('body').css('overflow', 'hidden')
            $(".popup-income-menu").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-income').on("click", function(event) {
            e = event || window.event
            if (e.target === this) {
                $('.popup-income').css('display', 'none')
                $('body').css('overflow', 'auto')
            }
        })

        $('.popup-income__close').on("click", function() {
            $('.popup-income').css('display', 'none')
            $('body').css('overflow', 'auto')
        });

        $('#income-delete_btn-mobile').on("click", function() {
            $(".popup-income").hide()
            $(".popup-delete").css('display', 'flex')
            $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')

        });
        $('.popup-delete__close').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $('body').css('overflow', 'auto')
        });
    }
});