//меню платформы в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('.cover-and-name__ellipses').on("click", function() {
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

//подтверждение удаления платформы
$(function() {
    popupDeleteOverlay = $('.popup-delete')
    popupConfirm = $(".popup-delete-confirm")
    $('#platform-delete_btn').on("click", function() {
        popupDeleteOverlay.css('display', 'flex')
        $('body').css('overflow', 'hidden')
        popupConfirm.css('animation', 'translating 0.3s linear 1')
    });
    $('#platform-delete_btn-mobile').on("click", function() {
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