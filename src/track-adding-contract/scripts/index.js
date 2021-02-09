// плагин для  выпадающего меню 
$(document).on("ready", function() {
    $('select').niceSelect();
});

//переход с кнопки Отправить на экран Успешно создан
let createContract = document.getElementById("create_contract");
let addingContract = document.getElementById("adding_contract");
let addedSucccess = document.getElementById("added_success");

createContract.onsubmit = function(evt) {
    evt.preventDefault();
    addingContract.style.display = "none";
    addedSucccess.style.display = "block";
}