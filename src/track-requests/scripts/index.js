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
    $searchTable.css("grid-column", "1/3");
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
            $searchTable.css("grid-column", "2/3");
            $searchTableBtnMob.css("left", "");
        } else if ($(window).width() <= 991.9) {
            $searchTableInput.css("width", "88px");
        } else {
            $searchTableInput.css("width", "244px");
        }
        $searchTableInput.css("background-color", "white");
    }
});



//переключение между табами в "Все релизы"
let $tabUnhandled = $('#tab_unhandled');
let $tabHandled = $('#tab_handled');
let $tabErrors = $('#tab_errors');
let $unhandledRequests = $("#unhandled_requests");
let $handledRequests = $("#handled_requests");
let $requestsErrors = $("#requests_errors");


$tabUnhandled.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabHandled.removeClass("tabs__tab_active");
    $tabErrors.removeClass("tabs__tab_active");
    $unhandledRequests.css("display", "flex");
    $handledRequests.css("display", "none");
    $requestsErrors.css("display", "none");
});

$tabHandled.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabUnhandled.removeClass("tabs__tab_active");
    $tabErrors.removeClass("tabs__tab_active");
    $handledRequests.css("display", "flex");
    $unhandledRequests.css("display", "none");
    $requestsErrors.css("display", "none");
});

$tabErrors.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabUnhandled.removeClass("tabs__tab_active");
    $tabHandled.removeClass("tabs__tab_active");
    $requestsErrors.css("display", "flex");
    $unhandledRequests.css("display", "none");
    $handledRequests.css("display", "none");
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