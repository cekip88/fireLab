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

gsap.timeline({scrollTrigger: `.banner-list`}).staggerFrom(`.banner-q`, .5, {x:-50,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.head`}).staggerFrom(`.head-q`, .5, {x:-50,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.c-1`}).staggerFrom(`.c-1c`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.c-2`}).staggerFrom(`.c-2c`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.c-3`}).staggerFrom(`.c-3c`, .5, {y:-15,opacity:0}, .5);
gsap.timeline({scrollTrigger: `.c-4`}).staggerFrom(`.c-4c`, .5, {y:-15,opacity:0}, .5);