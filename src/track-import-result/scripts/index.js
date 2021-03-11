//подтверждение удаления контракта 
$(function() {

    popupDeleteOverlay = $('.popup-delete')
    popupConfirm = $(".popup-delete-confirm")
    $('#import-result-delete_btn').on("click", function() {
        popupDeleteOverlay.css('display', 'flex')
        $('body').css('overflow', 'hidden')
        popupConfirm.css('animation', 'translating 0.3s linear 1')
    });
    $('#import-result-delete_btn-mobile').on("click", function() {
        popupDeleteOverlay.css('display', 'flex')
        $('body').css('overflow', 'hidden')
        popupConfirm.css('animation', 'translating 0.3s linear 1')
    });
    popupDeleteOverlay.click(function(event) {
        e = event || window.event
        if (e.target === this) {
            popupDeleteOverlay.css('display', 'none')
            $('body').css('overflow', 'auto')
        }
    })

    $('.popup-delete__close').on("click", function() {
        popupDeleteOverlay.css('display', 'none')
        $('body').css('overflow', 'auto')
    });

    $('.popup-delete__button_cancel').on("click", function() {
        popupDeleteOverlay.css('display', 'none')
        $('body').css('overflow', 'auto')
    });

    $('.popup-delete__button_confirm').on("click", function() {
        console.log("Наташ, мы всё удалили");
        popupDeleteOverlay.css('display', 'none')
        $('body').css('overflow', 'auto')

    });

});


//меню приложения в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('.item-cover-and-name__ellipses').on("click", function() {
            $('.popup-import-result').css('display', 'block')
            $('body').css('overflow', 'hidden')
            $(".popup-import-result-menu").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-import-result').on("click", function(event) {
            e = event || window.event
            if (e.target === this) {
                $('.popup-import-result').css('display', 'none')
                $('body').css('overflow', 'auto')
            }

        })

        $('.popup-import-result').on("click", function() {
            $('.popup-import-result').css('display', 'none')
            $('body').css('overflow', 'auto')
        });


        $('#import-result-delete_btn-mobile').on("click", function() {
            $(".popup-import-result").hide()
            $(".popup-delete").css('display', 'flex')
            $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')

        });
        $('.popup-delete__close').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $('body').css('overflow', 'auto')
        });
    }
});