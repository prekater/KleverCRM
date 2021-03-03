// плагин для  выпадающего меню в форме добавления релиза и договора
$(document).on("ready", function() {
    $('select').niceSelect();
});

//загрузка отчёта
function readURL(input) {
    var reader = new FileReader();
    reader.onload = function(e) {
        $('.report-name').html(input.files[0].name);
        if ($(window).width() > 575.9) {
            $('.report-name').html(input.files[0].name);
            $('.not-uploaded-yet').hide();
            $('.uploaded').css("display", "flex");
        } else {
            $('.report-name').html(input.files[0].name);
            $('.field_upload').css("display", "flex");
            $('.uploaded-mobile').css("display", "flex");
            $('.upload-text').text("Заменить файл");
        }
    };
    reader.readAsDataURL(input.files[0]);
}
//подсветка поля для загрузки файла при ховере или перетаскивании
$('.report-upload-wrap').on('dragover', function() {
    $('.report-upload-wrap').addClass('report-dropping');
});
$('.report-upload-wrap').on('dragleave', function() {
    $('.report-upload-wrap').removeClass('report-dropping');
});
//удалить загруженный по кнопке "Отменить"
function removeUpload() {
    $('.report-upload-input').replaceWith($('.report-upload-input').clone());
    if ($(window).width() > 575.9) {
        $('.report-upload-input').replaceWith($('.report-upload-input').clone());
        $('.uploaded').css("display", "none");
        $('.not-uploaded-yet').css("display", "flex");
    } else {
        $('.field_upload').css("display", "none");
        $('.upload-text').text("Загрузить файл");
    }
}