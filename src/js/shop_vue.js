// 設定LaclStorage，放在變數中以後若要改SessionStorage
const storage = localStorage;

// Vue.component('the-cart', {
//   template: '#cart',
//   props: ['counts', 'total'], //counts接chooseItem陣列
//   methods: {
//     plus(index) {
//       this.$emit('to-plus', index); //子元件傳值給父元件用$emit(自訂事件)
//       // this.counts[index].count++;
//       console.log('有偵測到功能');
//     },
//     sub(index) {
//       this.$emit('to-sub', index);
//       console.log('有偵測到功能');
//     },
//     remove(index) {
//       this.$emit('to-remove', index);
//       console.log('有偵測到刪除功能');
//     },
//   },
//   // mounted() {
//   //   Array.prototype.forEach.call(
//   //     document.querySelectorAll('.bar'),
//   //     function (el) {
//   //       new SimpleBar(el);
//   //     },
//   //   );
//   // },
// });

// ======數字轉千分符======
Vue.filter('currency', function (price) {
  return parseInt(price).toLocaleString('en-US');
  //先轉成數字，再讓toLocaleString內建的轉成字串方法執行千分符並顯示，沒加parseInt在這會失敗
});

let data = {
    
  product: [],
 

//   selected: 0,
  //selected設初值為0，與用品的val相符
  //預設的值要能跟上面其中一個的value值吻合，否則畫面的下拉選單初始值會是空白的
  //如果預設要是第一個請選擇的話，可以把value值設為空值
  clicked: false,
  chooseItem: [], //被選擇加入的商品
  page: 0,
  currentPage: [],
  total: 0, //全部商品總額，初值為0
  ADDRESSEE: '',
  PHONE: '',
  ADDRESS: '',
  // cartItem: [],
  // customItem: [],
  result: null,
  cart: false,
  img: '',
  i: 1,
  petsPic: null,
  
};

