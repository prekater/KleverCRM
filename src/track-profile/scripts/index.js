//переключение табов
let $tabProfileSettings = $('#tab-profile-settings');
let $tabChangePassword = $('#tab-change-password');
let $formProfileSettings = $("#profile-settings");
let $formChangePassword = $("#change-password");



$tabProfileSettings.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabChangePassword.removeClass("tabs__tab_active");
    $formProfileSettings.css("display", "grid");
    $formChangePassword.css("display", "none");
});

$tabChangePassword.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabProfileSettings.removeClass("tabs__tab_active");
    $formProfileSettings.css("display", "none");
    $formChangePassword.css("display", "grid");
});