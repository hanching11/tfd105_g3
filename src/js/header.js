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