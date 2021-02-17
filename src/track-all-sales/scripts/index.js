   (function($) {
       $(window).on("load", function() {
           $(".container").mCustomScrollbar();
       });
   })(jQuery);


   if ($(window).width() > 992) {

       $(".container").mCustomScrollbar({
           axis: "yx", // vertical and horizontal scrollbar
           theme: "dark"

       });
   }
   if ($(window).width() <= 991.9) {
       $(".container-tablet").mCustomScrollbar({
           axis: "yx", // vertical and horizontal scrollbar
           theme: "dark"

       });
   }