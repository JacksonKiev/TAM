tippy('.tippy', {
    content: "Im a Yippy tooltip",
});
const wrapper = document.querySelector('.wrapper');
let menuLinks = document.querySelectorAll('.menu__link_header');
let intViewportWidth = window.innerWidth;


if (document.getElementsByClassName('page__body').length > 0) {
    console.log(intViewportWidth);
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
        let menuLinkActive = document.querySelector('.menu__link_header._active-block');
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
                    break;

                }
            }

        }
    }

    pageSlider.init();

}


let isol = document.querySelector('.isol__types');
// let scr_body = document.querySelector('body');
// let header = document.querySelector('header.header');

const head = document.head;
const meta = document.querySelector('meta[name="viewport"]');
const content = meta.getAttribute('content');
// let menuLinksAll = document.querySelectorAll('.menu__link');
// window.addEventListener('resize', function (e) {
//     if (intViewportWidth <= 980) {
//         if (menuLinkAll.classList.contains('menu__link_header')) {
//             menuLinkAll.classList.remove('menu__link_header')
//         }

//     }
//     // do stuff here
// });
if (intViewportWidth <= 980) {
    document.querySelector('.page__wrapper').classList.add('page__wrapper_adaptive');
    // if (document.querySelector('.link__iso figure').classList.contains('_gallery')) {
    //     //для html
    //     // document.querySelector('.link__iso').innerHTML = "<figure ><a href='service.html'><figcaption>Ізоляція суцільнометалевих кузовів</figcaption><img src='img/gallery/8.jpg' alt=''> </a></figure>";


    //     document.querySelector('.link__iso').innerHTML = `<figure ><a href=" "><figcaption>Ізоляція суцільнометалевих кузовів</figcaption><picture><source srcset=" <?php
    //     echo get_template_directory_uri(). '/assets/' . 'img/' 
    //    ?>gallery/8.webp" type="image/webp"><img src="<?php echo get_template_directory_uri() . '/assets/' . 'img/' ?>gallery/8.jpg" alt=""></picture> </a></figure>`;

    //     document.querySelector('.link__iso figure a').href = "<?php echo get_template_directory_uri(). '/service'?>";
    //     // document.querySelector('.link__iso figure picture source').srcset = "1";

    // }
}
// Сюда 
// let wpCL = document.querySelector('.page__wrapper');

// for (let index = 0; index < menuLinksAll.length; index++) {
//     const menuLinkAll = menuLinksAll[index];


//     menuLinkAll.addEventListener('click', function (e) {
//         e.preventDefault;
//         if (scr_body.classList.contains('_lock')) {

//             scr_body.classList.remove('_lock');

//         }
//         if (header.classList.contains('_active')) {

//             header.classList.remove('_active')
//         }
//         if (iconMenu.classList.contains('_active')) {

//             iconMenu.classList.remove('_active')
//         }
//         if (footer.classList.contains('_active')) {

//             footer.classList.remove('_active')
//         }

//         // if (document.querySelector('.page__wrapper').classList.contains('page__wrapper_adaptive')) 
//         // {

//         //     document.querySelector('.page__wrapper').classList.remove('page__wrapper_adaptive')
//         // }

//         document.querySelector('.page__wrapper').classList.add('page__wrapper_adaptive')
//     });
// }

// document.querySelectorAll('.page__wrapper .page__screen .screen__content#gal').forEach(anchor => {});
// anchor.addEventListener('click', function (e) {
// e.preventDefault();
// document.querySelector(this.getAttribute('href')).scrollIntoView({
//     behavior: 'smooth'
// });
// });


// let z = document.querySelectorAll('a');
// for (let i = 0; i < z.length; i++) {
//     console.log(z[i]);
//     console.log(z[i].href);
// console.log(z[i].dataset.link);

// } 
function removeClasses() {
    if (scr_body.classList.contains('_lock')) {
        scr_body.classList.remove('_lock');

    }
    if (header.classList.contains('_active')) {

        header.classList.remove('_active')
    }
    if (iconMenu.classList.contains('_active')) {

        iconMenu.classList.remove('_active')
    }
    if (footer.classList.contains('_active')) {

        footer.classList.remove('_active')
    }
    // document.querySelector('.page__wrapper').classList.remove('page__wrapper_adaptive');
}


let menuLinkM = document.querySelector('.menu-item_gal a');
if (menuLinkM) {
    menuLinkM.addEventListener('click', function (e) {

        console.log(menuLinkM);
        removeClasses();

    });
}

let menuLinkM59 = document.querySelector('.menu-item-59 a');
if (menuLinkM59) {
    menuLinkM59.addEventListener('click', function (e) {

        console.log(menuLinkM59);
        removeClasses();

    });
}
let menuLinkM42 = document.querySelector('.menu-item-42 a');
if (menuLinkM42) {
    menuLinkM42.addEventListener('click', function (e) {

        console.log(menuLinkM42);
        removeClasses();

    });
}
let menuLinkM69 = document.querySelector('.menu-item-69 a');
if (menuLinkM69) {
    menuLinkM69.addEventListener('click', function (e) {

        console.log(menuLinkM69);
        removeClasses();

    });
}
let menuLinkM65 = document.querySelector('.menu-item-65 a');
if (menuLinkM65) {
    menuLinkM65.addEventListener('click', function (e) {

        console.log(menuLinkM65);
        removeClasses();

    });
}
// e.target.href = e.target.attributes.getNamedItem('data-link').value;

// document.querySelectorAll('a[href="index.html#gal"]').forEach(anchor => {
// console.log("anchor");
// console.log(anchor);
// });




// let wpCustomLinks = document.querySelectorAll('.menu-item-type-custom');
// for (let index = 0; index < wpCustomLinks.length; index++) {
//     const wpCustomLink = wpCustomLinks[index];
//     wpCustomLink.addEventListener('click', function (e) {
//         e.preventDefault;
//         if (scr_body.classList.contains('_lock')) {
//             scr_body.classList.remove('_lock');

//         }
//         if (header.classList.contains('_active')) {
//             header.classList.remove('_active')
//         }
//         if (iconMenu.classList.contains('_active')) {
//             iconMenu.classList.remove('_active')
//         }
//         if (footer.classList.contains('_active')) {
//             footer.classList.remove('_active')
//         }
//         if (document.querySelector('.page__wrapper').classList.contains('page__wrapper_adaptive')) {
//             console.log('adapt');
//             document.querySelector('page__wrapper').classList.remove('page__wrapper_adaptive')
//         }

//     });
// }


function linkChange(e) {

    // if (e.target.classList.contains('menu__link_header')) {
    //     console.log(e.target.href);
    //     e.target.classList.remove('menu__link_header')
    // }
    e.target.href = e.target.attributes.getNamedItem('data-link').value;
    // console.log(e.target["data-link"]);
    // console.log(e.target.attributes.getNamedItem('data-link').value)


}

// if (intViewportWidth <= 980) {
//     meta.setAttribute('content', 'width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0');
//     // isol.classList.add('_swiper');


// } else {
//     meta.setAttribute('content', 'width=1920');
//     // isol.classList.remove('_swiper');
// }

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