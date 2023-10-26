const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();

const howItWorkingSlider = $('.howItWorking-slider');
const prevBtn = $('#prev-howItWorking');
const nextBtn = $('#next-howItWorking');

nextBtn.on('click', function (){
    const scrollLeft = howItWorkingSlider.scrollLeft();
    howItWorkingSlider.scrollLeft(scrollLeft + 300)
})

prevBtn.on('click', function () {
    const scrollLeft = howItWorkingSlider.scrollLeft();
    howItWorkingSlider.scrollLeft(scrollLeft - 300);
})

function checkWindow(){
    const windowWidth = $(window).width();
    if(windowWidth > 768){
        return 500
    } else {
        return 200
    }
}

$('#slider-one').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    $('.count.slider-one span').text(i + '/' + (slick.$dots[0].children.length));
})

$('#slider-two').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if(!slick.$dots){
        return;
    }
    const i = (currentSlide ? currentSlide : 0) + 1;
    $('.count.slider-two span').text(i + '/' + (slick.$dots[0].children.length));
})


$(window).on('resize', function (){
    const windowWidth = $(window).width();
    const containerWidth = $('.container').width();
    const result = containerWidth + ((windowWidth - containerWidth) / 2);

    $('.howItWorking-slider').css('width', `${result}px`);
}).resize()



