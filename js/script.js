$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<img src='./img/vector.svg' class='slick-prev' alt='1'>",
        nextArrow: "<img src='./img/vector-next.svg' class='slick-next' alt='2'>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    /*Menu nav toggle*/ 

    $("#nav__toggle").on("click", function(event) {
      event.preventDefault();

      $(".nav").toggleClass('active');
      $(this).toggleClass('active');
  });
});