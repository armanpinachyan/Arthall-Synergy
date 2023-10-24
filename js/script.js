const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();




//........ Slider


const allslicLengt = document.querySelectorAll('.slider .image')
const span_count = document.querySelector('.count-box samp')
span_count.innerText = `/ ${allslicLengt.length} `
let activeIndex = 1;

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function (slider, i) {
        //FYI just have a look at the object to find available information
        //press f12 to access the console in most browsers
        //you could also debug or look in the source

        return  (i + 1) + '/' + slider.slideCount;
        // $('.slider-text .count span').text(`${activeIndex} `)
    },
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    if(!slick.$dots){
        return;
    }

    const i = (currentSlide ? currentSlide : 0) + 1;

    $('.slider-text .count').text(i + '/' + (slick.$dots[0].children.length));
})



