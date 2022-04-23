    // 子選單按鈕切換
    $('.sub-nav').on("click", function(){
        $(".sub_nav-oping > p").toggle();
    })

    $('.sub-nav2').on("click", function(){
        $(".sub_nav2-address > p").toggle();
    })

    //回到最上方
    $("#goBackBtn").click(function () {
    // console.log("滑到最上方");
        const duration = 600;
        $("html, body").stop().animate({
            scrollTop: 0
        }, duration);
    });