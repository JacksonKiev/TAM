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
console.log(intViewportWidth);
// var width = $(window).width();
// console.log(window.innerWidth);
// if (width <= 980) {
//     $('[name="viewport"]').attr('content', 'width=device-width, initial-scale=1');
//     $(".sec6__slider").removeClass('_swiper');

// } else {
//     $('[name="viewport"]').attr('content', 'width=1920');
//     $(".sec6__slider").toggleClass('sec6__grid');
//     $(".sec6__slider").toggleClass('_swiper');
// }

const head = document.head;
const meta = document.querySelector('meta[name="viewport"]');
const content = meta.getAttribute('content');
// const newMeta = document.createElement('meta');
if (intViewportWidth <= 980) {

    // newMeta.setAttribute('name', 'viewport');
    // newMeta.setAttribute('content', content.replace(/width=([^,]+),/i, 'width=device-width, initial-scale=1'));


    meta.setAttribute('content', 'width=device-width, initial-scale=1');
}
// else {
//     newMeta.setAttribute('name', 'viewport');
//     newMeta.setAttribute('content', content.replace(/width=([^,]+),/i, 'width=1920'));

// }
// head.removeChild(meta);
// head.appendChild(newMeta);