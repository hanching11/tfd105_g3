// // 設定LaclStorage，放在變數中以後若要改SessionStorage
// // const storage = localStorage;

// // Vue.component('the-cart', {
// //     template: '#cart',
// //     props: ['counts', 'total'], //counts接chooseItem陣列
// //     methods: {
// //       plus(index) {
// //         this.$emit('to-plus', index); //子元件傳值給父元件用$emit(自訂事件)
// //         // this.counts[index].count++;
// //         console.log('有偵測到功能');
// //       },
// //       sub(index) {
// //         this.$emit('to-sub', index);
// //         console.log('有偵測到功能');
// //       },
// //       remove(index) {
// //         this.$emit('to-remove', index);
// //         console.log('有偵測到刪除功能');
// //       },
// //     },
// // });

// // ======數字轉千分符======
// // Vue.filter('currency', function (price) {
// //     return parseInt(price).toLocaleString('en-US');
// //     //先轉成數字，再讓toLocaleString內建的轉成字串方法執行千分符並顯示，沒加parseInt在這會失敗
// //   });
  
// //   let data = {
  
// //     info: [],
  
// //     food: [],
  
// //     clothes: [],
  
// //     input: {
// //       text: '',
// //     },
  
// //     selected: 0,
// //     //selected設初值為0，與用品的val相符
// //     //預設的值要能跟上面其中一個的value值吻合，否則畫面的下拉選單初始值會是空白的
// //     //如果預設要是第一個請選擇的話，可以把value值設為空值
// //     clicked: false,
// //     chooseItem: [], //被選擇加入的商品
// //     page: 0,
// //     currentPage: [],
// //     total: 0, //全部商品總額，初值為0
// //     ADDRESSEE: '',
// //     PHONE: '',
// //     ADDRESS: '',
// //     // cartItem: [],
// //     // customItem: [],
// //     result: null,
// //     cart: false,
// //     img: '',
// //     i: 1,
// //     productPic: null,
// // };

// new Vue({
//     el: '#forCart',
//     // data: data,
//     data:{
//         isShowingCart: false,
//             products: [
//                 {
//                 id: '2062',
//                 title:'Ginevra Benci ｜ 複製畫',
//                 price: 1000,
//                 thumb: './img/Shop/products/D/p1.png',
//                 amount: 0,
//                 amountShow: 1,
//                 showingIcon: false
//                 },
//             ]
 
//     },
//     mounted() {
//         console.log('s');
//     },
//     methods: {
       
//         //======開啟購物車======
//         openCart() {
//             let value = JSON.parse(sessionStorage.getItem('cart'));
//                 // getItem() 方法中輸入key可以得到對應的value，並轉換成JS物件型態
//                 // console.log(value);
//                 console.log('open');
           
//             if (value) {
//                 let repeat = false; //設定repeat變數為false，當開關
//                 for (let i in value) {
//                 if (value[i].item_id == cart.item_id) {
//                     value[i].item_count = parseInt(value[i].item_count) + 1;
//                     repeat = true;
//                     //如果value的item_id等於cart的item_id，數量直接+1，並且repeat此時變更為true

//                     //單樣商品價錢更新，總價為初始價錢*數量，並賦值給item_total_price
//                     value[i].item_total_price =
//                     parseInt(value[i].item_price) * parseInt(value[i].item_count);
//                 }
//                 }
//                 if (!repeat) {
//                 //if(!repeat)的觀念在if條件裡面是表示:是不是false，而非反轉成true
//                 value.push(cart);
//                 }
//             } else {
//                 // 若items裡尚未有value，value就是cart，並以陣列包住
//                 value = [cart];
//             }
//             sessionStorage.setItem('items', JSON.stringify(value));
            

//             // 顯示購物車
//             var shoppingcartbk = document.getElementById('i_shoppingCart_bk');
//             if (shoppingcartbk.style.display === 'none') {
//                 shoppingcartbk.style.display = 'block';
//             }
        
//             var close = document.getElementsByClassName('btn-close');
//             for (let i = 0; i < close.length; i++) {
//                 close[i].addEventListener('click', function () {
//                 if (this.closest('.i_background').style.display === 'block') {
//                     this.closest('.i_background').style.display = 'none';
//                 }
//                 });
//             }
//         },

//         // 點擊 - / + 後的動作
//         minusOne (product) {
//             product.amountShow--
//             product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow
//         },
//         addOne (product) {
//             product.amountShow++
//             product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
//         },

//         // 點擊 add to cart 後的動作
//         addToCart (product) {
//             product.amount += product.amountShow
            
//             product.showingIcon = true
//             setTimeout(() => {
//                 product.showingIcon = false
//             }, 800)
//         },

//         // 在購物車裡移除單一品項 ( 把數量設置成 0 )
//         remove (product) {
//             product.amount = 0
//         },

    

//     },
  

// });




