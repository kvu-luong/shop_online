$(document).ready(function(){
 $('.js-latest_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        focusOnSelect: true
      });

      $('.js-best_slider').slick({
         slidesPerRow: 1,
          rows: 2,
          arrows: true
      });
})