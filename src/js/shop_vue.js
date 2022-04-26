

// ======數字轉千分符======
Vue.filter('currency', function (price) {
  return parseInt(price).toLocaleString('en-US');
  //先轉成數字，再讓toLocaleString內建的轉成字串方法執行千分符並顯示，沒加parseInt在這會失敗
});


new Vue({
  el: '#forCart',


  data() {
    return {
      hascoupon: false,
      // isShowingCart: false,
      orderTime: '',
      order_id: '',
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
      selected: 0,
      all_data: [
        {
          title: 'Vincent van Gogh',
          hover: '文森·威廉·梵谷',
          index: 0,
          list: [],
          // class: 'active',
          img: "./img/Shop/authors/vanGogh.jpg",

        },
        {
          title: 'Pablo Ruiz Picasso',
          hover: '巴勃羅·魯伊·畢卡索',
          index: 1,
          list: [],
          img: "./img/Shop/authors/Picasso.jpg",

        },
        {
          title: 'Oscar-Claude Monet',
          hover: '奧斯卡·克洛德·莫內',
          index: 2,
          list: [],
          img: "./img/Shop/authors/Monet.jpg",


        },
        {
          title: 'Leonardo da Vinci',
          hover: '李奧納多·達文西',
          index: 3,
          list: [],
          img: "./img/Shop/authors/DaVinci.jpg",
        },

      ],

      all_mobile: [

        
        {
          artist_siquence: 1,
          index:1,
          class: 'flex-slide home',
          img: "./img/Shop/authors/Picasso.jpg",
          text_eng:'"Good artists copy, great artists steal."',
          text_chi:"❚ 好的藝術家懂複製，偉大的藝術家則擅於剽竊 ❚",
          showText:false,
        },
        {
          artist_siquence: 2,
          index:2,
          class: 'flex-slide home ',
          img: "./img/Shop/authors/Monet.jpg",
          text_eng:'"I thought, keep the light, you can stay."',
          text_chi:"❚ 我曾以為，留住光，就可以留住你 ❚",
          showText:false,
            
        },
        {
          artist_siquence: 0,
          index:0,
          class: 'flex-slide home',
          img: "./img/Shop/authors/vanGogh.jpg",
          text_eng: '"The sunflower is mine, in a way."',
          text_chi: "❚ 某種程度來說，向日葵是屬於我的 ❚",
          showText: false,

        },
        {
          artist_siquence: 3,
          index:3,
          class: 'flex-slide home',
          img: "./img/Shop/authors/DaVinci.jpg",
          text_eng: '"PINXIT-MEA"',
          text_chi: "❚我所繪的❚",
          showText: false,

        },

      ],

      productList: [],
      // curProductList: [],
      product: {
        product_id: '',
        product_name: '',
        product_price: 0,
        product_img: '',
        product_info: '',
        amount: 0,
        amountShow: 1,
        showingIcon: false
      },
      items: JSON.parse(sessionStorage.getItem('items')) ?? []
    }
  },

  created() {
    fetch("./php/product.php")
      .then(res => res.json())
      .then(body => {
        // this.product = res
        this.productList = body;
      });

    const old_data = sessionStorage.getItem('items') // 看購物車有沒有東西
    //     console.log(items);
    if (old_data) {
      let value = JSON.parse(old_data);
      this.product = value
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


    AOS.init({ });

  },



  mounted() {


  },
  methods: {

    activebanner(index) {
      // console.log(index);
      this.all_mobile.forEach(e => {
        e.class = "flex-slide home"
        e.showText = false
      });
      //要讓artist_siquence的順序與原本的index做區分
      //抓到資料後先存成變數
      const selected_siquence = this.all_mobile.filter(e => {

        return e.artist_siquence === index
      })[0]
      console.log(selected_siquence);
      //讓新的變數存取其屬性或資料
      selected_siquence.class = "flex-slide home active"
      selected_siquence.showText = true
    },

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

    goCart() {
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
        loginMember('<strong>尚未登入會員</strong>', 'error', '<button class="btn btn-warning m-3"><a href="./login.html" style="color: #fff">前往登入</a></button> ')
        // alert('尚未登入會員')
      } else {
        const items = JSON.parse(sessionStorage.getItem('items')) ?? [];
        sessionStorage.setItem('items', JSON.stringify(items.concat(this.items)));
        window.location.href = './checkout1.html';
      };
    },

    // 點擊 - / + 後的動作
    minusOne(item) {
      if (item.product_count === 1) {
        return;
      }
      item.product_count--;
      item.sum = item.product_price * item.product_count;
    },
    addOne(item) {
      if (item.product_count === 50) {
        return;
      }
      item.product_count++;
      item.sum = item.product_price * item.product_count;
    },

    // 點擊 add to cart 後的動作
    addToCart(product_id) {
      const product = this.productList.filter(item => item.product_id === product_id)[0];
      product.product_count = 1;
      product.sum = product.product_price;
      this.items.push(product);
      alert('成功加入購物車!');
    },

    // 在購物車裡移除單一品項 ( 把數量設置成 0 )
    remove(product_id) {
      this.items.splice(product_id, 1);
    },

   

    useCoupon() {
      this.hascoupon = true;
      sessionStorage.setItem('coupon', this.hascoupon);

    },
    orderSend() {
      sessionStorage.setItem('info', JSON.stringify(this.recipient));
      // console.log('abc');
      orderTime = new SimpleDateFormat("yyMMdd");
      now = new Date();
      currentDate = formatShort.format(now);
     console.log(currentDate);
    },

    submitOrder() {
      alert('訂單成功送出!');
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
          this.order_id = resp.order_id;
        })
    }
  },

  computed: {
    // 購物車裡的品項
    productsInCart() {
      return this.product

        // 只顯示購買數量 > 0 的項目
        .filter(p => p.amount)
        // 算出每個產品的小計
        .map(p => {
          p.sum = p.amount * p.price
          return p
        })
    },

    // 目前購買的金額
    total() {
      return this.items
        .reduce(function (sum, item) { return sum + item.product_price * item.product_count }, 0);
    },

    // 加上運費
    orderTotal() {
      let total = this.items
        .reduce((sum, p) => (sum + p.sum), 0) + 1000
      return this.hascoupon ? total -= 100 : total
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