new Vue({
  el: '#forCart',
    
    data() {
        return {
            selected: 0,
            all_data: [
                {
                    title: 'Vincent van Gogh',
                    hover: '文森·威廉·梵谷',
                    index: 0,
                    list: [
                          
                        ],
                },
                {
                    title: 'Pablo Ruiz Picasso',
                    hover:'巴勃羅·魯伊·畢卡索',
                    index: 1,
                    list: [],
                },
                {
                    title: 'Oscar-Claude Monet',
                    hover: '奧斯卡·克洛德·莫內',
                    index: 2,
                    list: [],
                    
                },
                {
                    title: 'Leonardo da Vinci',
                    hover: '李奧納多·達文西',
                    index: 3,
                    list: []
                },
    
            ],
        }
  },
  
  created() {
    fetch("./php/product.php")
    .then(res => res.json())
    .then(res => {
        this.product = res
    })
//     var self = this;
// //     //對前端頁面資料進行初始化

//     axios.post('./php/product.php').then(function (res) {
//       self.product = res.data;
//     });
  },



  mounted() {
    this.chooseItem = JSON.parse(localStorage.getItem('items'));
    //因為跳頁後整個new Vue會重跑，在這時候chooseItem還沒有東西，畫面自然不會渲染上去，因此在created或mounted再抓一次localStorage的東西，就能同步顯示，而created或mounted生命週期一前一後而已，兩者差異較細微，基本上寫一樣的東西都會成功
    this.showTotal(); //在mounted階段呼叫這個methods，得到所有商品加總價錢
    this.total = localStorage.getItem('total');
  },
    methods: {
        // switch(e) { 
        //     let i = $(e.target).data("index");
        //     console.log(i);
        // },
        
    // loginCheck() {
    //   $.ajax({
    //     method: 'POST',
    //     url: './php/front_end_API/M_getsession_MID.php',
    //     success: response => {
    //       if (response === '"N"') {
    //         alert('請先登入會員');
    //         $('#m_sign_in_bk').show();
    //       } else {
    //         this.FK_MEMBER_ID = parseInt(response.split(`"`).join(''));
    //         sessionStorage.clear();

    //         $.ajax({
    //           method: 'POST',
    //           url: './php/front_end_API/S_Insert_booking.php',
    //           data: {
    //             FK_MEMBER_ID: this.FK_MEMBER_ID,
    //             ADDRESSEE: this.ADDRESSEE,
    //             PHONE: this.PHONE,
    //             ADDRESS: this.ADDRESS,
    //             chooseItem: this.chooseItem,
    //           },
    //           dataType: 'text',
    //           success: () => {
    //             alert('購物完成');
    //             window.localStorage.clear();
    //             window.location.href = './Mall.html';
    //           },
    //           error: function (exception) {
    //             alert('數據載入失敗: ' + exception.status);
    //           },
    //         });
    //       }
    //     },
    //     error: function (exception) {
    //       alert('數據載入失敗: ' + exception.status);
    //     },
    //   });
    // },

    //======開啟搜尋輸入框======
    showInput() {
      if (this.clicked == false) {
        this.clicked = true;
      } else {
        this.clicked = false;
      }
    },

    getIMG(item) {
      this.img = item.PRODUCT_IMG;
      this.customItem = item;
    },

    merge() {
      var c = document.getElementById('canvas');
      var ctx = c.getContext('2d');

      $('.Selected').each(function () {
        ctx.drawImage(this, 50, 0, 400, 400);
      });

      $('.petIMG').each(function () {
        ctx.drawImage(this, 140, 80, 200, 200);
      });
      this.result = c.toDataURL('image/png');

      this.cart = true;
    },

    //上傳寵物照片
    uploadIMG() {
      let file = document.getElementById('theFile').files[0];
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener('load', () => {
        let image = document.getElementById('image');
        image.src = readFile.result;
        this.petsPic = image.src;
      });
    },

    // addCustomCart() {
    //   this.i++;

    //   let Custom = {
    //     item_id: this.customProducts.PRODUCT_ID,
    //     item_name: `客製化商品${this.i}`,
    //     item_price: '600',
    //     item_type: '客製化商品',
    //     item_count: '1',
    //     item_img: this.result,
    //     item_total_price: '600',
    //   };

    // if (!this.chooseItem.includes(Custom)) {
    //   this.chooseItem.push(Custom);
    // }
    //   if (this.chooseItem.indexOf(Custom) == -1) {
    //     this.chooseItem.push(Custom); //chooseItem['陣列']
    //   }

    //   let items = JSON.stringify(this.chooseItem);
    //   localStorage.setItem('items', items);

    //   var c = document.getElementById('canvas');
    //   var ctx = c.getContext('2d');
    //   ctx.clearRect(0, 0, c.width, c.height);
    //   this.result = null;
    //   this.img = '';

    //   this.cart = false;
    // },

    //======隱藏搜尋輸入框======
    hideInput() {
      if (this.selected < 2) {
        //如果切頁到非用品頁，input輸入框隱藏，點回用品頁時就會重置
        this.clicked = false;
        this.input.text = ''; //切頁後清空輸入內容，切回時就會讓頁面重置，防止切回輸入結果還在的情況
      }
    },

    //======商品加到購物車======
    addToCart(product) {
      // if (!this.cartItem.includes(product)) {
      //   this.cartItem.push(product);
      // }
      alert('成功加入購物車');
      // 只要一按加到購物車就存到localStorage

      let cart = {
        item_id: product.PRODUCT_ID,
        item_img: product.PRODUCT_IMG,
        item_name: product.PRODUCT_NAME,
        item_count: product.count,
        item_price: product.PRODUCT_PRICE,
        item_total_price: product.PRODUCT_PRICE, //計算總價用，初始值為各商品初始價錢
      };
      // 設定localStorage的value要放的資料

      let value = JSON.parse(localStorage.getItem('items'));
      // getItem() 方法中輸入key可以得到對應的value，並轉換成JS物件型態

      if (value) {
        let repeat = false; //設定repeat變數為false，當開關
        for (let i in value) {
          if (value[i].item_id == cart.item_id) {
            value[i].item_count = parseInt(value[i].item_count) + 1;
            repeat = true;
            //如果value的item_id等於cart的item_id，數量直接+1，並且repeat此時變更為true

            //單樣商品價錢更新，總價為初始價錢*數量，並賦值給item_total_price
            value[i].item_total_price =
              parseInt(value[i].item_price) * parseInt(value[i].item_count);
          }
        }
        if (!repeat) {
          //if(!repeat)的觀念在if條件裡面是表示:是不是false，而非反轉成true
          value.push(cart);
        }
      } else {
        // 若items裡尚未有value，value就是cart，並以陣列包住
        value = [cart];
      }
      storage.setItem('items', JSON.stringify(value));
      // 加到localStorage，key為items，value為字串化後的items

      // if (this.chooseItem.indexOf(product) == -1) {
      //   this.chooseItem.push(product); //chooseItem['陣列']
      // }
    },

    //======購物車商品數量增加======
    increase(pointer) {
      let counts = JSON.parse(localStorage.getItem('items'));
      for (let i in counts) {
        if (counts[pointer].item_id == this.chooseItem[i].item_id) {
          counts[pointer].item_count = parseInt(counts[pointer].item_count) + 1;

          //價錢更新，總價為初始價錢*數量，並賦值給item_total_price
          counts[pointer].item_total_price =
            parseInt(counts[pointer].item_price) *
            parseInt(counts[pointer].item_count);
        }
      }

      //因為只針對localStorage改動，而畫面是抓chooseItem的資料渲染的，所以要再讓chooseItem等於改動後的counts陣列，畫面抓chooseItem才是改動後的資料
      this.chooseItem = counts;
      this.showTotal();
      storage.setItem('items', JSON.stringify(counts));
    },

    //======購物車商品數量減少======
    decrease(pointer) {
      let counts = JSON.parse(localStorage.getItem('items'));
      for (let i in counts) {
        if (
          counts[pointer].item_id == this.chooseItem[i].item_id &&
          counts[pointer].item_count > 1
          //商品數量大於1才能減，直到最小為1
        ) {
          counts[pointer].item_count = parseInt(counts[pointer].item_count) - 1;

          //價錢更新，總價為初始價錢*數量，並賦值給item_total_price
          counts[pointer].item_total_price =
            parseInt(counts[pointer].item_price) *
            parseInt(counts[pointer].item_count);
        }
      }

      //因為只針對localStorage改動，而畫面是抓chooseItem的資料渲染的，所以要再讓chooseItem等於改動後的counts陣列，畫面抓chooseItem才是改動後的資料
      this.chooseItem = counts;
      this.showTotal();
      storage.setItem('items', JSON.stringify(counts));
    },

    //======商品從購物車移除======
    removeToCart(pointer) {
      let check_delete = confirm('是否移除?');
      if (check_delete) {
        let counts = JSON.parse(localStorage.getItem('items'));
        for (let i in counts) {
          if (counts[i].item_id == this.chooseItem[pointer].item_id) {
            //相互比對ID
            counts.splice(i, 1); //localStorage刪除
            this.chooseItem.splice(pointer, 1); //畫面刪除
            this.showTotal();
          }
        }
        storage.setItem('items', JSON.stringify(counts));
      }
    },

    //======字型渲染======
    reRender() {
      window._jf.flush(); //手動更新justfont
    },

    //======開啟購物車======
    openCart() {
      this.chooseItem = JSON.parse(localStorage.getItem('items'));
      this.showTotal();
      var shoppingcartbk = document.getElementById('i_shoppingCart_bk');
      if (shoppingcartbk.style.display === 'none') {
        shoppingcartbk.style.display = 'block';
      }

      var close = document.getElementsByClassName('i_closeButton');
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
          if (this.closest('.i_background').style.display === 'block') {
            this.closest('.i_background').style.display = 'none';
          }
        });
      }
    },

    

  
    // ======所有商品總價計算======
    showTotal() {
      this.total = 0;
      for (let i in this.chooseItem) {
        this.total += parseInt(this.chooseItem[i].item_total_price);
      }
      // 對目前chooseItem裡的項目跑回圈，去加總每一項商品總價
      localStorage.setItem('total', JSON.stringify(this.total));
      // 計算完轉成字串加到localStorage
    },
  },
