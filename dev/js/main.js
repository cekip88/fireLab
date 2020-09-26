$('.asks-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});
