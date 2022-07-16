const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 100,
  reset: false,
});

sr.reveal(`.title, .button, .title-span,.footer`);
sr.reveal(`.l-s1__content, .l-s3__bg, .l-s4__product--item`, {
  origin: "bottom",
});
sr.reveal(
  `.l-s2__product, .header__nav--logo, .header__nav--item, .l-s3__container--product-right, .l-s3__container--product-sp-right, .l-s3__container--product-3-left`,
  {
    origin: "left",
  }
);
sr.reveal(
  `.l-s3__container--product-left, .l-s3__container--product-sp-left, .l-s3__container--product-3-right,.section1`,
  {
    origin: "right",
  }
);
