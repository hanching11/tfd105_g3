

// ======數字轉千分符======
Vue.filter('currency', function (price) {
  return parseInt(price).toLocaleString('en-US');
  //先轉成數字，再讓toLocaleString內建的轉成字串方法執行千分符並顯示，沒加parseInt在這會失敗
});


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
                list: [],
                // class: 'active',
                img:"./img/Shop/authors/vanGogh.jpg",
                
            },
            {
                title: 'Pablo Ruiz Picasso',
                hover:'巴勃羅·魯伊·畢卡索',
                index: 1,
                list: [],
                img:"./img/Shop/authors/Picasso.png",
                
            },
            {
                title: 'Oscar-Claude Monet',
                hover: '奧斯卡·克洛德·莫內',
                index: 2,
                list: [],
                img:"./img/Shop/authors/Monet.jpg",
                
                
            },
            {
                title: 'Leonardo da Vinci',
                hover: '李奧納多·達文西',
                index: 3,
                list: [],
                img:"./img/Shop/authors/DaVinci.jpg",
            },

      ],
        
      all_mobile: [
        
        {
          artist_siquence: 1,
          index:1,
          class: 'flex-slide home',
          img: "./img/Shop/authors/Picasso.png",
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
          text_eng:'"The sunflower is mine, in a way."',
          text_chi: "❚ 某種程度來說，向日葵是屬於我的 ❚",
          showText:false,
          
      },
        {
          artist_siquence: 3,
          index:3,
          class: 'flex-slide home',
          img: "./img/Shop/authors/DaVinci.jpg",
          text_eng:'"PINXIT-MEA"',
          text_chi:"❚我所繪的❚",
          showText:false,

        },

  ],
        
      productList: [],
      // curProductList: [],
      product: [],
      
    } 
  },
  
  created() {
    fetch("./php/product.php")
      .then(res => res.json())
      .then(body => {
        // this.product = res
        this.productList = body;
      });

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
  }


    
});

