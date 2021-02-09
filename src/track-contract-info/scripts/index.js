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