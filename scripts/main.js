function sectionShow(sectionId) {
  const sections = document.querySelectorAll('main div');
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.style.display = 'block'
    } else {
      section.style.display = 'none'
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


let swiperCards = new Swiper('.cardcontent', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let swiperCard = new Swiper('.testimonialcardcontent', {

  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // breakpoints: {
  //   968:{
  //     slidesPerView:1,
  //   },

  // },

});