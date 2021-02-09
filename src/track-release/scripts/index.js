//переключение между табами в информации о релизе
let $tabReleaseInfo = $('#tab-release-info');
let $tabReleaseTracks = $('#tab-release-tracks');
let $tabReleaseStat = $('#tab-release-stat');
let $releaseInfo = $("#release-info");
let $releaseTracks = $("#release-tracks");
let $releaseStat = $("#release-stat");

$tabReleaseInfo.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabReleaseTracks.removeClass("tabs__tab_active");
    $tabReleaseStat.removeClass("tabs__tab_active");
    $releaseInfo.css("display", "block");
    $releaseTracks.css("display", "none");
    $releaseStat.css("display", "none");
});

$tabReleaseTracks.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabReleaseInfo.removeClass("tabs__tab_active");
    $tabReleaseStat.removeClass("tabs__tab_active");
    $releaseTracks.css("display", "flex");
    $releaseInfo.css("display", "none");
    $releaseStat.css("display", "none");
});

$tabReleaseStat.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabReleaseInfo.removeClass("tabs__tab_active");
    $tabReleaseTracks.removeClass("tabs__tab_active");
    $releaseStat.css("display", "block");
    $releaseInfo.css("display", "none");
    $releaseTracks.css("display", "none");
});

//меню релиза в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        $('.cover-and-name__ellipses').on("click", function() {
            $('.popup-release').css('display', 'block')
            $('body').css('overflow', 'hidden')
            $(".popup-release-menu").css('animation', 'translating 0.3s linear 1')
        });

        $('.popup-release').on("click", function(event) {
            e = event || window.event
            if (e.target === this) {
                $('.popup-release').css('display', 'none')
                $('body').css('overflow', 'auto')
            }
        })

        $('.popup-release__close').on("click", function() {
            $('.popup-release').css('display', 'none')
            $('body').css('overflow', 'auto')
        });

        $('#release-delete_btn-mobile').on("click", function() {
            $(".popup-release").hide()
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
    $('#release-delete_btn').on("click", function() {
        popupDeleteOverlay.css('display', 'flex')
        $('body').css('overflow', 'hidden')
        popupConfirm.css('animation', 'translating 0.3s linear 1')
    });
    $('#release-delete_btn-mobile').on("click", function() {
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