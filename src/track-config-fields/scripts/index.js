   (function($) {
       $(window).on("load", function() {
           $(".container").mCustomScrollbar();
       });
   })(jQuery);


   if ($(window).width() > 992) {

       $(".container").mCustomScrollbar({
           axis: "y", // vertical scrollbar
           theme: "dark"

       });
   }
   if ($(window).width() <= 991.9) {
       $(".container-tablet").mCustomScrollbar({
           axis: "yx", // vertical and horizontal scrollbar
           theme: "dark"

       });
   }


   //добавление поля конфигурации
   $(function() {
       popupAddFieldOverlay = $('.popup-add-field')
       popupConfirm = $(".popup-add-field-confirm")
       $('#add_field').on("click", function() {
           console.log("qeqweqweqwe");
           popupAddFieldOverlay.css('display', 'flex')
           $('body').css('overflow', 'hidden')
           popupConfirm.css('animation', 'translating 0.3s linear 1')
       });
       $('#add_field-mobile').on("click", function() {
           popupAddFieldOverlay.css('display', 'flex')
           $('body').css('overflow', 'hidden')
           popupConfirm.css('animation', 'translating 0.3s linear 1')
       });
       popupAddFieldOverlay.click(function(event) {
           e = event || window.event
           if (e.target === this) {
               popupAddFieldOverlay.css('display', 'none')
               $('body').css('overflow', 'auto')
           }
       })

       $('.popup-config__close').on("click", function() {
           popupAddFieldOverlay.css('display', 'none')
           $('body').css('overflow', 'auto')
       });

       $('.popup-config__button_cancel').on("click", function() {
           popupAddFieldOverlay.css('display', 'none')
           $('body').css('overflow', 'auto')
       });

       $('.popup-config__button_confirm').on("click", function() {
           console.log("Наташ, мы всё удалили");
           popupAddFieldOverlay.css('display', 'none')
           $('body').css('overflow', 'auto')

       });

   });


   //меню конфигурации в мобильном
   $(function() {
       if ($(window).width() <= 575.9) {
           $('.item-cover-and-name__ellipses').on("click", function() {
               $('.popup-config').css('display', 'block')
               $('body').css('overflow', 'hidden')
               $(".popup-config-menu").css('animation', 'translating 0.3s linear 1')
           });

           $('.popup-config').on("click", function(event) {
               e = event || window.event
               if (e.target === this) {
                   $('.popup-config').css('display', 'none')
                   $('body').css('overflow', 'auto')
               }

           })

           $('.popup-config').on("click", function() {
               $('.popup-config').css('display', 'none')
               $('body').css('overflow', 'auto')
           });


           $('#config-delete_btn-mobile').on("click", function() {
               $(".popup-application").hide()
               $(".popup-delete").css('display', 'flex')
               $(".popup-delete-confirm").css('animation', 'translating 0.3s linear 1')

           });
           $('.popup-delete__close').on("click", function() {
               $(".popup-delete").css('display', 'none')
               $('body').css('overflow', 'auto')
           });
       }
   });