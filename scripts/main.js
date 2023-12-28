let swiperCards = new Swiper('.cardcontent', {

    loop: true,
    spaceBetween:32,
    grabCursor:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      400:{
        slidesPerView:2,
      },
      600:{
        slidesPerView:3,
      },
      968:{
        slidesPerView:4,
      },
    
    },
  
  });

  // new Swiper('.cardcontainer',{
  //   slidesPerView:3,
  // });