//slider
$(document).on('ready', function() {
    $('.sidebar__slider').slick({
        autoplay: true,
        arrows: true,
    });

    $('.slick-prev').text("");
    $('.slick-next').text("");
});