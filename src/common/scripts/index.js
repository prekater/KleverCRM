//скрипт для сайдабара и хэдера
let $profit = $("#profit");
let $liSidebar = $(".li-sidebar");
let $liSidebarImage = $('.li-sidebar__img');
let $profitIcon = $profit.find($('.li-sidebar__img'));
let $sidebarProfit = $(".li-sidebar_profit");
let $expandProfitImg = $profit.find(".li-sidebar__expand").find("img");
let $settings = $("#settings");
let $settingsIcon = $settings.find($('.li-sidebar__img'));
let $sidebarSettings = $(".li-sidebar_settings");
let $expandSettingsImg = $settings.find(".li-sidebar__expand").find("img");
let $sidebar = $(".sidebar");
let $sidebarCollapsed = $("#sidebar-collapsed");
let $sidebarExpanded = $("#sidebar-expanded");
let $sidebarExpandedHeader = $("#sidebar-expanded").find($(".header"));
let $arrowToExpand = $sidebarCollapsed.find($(".sidebar_to-expand"));
let $arrowToCollapse = $sidebarExpanded.find($(".sidebar_to-collapse"));
let $mainBlock = $(".main-block");
let $searchForm = $('.search-form');
let $hamburger = $("#hamburger");
let $bodyOverlay = $(".body__overlay");
let $body = $('body');
let $searchFormTablet = $(".search-form-tablet");
let $searchFormTabletInput = $(".search-form-tablet__input");
let $header = $(".header");
let $searchFormHeader = $header.find(".search-form");
let $searchFormHeaderInput = $header.find(".search-form__input");
let $preloader = $(".preloader");

$preloader.delay(500).fadeOut('slow');

//скрыть секцию Прибыль
let inactivateProfitItem = function() {
    $profit.removeClass('li-sidebar_active');
    $sidebarProfit.hide(300);
    $expandProfitImg.attr("src", "~/assets/arrow_down.svg");
    $profitIcon.attr("src", "~/assets/sales.svg");
}

//скрыть секцию Настройки
let inactivateSettingsItem = function() {
    $settings.removeClass('li-sidebar_active');
    $settingsIcon.attr("src", "~/assets/settings.svg");
    $sidebarSettings.hide(300);
    $expandSettingsImg.attr("src", "~/assets/arrow_down.svg");
}

//раскрыть секцию Прибыль
let activateProfitItem = function() {
    $sidebarProfit.show(300);
    $sidebarProfit.css("display", "flex");
    $profit.addClass('li-sidebar_active');
    $profitIcon.attr("src", "~/assets/sales_black.svg");
    $expandProfitImg.attr("src", "~/assets/arrow_up.svg");
}

//раскрыть секцию Настройки
let activateSettingsItem = function() {
    $sidebarSettings.show(300);
    $sidebarSettings.css("display", "flex");
    $settings.addClass('li-sidebar_active');
    $settingsIcon.attr("src", "~/assets/settings_black.svg");
    $expandSettingsImg.attr("src", "~/assets/arrow_up.svg");
}

$profit.on("click", function() {
    if ($(this).hasClass('li-sidebar_active')) {
        inactivateProfitItem();
    } else {
        activateProfitItem();
    }
});

$settings.on("click", function() {
    if ($(this).hasClass('li-sidebar_active')) {
        inactivateSettingsItem();
    } else {
        activateSettingsItem();
    }
});
//"почернение" иконок при наведении курсора
$liSidebar.on("mouseenter", function() {
    $(this).find($liSidebarImage).addClass("li-sidebar__img_active");
});

$liSidebar.on("mouseleave", function() {
    $(this).find($liSidebarImage).removeClass("li-sidebar__img_active");
});

//изменение ширины поля поиска при входе/выходе курсора; не изменять ширину, если заполнено
$searchFormTablet.on("mouseenter", function() {
    $(this).css("width", "200px");
    $searchFormTabletInput.css("display", "block");
});

$searchFormTablet.on("focusout", function() {

    if (!(($searchFormTabletInput.val() === null) || ($searchFormTabletInput.val() === "") || ($searchFormTabletInput.val() === undefined))) {
        $(this).css("width", "200px");
        $searchFormTabletInput.css("display", "block");
    } else {
        $(this).css("width", "42px");
        $searchFormTabletInput.css("display", "none");
    }
});

$searchFormHeader.on("focusin", function() {
    $searchFormHeaderInput.css("width", "100%");
});

$searchFormHeader.on("focusout", function() {
    if (!(($searchFormHeaderInput.val() === null) || ($searchFormHeaderInput.val() === "") || ($searchFormHeaderInput.val() === undefined))) {
        $searchFormHeaderInput.css("width", "100%");
    } else {
        $searchFormHeaderInput.css("width", "150px");
        $searchFormHeaderInput.css("background-color", "white");
    }
});

