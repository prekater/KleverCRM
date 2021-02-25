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


        $('#sublabel-delete_btn-mobile').on("click", function() {
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

//подтверждение удаления релиза 
$(function() {

    popupDeleteOverlay = $('.popup-delete')
    popupConfirm = $(".popup-delete-confirm")
    $('#sublabel-delete_btn').on("click", function() {
        popupDeleteOverlay.css('display', 'flex')
        $('body').css('overflow', 'hidden')
        popupConfirm.css('animation', 'translating 0.3s linear 1')
    });
    $('#sublabel-delete_btn-mobile').on("click", function() {
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