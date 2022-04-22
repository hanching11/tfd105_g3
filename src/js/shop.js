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
                    slidesPerView: 3,
                    spaceBetween: 30
                    },
                    767: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    },
                    400: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
            }
            });
    });

   