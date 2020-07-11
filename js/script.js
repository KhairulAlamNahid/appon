//banner part slider
$('#banner-part').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
});

//banner part slider
$('#screenshot-part .main').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});

// video venobox
$('.venobox').venobox();

//team part slider
$('#team-part .team-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
});

//feedback part slider
$('#feedback-part .details').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
//    autoplay: true,
    arrows: false,
    asNavFor:'#feedback-part .images',
    fade:true,
});

//feedback images part slider
$('#feedback-part .images').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    asNavFor:'#feedback-part .details',
});
