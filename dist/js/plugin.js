
 $(function() {
       $('.sidebar__slider').slick({
        autoplay: true,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>'
    });

    $('.orderCallback, .contacts__callBack').on("click", function(e){
        e.preventDefault();
        $(".modalCallBack__openBackground").fadeIn();
        $(".modalCallBack__open").fadeIn();

    });

    $('.modalCallBack__openBackground, .modalCallBack__close').on('click',function(){
       $(".modalCallBack__openBackground").fadeOut();
       $(".modalCallBack__open").fadeOut();
    });
 });


