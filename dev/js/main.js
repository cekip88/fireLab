import { gsap } from './gsap/GreenSock.lib.js';
import { ScrollToPlugin } from "./gsap/ScrollToPlugin.js";
import { ScrollTrigger } from "./gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

$('.client-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.client-arrow.client-arrow-left'),
    nextArrow: $('.client-arrow.client-arrow-right'),
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});


document.querySelector('.asks-acc').onclick = function () {
    gsap.to(window, {duration: 1, scrollTo: ".attestat"});
};

document.querySelector('.lab-link').onclick = function () {
    gsap.to(window, {duration: 1, scrollTo: ".foot"});
};

document.querySelector('.head-callback-tablet').onclick = function () {
    gsap.to(window, {duration: 1, scrollTo: ".foot"});
};

document.querySelector('.head-callback').onclick = function () {
    gsap.to(window, {duration: 1, scrollTo: ".foot"});
};

document.querySelector('.banner-btn').onclick = function () {
    gsap.to(window, {duration: 1, scrollTo: ".services"});
};

for (let i = 1; i < 4; i++){
    gsap.timeline({scrollTrigger: `.services-${i}`}).from(`.services-${i}`, .5, {x:-50,opacity:0}, .5);
}
gsap.timeline({scrollTrigger: `.foot-ask`}).from(`.foot-ask`, .5, {x:-50,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.banner-list`}).staggerFrom(`.banner-q`, .5, {x:-50,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.head`}).staggerFrom(`.head-q`, .5, {x:-50,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.c-1`}).staggerFrom(`.c-1c`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.c-2`}).staggerFrom(`.c-2c`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.c-3`}).staggerFrom(`.c-3c`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.c-4`}).staggerFrom(`.c-4c`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.lab-text`}).staggerFrom(`.lab-text p`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.lab-text-big`}).staggerFrom(`.lab-text-big p`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.asks-list-1`}).staggerFrom(`.asks-list-1 .asks-item label>span`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.asks-list-2`}).staggerFrom(`.asks-list-2 .asks-item label>span`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.asks-list-3`}).staggerFrom(`.asks-list-3 .asks-item label>span`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.asks-list-4`}).staggerFrom(`.asks-list-4 .asks-item label>span`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.asks-list-5`}).staggerFrom(`.asks-list-5 .asks-item label>span`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.foot-conts`}).staggerFrom(`.foot-conts-item`, .5, {x:-50,opacity:0}, .5);