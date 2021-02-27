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
    $singerReleases.css("display", "grid");
    $singerInfo.css("display", "none");
    $singerTracks.css("display", "none");
});

$tabSingerTracks.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabSingerInfo.removeClass("tabs__tab_active");
    $tabSingerReleases.removeClass("tabs__tab_active");
    $singerTracks.css("display", "grid");
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

        $('#item-delete_btn-mobile').on("click", function() {
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


//сортировка по названию
let tracksBlock = document.getElementById("singer-tracks");
let trackName = document.getElementById("track-name");
let tracksTable = document.querySelector(".singer-tracks-table");
let rows = tracksBlock.querySelectorAll(".tracks-table-row-wrapper");
let rowBlock = tracksBlock.querySelector(".tracks-table-row-wrapper");
let ascSort = true;

let sortString = function(cellIndex) {
    let target = event.target;
    ascSort = !ascSort;
    let sortArrow = target.querySelector(".arrow");
    if (ascSort) {
        sortArrow.classList.remove("arrow_up");
        sortArrow.classList.add("arrow_down");
        let newArray = Array.from(rows);
        newArray.sort(function(a, b) {
            let nameA = a.querySelectorAll(".cell-text")[cellIndex].textContent,
                nameB = b.querySelectorAll(".cell-text")[cellIndex].textContent;
            if (nameA < nameB) //сортируем строки по возрастанию
                return -1
            if (nameA > nameB)
                return 1
            return 0 // Никакой сортировки
        })
        for (let i of newArray) {
            tracksTable.appendChild(i);
        }
    } else {
        sortArrow.classList.remove("arrow_down");
        sortArrow.classList.add("arrow_up");
        let newArray = Array.from(rows);
        newArray.sort(function(a, b) {
            let nameA = a.querySelectorAll(".cell-text")[cellIndex].textContent,
                nameB = b.querySelectorAll(".cell-text")[cellIndex].textContent;
            if (nameA > nameB) //сортируем строки по убывванию
                return -1
            if (nameA < nameB)
                return 1
            return 0 // Никакой сортировки
        })
        for (let i of newArray) {
            tracksTable.appendChild(i);
        }
    }
};

let sortNumber = function(cellIndex) {
    let target = event.target;
    ascSort = !ascSort;
    let sortArrow = target.querySelector(".arrow");

    if (ascSort) {
        sortArrow.classList.remove("arrow_up");
        sortArrow.classList.add("arrow_down");
        let newArray = Array.from(rows);
        newArray.sort(function(a, b) {
            let valueA = a.querySelectorAll(".cell-text")[cellIndex].textContent,
                valueB = b.querySelectorAll(".cell-text")[cellIndex].textContent,
                numberA = valueA.replace(/[\s\p{Sc}]/gu, ""),
                numberB = valueB.replace(/[\s\p{Sc}]/gu, "");
            return numberA - numberB
        })
        for (let i of newArray) {
            tracksTable.appendChild(i);
        }
    } else {
        sortArrow.classList.remove("arrow_down");
        sortArrow.classList.add("arrow_up");
        let newArray = Array.from(rows);
        newArray.sort(function(a, b) {
            let valueA = a.querySelectorAll(".cell-text")[cellIndex].textContent,
                valueB = b.querySelectorAll(".cell-text")[cellIndex].textContent,
                numberA = valueA.replace(/[\s\p{Sc}]/gu, ""),
                numberB = valueB.replace(/[\s\p{Sc}]/gu, "");
            return numberB - numberA
        })
        for (let i of newArray) {
            tracksTable.appendChild(i);
        }
    }
};