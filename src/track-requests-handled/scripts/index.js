//поле поиска в таблице
let $searchTable = $("#search-table");
let $searchTableInput = $(".search-table__input");
let $searchTableBtnMob = $(".search-table__button-mobile");
let $searchTableClear = $(".search-table__clear");
let $title = $(".all-releases-header__title");


$searchTable.on("focusin", function() {
    $searchTableInput.css("width", "100%");
});

$searchTableBtnMob.on("click", function() {
    $searchTableInput.css("width", "100%");
    $searchTableClear.css("display", "flex");
    $(this).css("left", "0");
    $title.css("display", "none");
    $searchTable.css({
        "grid-column": "1/3",
        "grid-row": "1/2"
    });
});

//крестик очистки поля поиска
$searchTableClear.on("click", function() {
    $searchTableInput.val('');
    $searchTableInput.trigger("focus");
});

$searchTable.on("focusout", function() {
    if (!(($searchTableInput.val() === null) || ($searchTableInput.val() === "") || ($searchTableInput.val() === undefined))) {
        $searchTableInput.css("width", "100%");
    } else {
        if ($(window).width() <= 575.9) {
            $searchTableInput.css("width", "34px");
            $searchTableClear.css("display", "none");
            $title.css("display", "block");
            $searchTable.css({
                "grid-column": "2/3",
                "grid-row": "1/2"
            });
            $searchTableBtnMob.css("left", "");
        } else if ($(window).width() <= 991.9) {
            $searchTableInput.css("width", "88px");
        } else {
            $searchTableInput.css("width", "244px");
        }
        $searchTableInput.css("background-color", "white");
    }
});

//скачать обложку/фонограмму
let $cover = $(".table-row__cell_cover");
let $downloadCover = $(".cover-hint__download-cover");
let $downloadPhonogram = $(".cover-hint__download-phonogram");

$cover.on("mouseenter", function() {
    if ($(window).width() > 576) {
        $(this).children(".cover-hint").css("display", "grid");
    }
})
$cover.on("mouseleave", function() {
    if ($(window).width() > 576) {
        $(this).children(".cover-hint").css("display", "none");
    }
})
$downloadCover.on("click", function() {
    console.log("Скачать обложку");
})

$downloadPhonogram.on("click", function() {
    console.log("Скачать фонограмму");
})

//меню обложки в мобильном
$(function() {
    if ($(window).width() <= 575.9) {
        popupOverlay = $('.popup-cover')
        popupMenu = $(".popup-cover-menu")
        $(".cover-mobile").on("click", function() {
            popupOverlay.css('display', 'block')
            $('body').css('overflow', 'hidden')
            popupMenu.css('animation', 'translating 0.3s linear 1')
        });

        popupOverlay.click(function(event) {
            e = event || window.event
            if (e.target === this) {
                $(p).css('display', 'none')
                $('body').css('overflow', 'auto')
            }
        })
        $('.popup-cover__close').on("click", function() {
            popupOverlay.css('display', 'none')
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