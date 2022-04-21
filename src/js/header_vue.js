
    new Vue({
            el: '#wrapper',
            data: {
                    // isShowingCart: false,
                    products: [
                            {
                                    id: '1',
                                    title: 'Ginevra Benci ｜ 複製畫',
                                    price: 1000,
                                    thumb: './img/Shop/products/D/p1.png',
                                    amount: 0,
                                    amountShow: 1,
                                    showingIcon: false
                            },
                            {
                                    id: '2',
                                    title: '救世主 ｜ 複製畫',
                                    price: 2000,
                                    thumb: './img/Shop/products/D/p2.png',
                                    amount: 0,
                                    amountShow: 1,
                                    showingIcon: false
                            },
                    ]
            },
            created() {
               
                    const old_data = localStorage.getItem('items') // 看購物車有沒有東西
                    if (old_data) {
                            let value = JSON.parse(old_data);
                            this.products = value
                            console.log(
                                    '6456'
                            );

                    }
            },


            methods: {
                    openCart() {
                            // 顯示購物車
                            var shoppingcartbk = document.getElementById('i_shoppingCart_bk');
                            if (shoppingcartbk.style.display === 'none') {
                                    shoppingcartbk.style.display = 'block';
                            };

                            //可以試著用toggle
                            var close = document.getElementsByClassName('btn-close');
                            for (let i = 0; i < close.length; i++) {
                                    close[i].addEventListener('click', function () {
                                            if (this.closest('.i_background').style.display === 'block') {
                                                    this.closest('.i_background').style.display = 'none';
                                            }
                                    });
                            };
                    },

                    // 點擊 - / + 後的動作
                    minusOne(product) {
                            product.amount--
                            product.amount = (product.amount < 1) ? 1 : product.amount
                    },
                    addOne(product) {
                            product.amount++
                            product.amount = (product.amount > 50) ? 50 : product.amount
                    },

                    // 點擊 add to cart 後的動作
                    addToCart(product) {
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
                    // 在購物車裡移除單一品項 ( 把數量設置成 0 )
                    remove(product) {
                            product.amount = 0
                    },

            },

            computed: {
                    // 購物車裡的品項
                    productsInCart() {
                            return this.products

                                    // 只顯示購買數量 > 0 的項目
                                    .filter(p => p.amount)
                                    // 算出每個產品的小計
                                    .map(p => {
                                            p.sum = p.amount * p.price
                                            return p
                                    })
                    },

                    // 木前購買的金額
                    total() {
                            return this.productsInCart
                                    .reduce((sum, p) => (sum + p.sum), 0)
                    }
            },
    });
