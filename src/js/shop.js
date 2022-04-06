$(document).ready(function() {
    // Swiper: Slider
            new Swiper('.swiper-container', {
            loop: true,
            nextButton: '.swiper-button-nextone',
            prevButton: '.swiper-button-prevone',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 15,
            breakpoints: {
                    1920: {
                    slidesPerView: 4,
                    spaceBetween: 30
                    },
                    1028: {
                    slidesPerView: 2,
                    spaceBetween: 30
                    },
                    480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
            }
            });
    });