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
    },
  }
});


//AOS
AOS.init();