// плагин для  выпадающего меню 
$(document).on("ready", function() {
    $('select').niceSelect();
});

// подсказки popup в мобилке

$(function() {
    if ($(window).width() <= 575.9) {
        p = $('.popup__overlay')
        popup = $(".popup")
        body = $('body')
        $('.field__question').on("click", function() {
            p.css('display', 'block')
            $(body).css('overflow', 'hidden')
            popup.css('animation', 'translating 0.3s linear 1')
            popupText = $(this).attr('tooltip')
            $('.popup__content').text(popupText)

        });

        p.click(function(event) {
            e = event || window.event
            if (e.target === this) {
                $(p).css('display', 'none')
                $(body).css('overflow', 'auto')
            }
        })
        $('.popup__close').on("click", function() {
            p.css('display', 'none')
            $(body).css('overflow', 'auto')
        });
    }
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
        console.log($('cover-and-name__cover').attr("src"))
            // if ($('cover-and-name__cover').attr("src") != "./images/no-cover.svg") {
            //     $('popup-cover__has-cover').css('display', 'flex')
            //     $('popup-cover__place-here').css('display', 'none')

        // } else {
        //     $('popup-cover__has-cover').css('display', 'none')
        //     $('popup-cover__place-here').css('display', 'flex')
        // }
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


//переход с кнопки Отправить на экран Успешно создан
let createRelease = document.getElementById("create_release");
let addingRelease = document.getElementById("adding_release");
let addedSucccess = document.getElementById("added_success");

createRelease.onsubmit = function(evt) {
    evt.preventDefault();
    addingRelease.style.display = "none";
    addedSucccess.style.display = "block";
}

// переход из сайдбара ф форму добавления релиза
// let sidebarAddRelease = document.getElementById("sidebar_add_release");
// sidebarAddRelease.onclick = function() {
//     addingRelease.style.display = "block";

// }


//переход ко всем релизам из сайдбара
let sidebarExpReleases = document.getElementById("sidebar_exp_releases");
let sidebarColReleases = document.getElementById("sidebar_col_releases");
let allReleases = document.getElementById("all_releases");

sidebarExpReleases.onclick = function() {
    addedSucccess.style.display = "none";
    allReleases.style.display = "block";
}

sidebarColReleases.onclick = function() {
    addedSucccess.style.display = "none";
    allReleases.style.display = "block";
}

//переход с формы добалвения релиза ко всем релизам
let toReleasesMob = document.querySelector(".to-releases");
let toReleases = document.querySelector(".form-header__to-releases");


toReleasesMob.onclick = function() {
    addingRelease.style.display = "none";
    allReleases.style.display = "block";
}

toReleases.onclick = function() {
    addingRelease.style.display = "none";
    allReleases.style.display = "block";
}

//переход к информации о релизе из названия в таблице со всеми релизами
let releaseInfo = document.getElementById("release1");
let release = document.getElementById("release");
releaseInfo.onclick = function() {
    allReleases.style.display = "none";
    release.style.display = "block";
}

//переход ко всем релизам из информации о релизе 
let toAllReleases = document.getElementById("to_all_releases");
toAllReleases.onclick = function() {
    release.style.display = "none";
    allReleases.style.display = "block";
}

//сортировка таблица Все релизы по названию релиза
// let allReleasesTable = document.querySelector(".all-releases-table");
// let tableRows = document.querySelectorAll(".table-row");
// let sortName = document.getElementById("sort_name");
// let tableRowWrapper = document.querySelector(".table-row-wrapper");

// let arr = [].slice.call(tableRows);
// arr.sort(function(a, b) {
//     let nameA = a.querySelector(".cell-for-sort");
//     let nameB = b.querySelector(".cell-for-sort");
//     if (nameA > nameB) return 1;
//     if (nameA == nameB) return 0;
//     if (nameA < nameB) return -1;
// });
// console.log(arr);

// for (let i = 0; i < tableRows.length; i++) {
//     let newRow = tableRowWrapper.cloneNode(false);
//     allReleasesTable.appendChild(newRow);
//     allReleasesTable.lastChild.appendChild(arr[i]);
// }

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