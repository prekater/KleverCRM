//переход с кнопки Отправить на экран Успешно создан
let createApp = document.getElementById("create_application");
let addingApp = document.getElementById("adding_application");
let addedSuccessApp = document.getElementById("added_success_application");

createApp.onsubmit = function(evt) {
    evt.preventDefault();
    addingApp.style.display = "none";
    addedSuccessApp.style.display = "block";
}

// плагин для  выпадающего меню в форме добавления релиза и договора
$(document).on("ready", function() {
    $('select').niceSelect();
});