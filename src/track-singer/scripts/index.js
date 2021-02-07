//переключение между табами в информации о релизе
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

$tabSingerTracks.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabSingerInfo.removeClass("tabs__tab_active");
    $tabSingerReleases.removeClass("tabs__tab_active");
    $singerTracks.css("display", "flex");
    $singerInfo.css("display", "none");
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

//редактирование обложки 
$(function() {

    popupOverlay = $('.popup-change-cover')
    popupChangeCover = $(".popup-cover")
    $('.cover-change').on("click", function() {
        popupOverlay.css('display', 'flex')
        $('body').css('overflow', 'hidden')
        popupChangeCover.css('animation', 'translating 0.3s linear 1')
    });

    popupOverlay.click(function(event) {
        e = event || window.event
        if (e.target === this) {
            $(popupOverlay).css('display', 'none')
            $('body').css('overflow', 'auto')
        }
    })
    $('.popup-cover__close').on("click", function() {
        popupOverlay.css('display', 'none')
        $('body').css('overflow', 'auto')
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


//меню релиза в мобильном
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


//пагинация в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        p = $('.popup-pagination')
        popup = $(".popup-pagination-block")
        body = $('body')
        $(".pagination-mobile__select").on("click", function() {
            p.css('display', 'block')
            body.css('overflow', 'hidden')
            popup.css('animation', 'translating 0.3s linear 1')
            pageNumber = $("#mobile_page_number").text()
            $(".mobile-page-link").removeClass("mobile-page-link_active")
            $(".mobile-page-link").eq(pageNumber - 1).addClass("mobile-page-link_active")
            needScroll = (pageNumber - 1) - 3;
            linkWidth = $(".mobile-page-link").width();
            if (needScroll > 0) {
                $(".popup-pagination-block__body").scrollLeft(needScroll * linkWidth);

            }
        });

        p.click(function(event) {
            e = event || window.event
            if (e.target === this) {
                $(p).css('display', 'none')
                $(body).css('overflow', 'auto')
            }
        })
        $('.popup-pagination__close').on("click", function() {
            p.css('display', 'none')
            $(body).css('overflow', 'auto')
        });
        $(".mobile-page-item").on("click", function() {
            page = $(this).text()
            $("#mobile_page_number").text(page)
            p.css('display', 'none')
            $(body).css('overflow', 'auto')

        })
    }
});