//   computed: {
//     //======關鍵字搜尋功能======
//     forsup() {
//       if (this.input.text) {
//         return this.info.filter(
//           itemName => itemName.PRODUCT_NAME.indexOf(this.input.text) !== -1,
//         );
//       } else {
//         return this.info;
//       }
//     },
//     forfood() {
//       if (this.input.text) {
//         return this.food.filter(
//           itemName => itemName.PRODUCT_NAME.indexOf(this.input.text) !== -1,
//         );
//       } else {
//         return this.food;
//       }
//     },
//   },
});

// //======卡號輸入自動跳下一格======
// document.addEventListener('DOMContentLoaded', function () {
//   var cards = document.getElementsByClassName('card');
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener('keydown', function (e) {
//       if (
//         (e.which >= 48 && e.which <= 57) ||
//         (e.which <= 105 && e.which >= 96) ||
//         e.which == 8
//       ) {
//         if (e.target.value.length == 0 && e.which == 8) {
//           let previous_el = this.previousElementSibling;
//           if (previous_el != null) {
//             previous_el.focus();
//           }
//         }
//       } else {
//         e.preventDefault();
//       }
//     });

//     // keyup
//     cards[i].addEventListener('keyup', function (e) {
//       let str = e.target.value.replace(/\D/g, '');
//       e.target.value = str;
//       if (str.length == 4) {
//         let next_el = this.nextElementSibling;
//         if (next_el != null) {
//           next_el.focus();
//         }
//       }
//     });
//   }
// });
