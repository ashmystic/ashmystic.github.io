$(function() {
  // Init navbar
  navbarInit();
});

function navbarInit() {
//   $(".nav a").on("click", function(){
//     console.log(this);
//     $(".nav").find(".active").removeClass("active");
//     $(this).parent().addClass("active");
// });

  $('li.active').removeClass('active');
  console.log(location.pathname);
  $('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 
}
