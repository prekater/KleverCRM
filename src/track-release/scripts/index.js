//редактирование обложки 
$(function() {

    p = $('.popup-change-cover')
    popup = $(".popup-cover")
    body = $('body')
    $('.cover-change').on("click", function() {
        p.css('display', 'flex')
        $(body).css('overflow', 'hidden')
        popup.css('animation', 'translating 0.3s linear 1')
        console.log($('cover-and-name__cover').has("img"))
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