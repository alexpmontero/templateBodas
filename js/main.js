function vegasHome() {
  $(".vegas_home").vegas({
    overlay: false,
    delay: 6000,
    slidesToKeep: 1,
    transition: "fade2",
    transitionDuration: 6000,
    animation: "random",
    animationDuration: 6000,
    slides: [
      { src: "./imgs/vegas/bg01.jpg" },
      { src: "./imgs/vegas/bg02.jpg" },
      { src: "./imgs/vegas/bg03.jpg" },
      { src: "./imgs/vegas/bg04.jpg" },
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