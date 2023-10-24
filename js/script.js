const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


// ScrollTrigger.create({
//     trigger: "#youll-get",
//     start: `top top-=-79` ,
//     end: `top top-=2500`,
//     pin: true,
//     onUpdate: function (e){
//         const percent = e.progress * 100;
//         console.log(percent)
//
//     }
// });