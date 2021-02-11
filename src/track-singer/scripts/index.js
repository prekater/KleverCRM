//переключение между табами в информации об артисте
let $tabSingerInfo = $('#tab-singer-info');
let $tabSingerTracks = $('#tab-singer-tracks');
let $tabSingerReleases = $('#tab-singer-releases');
let $singerInfo = $("#singer-info");
let $singerTracks = $("#singer-tracks");
let $singerReleases = $("#singer-releases");

$tabSingerInfo.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabSingerTracks.removeClass("tabs__tab_active");
    $tabSingerReleases.removeClass("tabs__tab_active");
    $singerInfo.css("display", "block");
    $singerTracks.css("display", "none");
    $singerReleases.css("display", "none");
});

$tabSingerReleases.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabSingerInfo.removeClass("tabs__tab_active");
    $tabSingerTracks.removeClass("tabs__tab_active");
    $singerReleases.css("display", "flex");
    $singerInfo.css("display", "none");
    $singerTracks.css("display", "none");
});

$tabSingerTracks.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabSingerInfo.removeClass("tabs__tab_active");
    $tabSingerReleases.removeClass("tabs__tab_active");
    $singerTracks.css("display", "flex");
    $singerInfo.css("display", "none");
    $singerReleases.css("display", "none");
});

//меню артиста в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('.cover-and-name__ellipses').on("click", function() {
            $('.popup-singer').css('display', 'block')
            $('body').css('overflow', 'hidden')
            $(".popup-singer-menu").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-singer').on("click", function(event) {
            e = event || window.event
            if (e.target === this) {
                $('.popup-singer').css('display', 'none')
                $('body').css('overflow', 'auto')
            }
        })

        $('.popup-singer__close').on("click", function() {
            $('.popup-singer').css('display', 'none')
            $('body').css('overflow', 'auto')
        });

        $('#singer-delete_btn-mobile').on("click", function() {
            console.log("dfsdf")
            $(".popup-singer").hide()
            $(".popup-delete").css('display', 'flex')
            $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-delete__close').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $('body').css('overflow', 'auto')
        });
    }
});

//подтверждение удаления артиста
$(function() {
    popupDeleteOverlay = $('.popup-delete')
    popupConfirm = $(".popup-delete-confirm")
    $('#singer-delete_btn').on("click", function() {
        popupDeleteOverlay.css('display', 'flex')
        $('body').css('overflow', 'hidden')
        popupConfirm.css('animation', 'translating 0.3s linear 1')
    });
    $('#singer-delete_btn-mobile').on("click", function() {
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