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
    $releaseTracks.css("display", "block");
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

//редактирование обложки 
$(function() {

    p = $('.popup-change-cover')
    popup = $(".popup-cover")
    body = $('body')
    $('.cover-change').on("click", function() {
        p.css('display', 'flex')
        $(body).css('overflow', 'hidden')
        popup.css('animation', 'translating 0.3s linear 1')
            //console.log($('cover-and-name__cover').has("img"))
    });

    p.click(function(event) {
        e = event || window.event
        if (e.target === this) {
            $(p).css('display', 'none')
            $(body).css('overflow', 'auto')
        }
    })
    $('.popup-cover__close').on("click", function() {
        p.css('display', 'none')
        $(body).css('overflow', 'auto')
    });

});


//загрузка файла
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
            $('.download-button').show();

            $('.image-title').html(input.files[0].name);
            $('.upload-button__text').text('Заменить обложку');
            $('.popup-cover').css({
                'display': 'grid',
                'grid-template-columns': '1fr',
                'grid-template-rows': '38px 1fr auto',
                'grid-column-gap': '0',
                'grid-row-gap': '17px'
            });
            $('.popup-cover__two-buttons').css({
                'font-size': '13px',
                'display': 'grid',
                'grid-template-columns': 'auto auto',
                'grid-template-rows': '54px',
                'grid-column-gap': '10px',
                'grid-row-gap': '0'
            });


        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.upload-button__text').text('Загрузить обложку');
    if ($(window).width() <= 575.9) {
        $('.download-button').hide();
        $('.popup-cover').css({
            'display': 'grid',
            'grid-template-columns': '1fr',
            'grid-template-rows': '38px 1fr',
            'grid-column-gap': '0',
            'grid-row-gap': '17px'
        });
        $('.popup-cover__two-buttons').css({
            'font-size': '14px',
            'display': 'grid',
            'grid-template-columns': '213px',
            'grid-template-rows': '54px',
            'grid-column-gap': '20px',
            'grid-row-gap': '0'
        });

    } else {
        $('.image-upload-wrap').show();

    }
}
$('.image-upload-wrap').on('dragover', function() {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').on('dragleave', function() {
    $('.image-upload-wrap').removeClass('image-dropping');
});

//подтверждение удаления релиза 
$(function() {

    p = $('.popup-delete')
    popup = $(".popup-delete-confirm")
    body = $('body')
    $('#release-delete_btn').on("click", function() {
        p.css('display', 'flex')
        $(body).css('overflow', 'hidden')
        popup.css('animation', 'translating 0.3s linear 1')
    });
    $('#release-delete_btn-mobile').on("click", function() {
        p.css('display', 'flex')
        $(body).css('overflow', 'hidden')
        popup.css('animation', 'translating 0.3s linear 1')
    });
    p.click(function(event) {
        e = event || window.event
        if (e.target === this) {
            $(p).css('display', 'none')
            $(body).css('overflow', 'auto')
        }
    })

    $('.popup-delete__close').on("click", function() {
        p.css('display', 'none')
        $(body).css('overflow', 'auto')
    });

    $('.popup-delete__button_cancel').on("click", function() {
        p.css('display', 'none')
        $(body).css('overflow', 'auto')
    });

    $('.popup-delete__button_confirm').on("click", function() {
        console.log("Наташ, мы всё удалили");
        p.css('display', 'none')
        $(body).css('overflow', 'auto')

    });

});


//меню релиза в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        p = $('.popup-release')
        popup = $(".popup-release-menu")
        body = $('body')
        $('.cover-and-name__ellipses').on("click", function() {
            p.css('display', 'block')
            $(body).css('overflow', 'hidden')
            popup.css('animation', 'translating 0.3s linear 1')
        });

        p.click(function(event) {
            e = event || window.event
            if (e.target === this) {
                $(p).css('display', 'none')
                $(body).css('overflow', 'auto')
            }
        })
        $('.popup-release__close').on("click", function() {
            p.css('display', 'none')
            $(body).css('overflow', 'auto')
        });
        $('#release-delete_btn-mobile').on("click", function() {
            $(".popup-release").hide()
                //$(body).css('overflow', 'hidden')
            $(".popup-delete").css('display', 'flex')
            $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')

        });
        $('.popup-delete__close').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $(body).css('overflow', 'auto')
        });

        $('.popup-delete__button_cancel').on("click", function() {
            $(".popup-delete").css('display', 'none')
            $(body).css('overflow', 'auto')
        });

        $('.popup-delete__button_confirm').on("click", function() {
            console.log("Наташ, мы всё удалили");
            $(".popup-delete").css('display', 'none')
            $(body).css('overflow', 'auto')

        });


    }
});