var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  function togglebutton()
  {
    if ( $("#search").css("display") == 'none') { 
     $("#search").css("display", "block");
    
    }

    else{
      $("#search").css("display", "none");
    }

  }

  function toggleMenu()
  {
    if ( $("#navbarMobile").css("display") == 'none') { 
     $("#navbarMobile").css("display", "block");
    
    }

    else{
      $("#navbarMobile").css("display", "none");
    }

  }