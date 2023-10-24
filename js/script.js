const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();

const howItWorkingHeight = 2500;
const prevBtn = $('#prev-howItWorking');
const nextBtn = $('#next-howItWorking');

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#howItWorking",
    start: `top top` ,
    end: `top top-=${howItWorkingHeight}`,
    pin: true,
    onUpdate: function (e){
        const percent = e.progress * 100;
        if(percent < 80){
            $('.howItWorking-slider img').css('transform', `translateX(-${percent}%)`)
        }
        checkIcons(percent)
    }
});

nextBtn.on('click', function (){
    const howItWorking = $('#howItWorking').offset().top;
    const howItWorkingH = howItWorking + howItWorkingHeight;
    const scrollTop = $(window).scrollTop();
    if(scrollTop < howItWorkingH && scrollTop > howItWorking){
        $(window).scrollTop(scrollTop + 500);
    }

    checkIcons()
})

prevBtn.on('click', function (){
    const howItWorking = $('#howItWorking').offset().top;
    const howItWorkingH = howItWorking + howItWorkingHeight;
    const scrollTop = $(window).scrollTop();
    if(scrollTop < howItWorkingH && scrollTop > howItWorking){
        $(window).scrollTop(scrollTop - 500);
    }

    checkIcons()
})


function checkIcons(percent){
    const howItWorking = $('#howItWorking').offset().top;
    const howItWorkingH = howItWorking + howItWorkingHeight;
    const scrollTop = $(window).scrollTop();
   if(scrollTop <= howItWorking){
       prevBtn.addClass('disabled')
   } else {
       prevBtn.removeClass('disabled')
   }


   if(percent >= 99){
       nextBtn.addClass('disabled')
   } else {
       nextBtn.removeClass('disabled')
   }
    console.log(howItWorkingH, scrollTop)
}


//........ Slider


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

        return  (i + 1) + '/' + slider.slideCount;

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

    ]
}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    if(!slick.$dots){
        return;
    }

    const i = (currentSlide ? currentSlide : 0) + 1;

    $('.count-box .count').text(i + '/' + (slick.$dots[0].children.length));
})



