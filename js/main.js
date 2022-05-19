function vegasHome() {
  $(".vegas_home").vegas({
    overlay: false,
    delay: 6000,
    slidesToKeep: 1,
    transition: "fade2",
    transitionDuration: 7000,
    animation: "random",
    animationDuration: 7000,
    slides: [
      { src: "./imgs/vegas/bg.png" },
      { src: "./imgs/vegas/bg02.jpg" },
    ],
  });
}

function handleConfirmUp () {
  $(window).scroll(function () {

    var cambio = ($(window).scrollTop() > 800) ? true : false;

    if (cambio) {
      $(".mobile_confirm_assis").addClass('confirm_up');
    } else {
      $(".mobile_confirm_assis").removeClass('confirm_up');
    }
  });
}