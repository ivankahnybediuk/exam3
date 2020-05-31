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
    autoplay: true,
    adaptiveHeigth:true,
    responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
    ]
  });

//   ====================Akordeon==================================
    $('.second__faqs__akordeon__title').on('click', function(){
      $('.second__faqs__akordeon__article').not($(this).next()).slideUp(500);
      $(this).next().slideToggle(500)
    })
 
    // =====================Slider_review==================
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        prevArrow: (".rewiews__arrows__prev"),
        nextArrow: (".rewiews__arrows__next"),
        autoplay: true
      });


    //   ==================Scroll=============================
    $(".header").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
    $(".burger").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });

    // ======================Login=============================
$(".header__menu__user__login").on("click", function(){
    $(".filter").css("display", "block");
    $(".modal-window-login").css("display", "block");  
})
$(".filter").on("click", function(){
    $(".filter").css("display", "none");
    $(".modal-window-login").css("display", "none");  
})
$(".submit-login").on("click", function(){
    $(".filter").css("display", "none");
    $(".modal-window-login").css("display", "none");  
})
$(".header__menu__user__search").on("click", function(){
    $(".header__menu__user__login").css("display", "none");
    $(".header__menu__user__search").css("display", "none");  
    $(".header__menu__user__cart").css("display", "none");
    $(".header__menu__user__search-box").css("display", "block");
})
$(".header__menu__user__search-box button").on("click", function(){
    event.preventDefault();
    $(".header__menu__user__login").css("display", "block");
    $(".header__menu__user__search").css("display", "block");  
    $(".header__menu__user__cart").css("display", "block");
    $(".header__menu__user__search-box").css("display", "none");
})

})
// ==================Burger====================
$(".header__menu__user__burger").on("click", function(){
    $(".burger").css("display", "block")
});
$(".burger").on("click", function(){
    $(".burger").css("display", "none")
})
