//переход с кнопки Отправить на экран Успешно создан
let createRelease = document.getElementById("create_release");
let addingRelease = document.getElementById("adding_release");
let addedSuccessRelease = document.getElementById("added_success_release");

createRelease.onsubmit = function(evt) {
    evt.preventDefault();
    addingRelease.style.display = "none";
    addedSuccessRelease.style.display = "block";
}

// плагин для  выпадающего меню в форме добавления релиза и договора
$(document).on("ready", function() {
    $('select').niceSelect();
});