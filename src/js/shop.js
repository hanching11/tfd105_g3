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

    const app = new Vue({
        el: '#wrapper',
        mixins: [publicMixin],
        data() {
            // isShowingCart: false,
                return{
                        products: [
                                {
                                id: '1',
                                title: '111',
                                price: 0,
                                thumb: '',
                                amount: 0,
                                amountShow: 0,
                                showingIcon: false
                                },
                                // {
                                // id: '2',
                                // title: '救世主 ｜ 複製畫',
                                // price: 2000,
                                // thumb: './img/Shop/products/D/p2.png',
                                // amount: 0,
                                // amountShow: 1,
                                // showingIcon: false
                                // },
                                ]
                }
        },
        methods: {
                addToCart(product) {
                        console.log('aaaaa');
                    product.amount += product.amountShow
                    product.showingIcon = true
                    setTimeout(() => {
                            product.showingIcon = false
                    }, 800)
                    localStorage.setItem('items', JSON.stringify(this.products));
                    console.log('a');
                    // this.push(product).JSON.parse(localStorage.getItem('items'));
                    // console.log(item);
            },
        },

});