//переход с кнопки Отправить на экран Успешно создан
let createTrack = document.getElementById("create_track");
let addingTrack = document.getElementById("adding_track");
let addedSuccessTrack = document.getElementById("added_success_track");

createTrack.onsubmit = function(evt) {
    evt.preventDefault();
    addingTrack.style.display = "none";
    addedSuccessTrack.style.display = "block";
}