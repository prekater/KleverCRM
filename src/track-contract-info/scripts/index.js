//меню контракта в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('#ellipses_contract').on("click", function() {
            $('.popup-contract').css('display', 'block')
            $('body').css('overflow', 'hidden')
            $(".popup-contract-menu").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-contract').on("click", function(event) {
            e = event || window.event
            if (e.target === this) {
                $('.popup-contract').css('display', 'none')
                $('body').css('overflow', 'auto')
            }
        })

        $('.popup-contract__close').on("click", function() {
            $('.popup-contract').css('display', 'none')
            $('body').css('overflow', 'auto')
        });

        $('#contract-delete_btn-mobile').on("click", function() {
            $(".popup-contract").hide()
            $(".popup-delete").css('display', 'flex')
            $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')

        });
        $('.popup-delete__close').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $('body').css('overflow', 'auto')
        });
    }
});