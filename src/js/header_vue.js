new Vue({
        el: '#forCart',
        data: {
                hascoupon: false,
                // isShowingCart: false,
                orderTime:'',
                recipient:
                {
                        sendName: '',
                        mail: '',
                        sendPhone: '',
                        name: '',
                        recipientPhone: '',
                        address: '',
                        company: '',
                        taxId: '',
                },

                products: [
                        {
                                id: '1',
                                title: '亞嘉杜花園內的莫內夫人及孩子',
                                price: 1000,
                                thumb: './img/Shop/products/D/p6.png',
                                info: '日期: 1885 | 風格: 現實主義 | 藝術類型: 風俗畫 | 媒材: 油彩, 畫布 | 地點: 梵高博物館 | 尺寸: 82 x 114 公分',
                                amount: 0,
                                amountShow: 1,
                                showingIcon: false
                        },
                        {
                                id: '2',
                                title: '救世主 ｜ 複製畫',
                                price: 2000,
                                thumb: './img/Shop/products/D/p2.png',
                                info: '日期: 1885 | 風格: 現實主義 | 藝術類型: 風俗畫 | 媒材: 油彩, 畫布 | 地點: 梵高博物館 | 尺寸: 82 x 114 公分',
                                amount: 0,
                                amountShow: 1,
                                showingIcon: false
                        },
                ],
                // orderDetail:[
                //         {

                //         },

                // ],
        },
        created() {

                const old_data = sessionStorage.getItem('items') // 看購物車有沒有東西
                //     console.log(items);
                if (old_data) {
                        let value = JSON.parse(old_data);
                        this.products = value
                        // console.log(
                        //         '6456'
                        // );

                }

                const old_infodata = sessionStorage.getItem('info') // 看訂單有沒有東西
                //     console.log(items);
                if (old_infodata) {
                        let infoValue = JSON.parse(old_infodata);
                        this.recipient = infoValue
                }

                const old_coupondata = sessionStorage.getItem('coupon') // 看訂單有沒有東西
                //     console.log(items);
                if (old_coupondata) {
                        this.hascoupon = old_coupondata;
      

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

                goCart(){
                        function loginMember(msg, icon, html) {
                                Swal.fire({
                                    title: msg,
                                    icon: icon,
                                    html: html,
                
                                    showConfirmButton: false, // 確認按鈕（預設會顯示不用設定）
                                    confirmButtonText: '參加活動', //　按鈕顯示文字
                                    confirmButtonAriaLabel: '參加活動', // 網頁無障礙用
                                    confirmButtonColor: '#75706b', // 修改按鈕色碼
                
                                    // 使用同確認按鈕
                                    // showDenyButton: true, // 否定按鈕
                                    showCancelButton: false, // 取消按鈕
                
                                    buttonsStyling: false, // 是否使用sweetalert按鈕樣式（預設為true）
                                })
                            }
                        var customerId = sessionStorage.login;
                        console.log(sessionStorage.login);
                        if (customerId != 'true') {
                        loginMember('<strong>尚未登入會員</strong>', 'error','<button class="btn btn-warning m-3"><a href="./login.html" style="color: #fff">前往登入</a></button> ')
                        // alert('尚未登入會員')
                        }else{
                                window.location.href = './checkout1.html';     
                        };
                },

               // 點擊 - / + 後的動作
               minusOne(product) {
                product.amount--;
                product.amount = (product.amount < 1) ? 1 : product.amount;

                const items = JSON.parse(sessionStorage.getItem('items'));
                for (let item of items.filter(item => item.id === product.id)) {
                        item.amount--;
                        item.sum = item.price * item.amount;
                }

                sessionStorage.setItem('items', JSON.stringify(items));
        },
        addOne(product) {
                product.amount++;
                product.amount = (product.amount > 50) ? 50 : product.amount;

                const items = JSON.parse(sessionStorage.getItem('items'));
                for (let item of items.filter(item => item.id === product.id)) {
                        item.amount++;
                        item.sum = item.price * item.amount;
                }

                sessionStorage.setItem('items', JSON.stringify(items));
        },

                // 點擊 add to cart 後的動作
                addToCart(product) {
                        alert('成功加入購物車!');
                        product.amount += product.amountShow
                        product.showingIcon = true
                        setTimeout(() => {
                                product.showingIcon = false
                        }, 800)
                        sessionStorage.setItem('items', JSON.stringify(this.products));
                        // sessionStorage.setItem('info', JSON.stringify(this.ordername));


                        // this.push(product).JSON.parse(localStorage.getItem('items'));
                        // console.log(item);
                },
                // 在購物車裡移除單一品項 ( 把數量設置成 0 )
                remove(product) {
                        product.amount = 0
                },

                orderSend() {
                        sessionStorage.setItem('info', JSON.stringify(this.recipient));
                        // console.log('abc');
                        orderTime = new SimpleDateFormat("yyMMdd");
                        now = new Date();
                        currentDate = formatShort.format(now);
                       console.log(currentDate);
                },

                useCoupon(){
                       this.hascoupon = true;
                       sessionStorage.setItem('coupon', this.hascoupon);

                },

                submitOrder() {
                        alert('成功加入購物車!');
                        fetch("./php/M_checkout.php", {
                                method: 'POST',
                                // body: formData,
                                headers: {
                                        "Content-Type": "application/json",
                                },
                                mode: "cors",
                                body: JSON.stringify({
                                        address: this.recipient.address,
                                        items: JSON.parse(sessionStorage.getItem('items')),
                                        orderTotal: this.orderTotal
                                }),
                        })
                                .then(resp => resp.json())
                                .then(resp => {
                                        alert(resp.status);
                                })
                }

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
                },

                // 加上運費
                orderTotal() {
                       let total = this.productsInCart
                                .reduce((sum, p) => (sum + p.sum), 0) + 1000
                        return this.hascoupon ? total -= 100: total 
                },

                // // 折扣碼
                // couponTotal() {
                // return this.productsInCart
                //         .reduce((sum, p) => (sum + p.sum), 0)+1000
                // },


        },
});

document.addEventListener("DOMContentLoaded", function () {
});
$("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $(".nav-list").toggleClass("on");
});

$(".sub-nav").on("click", function () {
        $(".sub-nav > li").toggle();
});

$(".sub-nav2").on("click", function () {
        $(".sub-nav2 > li").toggle();
});

$('.sub-nav').on("click", function () {
        $('#tg1').toggleClass("fas fa-plus-square")
        $('#tg1').toggleClass("fa-regular fa-square-minus")

});

$('.sub-nav2').on("click", function () {
        $('#tg2').toggleClass("fas fa-plus-square")
        $('#tg2').toggleClass("fa-regular fa-square-minus")

});

// 滾動後選單消失 X 變回漢堡

var previousScroll = 0;

window.addEventListener('scroll', function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > 100 && currentScroll < $(document).height() - $(window).height()) {
                if (currentScroll > previousScroll) {
                        hideNav();
                }
                previousScroll = currentScroll;
        }

});

function hideNav() {
        $("button.hamburger").removeClass("is-active")
        $(".nav-list").removeClass("on")
}

