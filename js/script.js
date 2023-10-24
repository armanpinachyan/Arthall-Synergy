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

nextBtn.on('click', function (){
    const scrollTop = $(window).scrollTop();
    $(window).scrollTop(scrollTop + 500);

})

prevBtn.on('click', function (){
    const scrollTop = $(window).scrollTop();
    $(window).scrollTop(scrollTop - 500);

})


ScrollTrigger.create({
    trigger: "#howItWorking",
    start: `top top-=+100` ,
    end: `top top-=${howItWorkingHeight}`,
    pin: true,
    onUpdate: function (e){
        const percent = e.progress * 100;
        $('.howItWorking-slider img').css('transform', `translateX(-${percent}%)`)

        // checkIcons(percent)
    }
});

const panelNav = $('.synergyEffect-menu-item');
const solidElem = $('.synergyEffect-menu-solid');
const synergyEffectBodyItem = $('.synergyEffect-body-item');
let activePanelNavIndex = 0;

let activePanelNavSuccess = true;
const synergyEffectHeight = 2000;
ScrollTrigger.create({
    trigger: "#synergyEffect",
    start: `top top-=+150` ,
    end: `top top-=${synergyEffectHeight}`,
    pin: true,
    onUpdate: function (e){
        const percent = e.progress * 100;
        const activeIndex = +(percent / (100 / panelNav.length)).toFixed()
        console.log(activeIndex)
        solidElem.css({
            left: `${percent}%`,
            transform: `translateX(-${percent}%)`
        });

        if(activePanelNavSuccess && activeIndex < panelNav.length){
            panelNav.removeClass(active);
            synergyEffectBodyItem.removeClass(active);
            const activeItem = $(panelNav[activeIndex]);
            const synergyEffectBodyItemActive = $(synergyEffectBodyItem[activeIndex]);
            activeItem.addClass(active);
            synergyEffectBodyItemActive.addClass(active);
        }

        if(activePanelNavIndex !== activeIndex){
            activePanelNavIndex = activeIndex;
            activePanelNavSuccess = true;
        }

        // checkIcons(percent)
    }
});

//........ Slider


let activeIndex = 1;

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
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
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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



