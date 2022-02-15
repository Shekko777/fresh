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

window.addEventListener('click', function ( event ) {

  let counter;

  if(data.target.dataset.action === 'btnPlus' || data.target.dataset.action === 'btnMinus'){
    const cartButton =  event.target.closest('.cart__button');
    counter = cartButton.querySelector('[data-counter]');

    if (event.target.dataset.action === 'btnPlus') {  
      counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === 'btnMinus') {
    if(parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
    
  }
  }   
  
  

  


});



