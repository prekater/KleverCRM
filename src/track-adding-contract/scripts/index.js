//переход с кнопки Отправить на экран Успешно создан
let createContract = document.getElementById("create_contract");
let addingContract = document.getElementById("adding_contract");
let addedSuccessContract = document.getElementById("added_success_contract");

createContract.onsubmit = function(evt) {
    evt.preventDefault();
    addingContract.style.display = "none";
    addedSuccessContract.style.display = "block";
}

// плагин для  выпадающего меню в форме добавления релиза и договора
$(document).on("ready", function() {
    $('select').niceSelect();
});