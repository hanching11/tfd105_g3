console.log('ok')

"use strict";

// 從外部html 載入nav, header, footer (此方法會產生快取，抓到舊的檔案)
// $(".Mynav").load("nav.html");
// $(".Myheader").load("header.html");
// $(".Myfooter").load("footer.html");

// go to top
// document.addEventListener('DOMContentLoaded', function () {
//     $(function () {
//         var $win = $(window);
//         var $backToTop = $('.js-back-to-top');
//         // 當user滾動到離頂部200像素時，展示回到頂部按鈕
//         $win.scroll(function () {
//             if ($win.scrollTop() > 200) {
//                 $backToTop.show();
//             } else {
//                 $backToTop.hide();
//             }
//         });
//         // 當user點擊按鈕時，通過動畫效果返回頭部
//         $backToTop.click(function () {
//             $('html, body').animate({ scrollTop: 0 }, 700);
//         });
//     });
// });

// 計算文字做刪節
// $(function(){
//     var len = 800; // 超過多少個字以"..."取代
//     $(".JQellipsis").each(function(i){  //記得加class

//         // 鼠標滑到刪節的文字段落上會出現全部的內容
//         if($(this).text().length>len){
//             $(this).attr("title",$(this).text());
//             var text=$(this).text().substring(0,len-1)+"...";
//             $(this).text(text);
//         }
//     });
// });

// 漢堡子選單
// $("a.ham_link").on("click", function(e){
//     // console.log("aaa");
//     e.preventDefault();
//     $("ol.sub_ham").toggle("-on");
// });

// 修改顏色!!!
// $(document).ready(function() {
//     $('#myContainer').multiscroll({
//         sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c'],
//         anchors: ['first', 'second', 'third'],
//         menu: '#menu',
//             navigation: true,
//             navigationTooltips: ['One', 'Two', 'Three'],
//             loopBottom: true,
//             loopTop: true
//     });
// });