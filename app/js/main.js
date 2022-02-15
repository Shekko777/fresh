$(function(){

    
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

  $('.dropdown-menu__btn').on('click', function(){
    $('.dropdown-menu__list').toggleClass('dropdown-menu__list--active')
  });

  $('.custom-menu__btn').on('click', function(){
    $('.cart').addClass('cart--active')
    $('.body').addClass('lock')
    $('.header__menu').addClass('header__menu--active')
  })

  $('.cart__close').on('click', function(){
    $('.cart').removeClass('cart--active')
    $('.body').removeClass('lock')
    $('.header__menu').removeClass('header__menu--active')
  })

});




