//- require jquery

$(document).foundation();
$(document).ready(function() {
  $('.carousel').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1000,
        settings: { arrows: false }
      }
    ]
  });
});
