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