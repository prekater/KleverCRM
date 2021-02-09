//переход с кнопки Отправить на экран Успешно создан
let createSinger = document.getElementById("create_singer");
let addingSinger = document.getElementById("adding_singer");
let addedSuccessSinger = document.getElementById("added_success_singer");

createSinger.onsubmit = function(evt) {
    evt.preventDefault();
    addingSinger.style.display = "none";
    addedSuccessSinger.style.display = "block";
}