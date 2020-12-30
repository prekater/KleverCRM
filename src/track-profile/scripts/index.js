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
let $tabProfileSettings = $('#tab-profile-settings');
let $tabChangePassword = $('#tab-change-password');
let $formProfileSettings = $("#profile-settings");
let $formChangePassword = $("#change-password");
let $hamburger = $("#hamburger");
let $bodyOverlay = $(".body__overlay");
let $body = $('body');
let $searchFormTablet = $(".search-form-tablet");
let $searchFormTabletInput = $(".search-form-tablet__input");



$tabProfileSettings.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabChangePassword.removeClass("tabs__tab_active");
    $formProfileSettings.css("display", "flex");
    $formChangePassword.css("display", "none");
});

$tabChangePassword.on("click", function() {
    $(this).addClass("tabs__tab_active");
    $tabProfileSettings.removeClass("tabs__tab_active");
    $formProfileSettings.css("display", "none");
    $formChangePassword.css("display", "flex");
});


let inactivateProfitItem = function() {
    $profit.removeClass('li-sidebar_active');
    $sidebarProfit.css("display", "none");
    $expandProfitImg.attr("src", "./images/arrow_down.svg");
    $profitIcon.attr("src", "./images/sales.svg");
}
let inactivateSettingsItem = function() {
    $settings.removeClass('li-sidebar_active');
    $sidebarSettings.css("display", "none");
    $settingsIcon.attr("src", "./images/settings.svg");
    $expandSettingsImg.attr("src", "./images/arrow_down.svg");
}
let activateProfitItem = function() {
    $sidebarProfit.css("display", "flex");
    $profit.addClass('li-sidebar_active');
    $profitIcon.attr("src", "./images/sales_black.svg");
    $expandProfitImg.attr("src", "./images/arrow_up.svg");
}
let activateSettingsItem = function() {
    $sidebarSettings.css("display", "flex");
    $settings.addClass('li-sidebar_active');
    $settingsIcon.attr("src", "./images/settings_black.svg");
    $expandSettingsImg.attr("src", "./images/arrow_up.svg");
}

$liSidebar.hover(
    function() {
        $(this).find($liSidebarImage).addClass("li-sidebar__img_active");
    },

    function() {
        $(this).find($liSidebarImage).removeClass("li-sidebar__img_active");
    }
);

$searchFormTablet.hover(
    function() {
        $(this).css("width", "200px");
        $searchFormTabletInput.css("display", "block");
    },

    function() {
        $(this).css("width", "200px");
        $searchFormTabletInput.css("display", "block");

    }
);
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