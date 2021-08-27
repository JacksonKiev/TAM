tippy('.tippy', {
    content: "Im a Yippy tooltip",
});
const wrapper = document.querySelector('.wrapper');
let menuLinks = document.querySelectorAll('.menu__link_header');
let pageSlider = new Swiper('.page__body', {
    wrapperClass: 'page__wrapper',
    slideClass: 'page__screen',
    direction: 'vertical',
    slidesPerView: 'auto',
    parallax: 'true',
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    watchOverflow: true,
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'page__bullet',
        bulletActiveClass: "page__bullet_active"
    },
    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag__scroll",
        draggable: true
    },
    init: false,
    on: {
        init: function () {
            menuSlider();
            setScrollType();

        },

        slideChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active-block');

        },
        resize: function () {
            setScrollType();
        }
    },

});


function menuSlider() {

    if (menuLinks.length > 0) {


        menuLinks[pageSlider.realIndex].classList.add('_active-block');
        console.log(menuLinks.length);
        // console.log(menuLinks[pageSlider.realIndex]);
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];

            menuLink.addEventListener("click", function (e) {
                menuSliderRemove();
                pageSlider.slideTo(index, 800);
                menuLink.classList.add('_active-block');
                e.preventDefault();

            });
        }
    }
}

function menuSliderRemove() {
    let menuLinkActive = document.querySelector('.menu__link._active-block');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active-block');
    }
}



function setScrollType() {
    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;

    }

    for (let index = 0; index < pageSlider.slides.length; index++) {
        const pageSlide = pageSlider.slides[index];
        const pageSlideContent = pageSlide.querySelector('.screen__content');
        if (pageSlideContent) {
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if (pageSlideContentHeight > window.innerHeight) {

                wrapper.classList.add('_free');

                pageSlider.params.freeMode = true;
                console.log('1');
                break;

            }
        }

    }
}

pageSlider.init();


let intViewportWidth = window.innerWidth;
let isol = document.querySelector('.isol__types');


const head = document.head;
const meta = document.querySelector('meta[name="viewport"]');
const content = meta.getAttribute('content');

if (intViewportWidth <= 900) {
    meta.setAttribute('content', 'width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0');
    // isol.classList.add('_swiper');


} else {
    meta.setAttribute('content', 'width=1920');
    // isol.classList.remove('_swiper');
}

// window.addEventListener('resize', function () {
//             if (window.innerWidth <= 1400) {
//                 // isol.classList.remove('_swiper');
//                 //     let sliderSlider4 = new Swiper('.isol__types', {
//                 //         /*
//                 //         effect: 'fade',
//                 //         autoplay: {
//                 //             delay: 3000,
//                 //             disableOnInteraction: false,
//                 //         },
//                 //         */

//                 //         observer: true,
//                 //         observeParents: true,
//                 //         slidesPerView: 1,
//                 //         spaceBetween: 0,
//                 //         // autoHeight: true,
//                 //         speed: 800,
//                 //         //touchRatio: 0,
//                 //         //simulateTouch: false,
//                 //         loop: true,
//                 //         //preloadImages: false,
//                 //         //lazy: true,
//                 //         // Dotts
//                 //         //pagination: {
//                 //         //	el: '.slider-quality__pagging',
//                 //         //	clickable: true,
//                 //         //},
//                 //         // Arrows
//                 //         navigation: {
//                 //             nextEl: '.large__controls .more__item_next',
//                 //             prevEl: '.large__controls .more__item_prev',
//                 //         },
//                 //         /*
//                 //         breakpoints: {
//                 //             320: {
//                 //                 slidesPerView: 1,
//                 //                 spaceBetween: 0,
//                 //                 autoHeight: true,
//                 //             },
//                 //             768: {
//                 //                 slidesPerView: 2,
//                 //                 spaceBetween: 20,
//                 //             },
//                 //             992: {
//                 //                 slidesPerView: 3,
//                 //                 spaceBetween: 20,
//                 //             },
//                 //             1268: {
//                 //                 slidesPerView: 4,
//                 //                 spaceBetween: 30,
//                 //             },
//                 //         },
//                 //         */
//                 //         on: {
//                 //             lazyImageReady: function () {
//                 //                 ibg();
//                 //             },
//                 //         }
//                 //         // And if we need scrollbar
//                 //         //scrollbar: {
//                 //         //	el: '.swiper-scrollbar',
//                 //         //},
//                 //     });
//                 // }
//             });