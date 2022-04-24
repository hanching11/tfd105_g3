new Vue({
    el: '#forCart',
    data: data,
    mounted() {
      this.chooseItem = JSON.parse(localStorage.getItem('items'));
      //因為跳頁後整個new Vue會重跑，在這時候chooseItem還沒有東西，畫面自然不會渲染上去，因此在created或mounted再抓一次localStorage的東西，就能同步顯示，而created或mounted生命週期一前一後而已，兩者差異較細微，基本上寫一樣的東西都會成功
      this.showTotal(); //在mounted階段呼叫這個methods，得到所有商品加總價錢
      this.total = localStorage.getItem('total');
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
});