var swiper = new Swiper('.topChoices .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});



var swiper = new Swiper('.itemSwiper .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  width:300,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 1,
      width: 978,
    },
    800:{
      slidesPerView: 1,
      width: 1000,
    },
    990:{
      slidesPerView: 1,
      width: 900,
    },
  }
});



const $menu = $('#navbarToggleExternalContent');

$menu.on('show.bs.collapse', function () {
  $menu.addClass('menu-show');
});

$menu.on('hide.bs.collapse', function () {
  $menu.removeClass('menu-show');
});