

$(function () {
    $('.mainVisual').bxSlider({
        mode: 'fade',
        speed: 1700,
        pause: 4000,
        infiniteLoop: true,
        auto: true,
        autoHover: true,
        controls: true,
        autoControls: true,
        useCSS: false,
        pager: true,
        easing: 'easeInOutQuint'

    });
});



$(function () {
    $('.homedecoVisual').bxSlider({
        speed: 500,
        controls: true,
        auto: false,
        infiniteLoop: false,
        autoControls: false,
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 280,
        touchEnabled: true

    });
});


var mpSlider = $('.Mag_slide_box').bxSlider({
		onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
			$('.active_slide').removeClass('active_slide');
			$('.Mag_slide_box > li').eq(currentSlideHtmlObject + 1).addClass('active_slide')
		},
		onSliderLoad: function() {
			$('.Mag_slide_box > li').eq(1).addClass('active_slide')
		},
		speed: 1300,
		infiniteLoop: true,
		randomStart: false,
		controls: true,
		auto: true,
		autoControls: true,
		pause: 2000,
		autoHover: true,
		minWidth: 3,
		maxWidth: 3,
	});
