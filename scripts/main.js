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
      320:{
        slidesPerView:1,
      },
      600:{
        slidesPerView:2,
      },
      968:{
        slidesPerView:3,
      },
    
    },
  
  });

  // new Swiper('.cardcontainer',{
  //   slidesPerView:3,
  // });