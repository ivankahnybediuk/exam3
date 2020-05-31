// ==================Toggle==================

$(".second__about__toggle__title__2").on("click", function(){
    $(".second__about__toggle__articles__2").fadeIn(1000);
    $(".second__about__toggle__articles__1").fadeOut(500);
    $(".second__about__toggle__articles__3").fadeOut(500);
    $(".second__about__toggle__title__3").removeClass("active");
    $(".second__about__toggle__title__1").removeClass("active");
    $(this).addClass("active")
})
$(".second__about__toggle__title__1").on("click", function(){
    $(".second__about__toggle__articles__1").fadeIn(1000);
    $(".second__about__toggle__articles__2").fadeOut(500);
    $(".second__about__toggle__articles__3").fadeOut(500);
    $(".second__about__toggle__title__3").removeClass("active");
    $(".second__about__toggle__title__2").removeClass("active");
    $(this).addClass("active")
});

$(".second__about__toggle__title__3").on("click", function(){
    $(".second__about__toggle__articles__3").fadeIn(1000);
    $(".second__about__toggle__articles__2").fadeOut(500);
    $(".second__about__toggle__articles__1").fadeOut(500);
    $(".second__about__toggle__title__2").removeClass("active");
    $(".second__about__toggle__title__1").removeClass("active");
    $(this).addClass("active");
})


$(document).ready(function(){
    // ================== Slider products======================
$('.second__products__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: (".arrowP"),
    nextArrow: (".arrowN"),
    autoplay: true
  });

//   ====================Akordeon==================================

$(document).ready(function() {
    $('.second__faqs__akordeon__title').on('click', function(){
      $('.second__faqs__akordeon__article').not($(this).next()).slideUp(500);
      $(this).next().slideToggle(500)
    })
})
 




})