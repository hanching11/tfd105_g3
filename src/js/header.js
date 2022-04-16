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
    if (currentScroll > 200 && currentScroll < $(document).height() - $(window).height()) {
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

//  購物車
$("#cart").on("click", function () {
    event.preventDefault();
    $(".shopping-cart").fadeToggle("fast").addClass('is-visible');
});

// 關掉購物車

$("#btn-cart-close").on("click", function () {
    $(".shopping-cart").hide();
});


 //彈窗
//  jQuery(document).ready(function($){
//     //open popup
//     $('.cd-popup-trigger').on('click', function(event){
//         event.preventDefault();
//         $('.cd-popup').addClass('is-visible');
//     });
    
//     //close popup
//     $('.cd-popup').on('click', function(event){
//         if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
//             event.preventDefault();
//             $(this).removeClass('is-visible');
//         }
//     });
//     //close popup when clicking the esc keyboard button
//     $(document).keyup(function(event){
//         if(event.which=='27'){
//             $('.cd-popup').removeClass('is-visible');
//         }
//     });
// });