       
// ======數字轉千分符======
Vue.filter('currency', function (price) {
  return parseInt(price).toLocaleString('en-US');
  //先轉成數字，再讓toLocaleString內建的轉成字串方法執行千分符並顯示，沒加parseInt在這會失敗
});

var productInfo = new Vue({
    el: '#pdt_detail',
    data:{
   
      pdt:[],

    },
    beforeCreate() {
      let urlParams = new URLSearchParams(window.location.search);
      this.product_id = urlParams.get("id");
    },
    
    created() {

    },

    mounted() {
        let self = this;
        $.ajax({
          url: "php/get_product_info.php",
          type: "POST",
          data: {
            product_id: this.product_id,
          },
          success: function (resp) {
            console.log(resp);
            let getResp = JSON.parse(resp);
            self.pdt = getResp;
            
          },
        });
    
    
      },
      
});
