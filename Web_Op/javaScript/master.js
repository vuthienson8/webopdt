$(document).ready(function(){
    $(".danhmuc").show();
    $(".sanpham").hide();
    $(".tintuc").hide();

    $(".menu_danhmuc").click(function(){
        $(".danhmuc").show();
        $(".tintuc").hide();
        $(".sanpham").hide();
    });

    $(".menu_sanpham").click(function(){
        $(".sanpham").show();
        $(".danhmuc").hide();
        $(".tintuc").hide();
    });
    
    $(".menu_tintuc").click(function(){
        $(".tintuc").show();
        $(".danhmuc").hide();
        $(".sanpham").hide();
    });
});