$(document).ready(function() {
     $(".accordion-desc").fadeOut(0);
     $(".accordion").click(function() {
          $(".accordion-desc").not($(this).prev()).slideUp('fast');
          $(this).prev().slideToggle(400);
     });
});