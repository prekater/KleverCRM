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
    }
});

//поле поиска в таблице десктоп
let $searchTable = $("#search-table");
let $searchTableInput = $(".search-table__input");

$searchTable.on("focusin", function() {
    $searchTableInput.css("width", "100%");
});

$searchTable.on("focusout", function() {
    if (!(($searchTableInput.val() === null) || ($searchTableInput.val() === "") || ($searchTableInput.val() === undefined))) {
        $searchTableInput.css("width", "100%");
    } else {
        if ($(window).width() <= 991.9) {
            $searchTableInput.css("width", "88px");
        } else {
            $searchTableInput.css("width", "244px");
        };
        $searchTableInput.css("background-color", "white");
    }
});

//поле поиска в таблице мобильная версия
let $searchTableBtnMob = $(".search-table__button-mobile");
let $searchTableClear = $(".search-table__clear");
let $title = $(".all-releases-header__title");

$searchTableBtnMob.on("click", function() {
    $searchTableInput.css("width", "100%");
    $searchTableClear.css("display", "flex");
    $(this).css("left", "0");
    $title.css("display", "none");
    $searchTable.css("grid-column", "1/3");
});

$searchTable.on("focusout", function() {
    console.log("lost focus");

    if ((($searchTableInput.val() === null) || ($searchTableInput.val() === "") || ($searchTableInput.val() === undefined))) {
        $searchTableInput.css("width", "34px");
        $searchTableClear.css("display", "none");
        $searchTableBtnMob.css("right", "0");
        $title.css("display", "block");
        $searchTable.css("grid-column", "2/3");
        $searchTableInput.focus();
    }

});


$searchTableClear.on("click", function() {
    $searchTableInput.val('');
});


//переключение между табами в "Все релизы"
let $tabAllReleases = $('#tab-all-releases');
let $tabErrors = $('#tab-errors');
let $allReleases = $("#all-releases-block");
let $releasesErrors = $("#releases_errors");

$tabAllReleases.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabErrors.removeClass("tabs__tab_active");
    $allReleases.css("display", "block");
    $releasesErrors.css("display", "none");
});

$tabErrors.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabAllReleases.removeClass("tabs__tab_active");
    $releasesErrors.css("display", "block");
    $allReleases.css("display", "none");
});

//"Все релизы" кнопки в каждой строке Редактировать Удалить
let releaseEdit = document.getElementById("edit-release");
let releaseDelete = document.getElementById("delete-release");

releaseEdit.onclick = function() {
    console.log("Edit release");
};

releaseDelete.onclick = function() {
    console.log("Delete release");
};