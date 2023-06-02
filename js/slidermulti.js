let slider = tns({
  container: ".my-slider",
  slideBy: "1",
  speed: 400,
  nav: true,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    767: {
      items: 2,
      gutter: 20,
      autoplay: true,
    },
    1024: {
      items: 3,
      gutter: 20,
      autoplay: true,
    },
  },
});
