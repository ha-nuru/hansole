// mainSlider
$(".mainVisual").bxSlider({
  mode: "fade",
  speed: 1700,
  pause: 4000,
  infiniteLoop: true,
  autoHover: true,
  controls: true,
  useCSS: false,
  pager: true,
  easing: "easeInOutQuint",
  auto: true,
  autoControls: true,
  pagerSelector: ".main_slider_pagers",
  autoControlsSelector: ".main_slider_controls",
});

// 유투브 Slider
var myWin = $(window).width();
if (myWin > 640) {
  $(".homedecoVisuaY").bxSlider({
    speed: 1200,
    controls: true,
    auto: false,
    infiniteLoop: false,
    autoControls: false,
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 280,
    touchEnabled: true,
    pagerSelector: ".VisualY_slider_pagers",
  });
} else {
  $(".homedecoVisuaY").bxSlider({
    speed: 1200,
    controls: true,
    auto: false,
    infiniteLoop: false,
    autoControls: false,
    minSlides: 2,
    maxSlides: 2,
    slideWidth: 220,
    slideMargin: 10,
    touchEnabled: true,
    pagerSelector: ".VisualY_slider_pagers",
  });
}
// 한솔매거진 Slider
$(".Mag_slide_box").bxSlider({
  speed: 1500,
  infiniteLoop: true,
  randomStart: false,
  controls: true,
  auto: true,
  autoControls: true,
  autoHover: false,
  minWidth: 3,
  maxWidth: 3,
  pagerSelector: ".Mag_slider_pagers",
  autoControlsSelector: ".Mag_slider_controls",
});
// 블로그 Slider
var myWin = $(window).width();
if (myWin > 640) {
  $(".homedecoVisual").bxSlider({
    speed: 1200,
    controls: true,
    auto: false,
    infiniteLoop: false,
    autoControls: false,
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 280,
    touchEnabled: true,
    pagerSelector: ".Visual_slider_pagers",
  });
} else {
  $(".homedecoVisual").bxSlider({
    speed: 1200,
    controls: true,
    auto: false,
    infiniteLoop: false,
    autoControls: false,
    minSlides: 2,
    maxSlides: 2,
    slideWidth: 220,
    slideMargin: 10,
    touchEnabled: true,
    pagerSelector: ".Visual_slider_pagers",
  });
}

// gnb
$(".header_btn_mob a").click(function () {
  $(this).parent().siblings(".gnb_mob").slideToggle();
  $(this).parent().toggleClass("close");
});
$(".gnb_mob li.gnb_m_list > a").click(function () {
  $(this).siblings(".gnb_mob_sec").slideToggle();
  $(this).parent().toggleClass("close");
});
$(".gnb_mob ul.gnb_mob_sec > li > a").click(function () {
  $(this).siblings(".gnb_mob_thir").slideToggle();
  $(this).parent().toggleClass("close");
});
$(".gnb_wrap").mouseover(function () {
  $(this).children().children(".gnb_sub").stop().slideDown();
  $(this).parent().siblings(".bg_gnb").stop().slideDown();
});
$(".gnb_wrap").mouseleave(function () {
  $(this).children().children(".gnb_sub").stop().slideUp();
  $(this).parent().siblings(".bg_gnb").stop().slideUp();
});
$(".family_btn").click(function () {
  $(this).siblings().slideToggle();
});