//боковое меню на планшете
$(function() {
    if ($(window).width() >= 992) {
        $arrowToExpand.on("click", function() {
            $sidebarExpanded.css("left", "0");
            $sidebarCollapsed.css("left", "-70px");
            $mainBlock.css("padding-left", "226px");
            $searchForm.css("margin-left", "232px");
        });
        $arrowToCollapse.on("click", function() {
            $sidebarExpanded.css("left", "-250px");
            $sidebarCollapsed.css("left", "0");

            $mainBlock.css("padding-left", "70px");
            $searchForm.css("margin-left", "76px");
            inactivateProfitItem();
            inactivateSettingsItem();
        });
    }
});

//меню в мобильном
$(function() {
    if ($(window).width() < 992) {
        $hamburger.on("click", function() {
            $sidebarExpanded.css("left", "0");
            $bodyOverlay.css('display', 'block');
            $body.css('overflow', 'hidden');

        });
        $bodyOverlay.on("click", function(event) {
            e = event || window.event;
            if (e.target == this) {
                $sidebarExpanded.css("left", "-600px");
                $bodyOverlay.css('display', 'none');
                $body.css('overflow', 'auto');
                inactivateProfitItem();
                inactivateSettingsItem();
            }
        });
        $arrowToCollapse.on("click", function() {
            $sidebarExpanded.css("left", "-600px");
            $bodyOverlay.css('display', 'none');
            $body.css('overflow', 'auto');
            inactivateProfitItem();
            inactivateSettingsItem();
        });
    }
});

//затемнение фона заполненного input любого type, м.б. это что-то испортит, надо смотреть дальше
$("input").on("change", function() {
    if ((!(($(this).val() === null) || ($(this).val() === "") || ($(this).val() === undefined)))) {
        $(this).css("background-color", "#EEF4F6");
    } else if ($(this).hasClass("white-void-input")) {
        $(this).css("background-color", "white");
    } else {
        $(this).css("background-color", "#F3F8FA");
    }
}); {

}
// подсказки в формах по вопросительному знаку popup в мобилке
$(function() {
    if ($(window).width() <= 575.9) {
        pArtistForm = $('.popup__overlay')
        popupArtistForm = $(".popup")
        bodyArtistForm = $('body')
        $('.field__question').on("click", function() {
            pArtistForm.css('display', 'block')
            bodyArtistForm.css('overflow', 'hidden')
            popupArtistForm.css('animation', 'translating 0.3s linear 1')
            popupTextArtistForm = $(this).attr('tooltip')
            $('.popup__content').text(popupTextArtistForm)
        });

        pArtistForm.click(function(event) {
            e = event || window.event
            if (e.target === this) {
                pArtistForm.css('display', 'none')
                bodyArtistForm.css('overflow', 'auto')
            }
        })

        $('.popup__close').on("click", function() {
            pArtistForm.css('display', 'none')
            bodyArtistForm.css('overflow', 'auto')
        });
    }
});

//поле поиска в таблице
let $searchTable = $("#search-table");
let $searchTableInput = $(".search-table__input");
let $searchTableBtnMob = $(".search-table__button-mobile");
let $searchTableClear = $(".search-table__clear");
let $title = $(".all-countries-header__title");

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

//окрашивание "Нет" в серый поля "Участвует в отчете"
$('.in-report').each(function() {
    let reportCell = $(this).text()
    if (reportCell == 'Нет') {
        $(this).css('color', '#768989')
    }
})

//скачать обложку/фонограмму при наведении на обложку в таблице Запросы
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

//меню обложки в мобильном (скачать обложку/фонограмму)
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

//редактирование обложки (загрузить/скачать обложку релиза или фото артиста)
$(function() {
    popupOverlayChangeCover = $('.popup-change-cover')
    popupChangeCover = $(".popup-change")
    $('.cover-change').on("click", function() {
        popupOverlayChangeCover.css('display', 'flex')
        $('body').css('overflow', 'hidden')
        popupChangeCover.css('animation', 'translating 0.3s linear 1')
    });

    popupOverlayChangeCover.click(function(event) {
        e = event || window.event
        if (e.target === this) {
            $(popupOverlayChangeCover).css('display', 'none')
            $('body').css('overflow', 'auto')
        }
    })

    $('.popup-change__close').on("click", function() {
        popupOverlayChangeCover.css('display', 'none')
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
            $('.popup-change').css({
                'display': 'grid',
                'grid-template-columns': '1fr',
                'grid-template-rows': '38px 1fr auto',
                'grid-column-gap': '0',
                'grid-row-gap': '17px'
            });
            $('.popup-change__two-buttons').css({
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
        $('.popup-change').css({
            'display': 'grid',
            'grid-template-columns': '1fr',
            'grid-template-rows': '38px 1fr',
            'grid-column-gap': '0',
            'grid-row-gap': '17px'
        });
        $('.popup-change__two-buttons').css({
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


//подтверждение удаления артиста/релиза/подлейбла и т.п.
$(function() {
    popupDeleteOverlay = $('.popup-delete')
    popupConfirm = $(".popup-delete-confirm")
    $('#item-delete_btn').on("click", function() {
        popupDeleteOverlay.css('display', 'flex')
        $('body').css('overflow', 'hidden')
        popupConfirm.css('animation', 'translating 0.3s linear 1')
    });
    $('#item-delete_btn-mobile').on("click", function() {
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