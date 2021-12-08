new Swiper(".image-slider",{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
  delay: 9000,
  },
  slidesPerGroup: 1,
  centeredSlides: true,
  spaceBetween: 3000,
  loop: true,
});
