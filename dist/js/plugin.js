
$(function() {
	$('.sidebar__slider').slick({
	    autoplay: true,
	    arrows: true,
	    prevArrow:'<button type="button" class="slick-prev"></button>',
	    nextArrow:'<button type="button" class="slick-next"></button>'
	});

	//slick nav
	$('.headerNav_menu').slicknav({
		prependTo: '.headerNav',
	    label: '',
	}); 
});