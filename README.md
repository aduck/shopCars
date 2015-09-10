# shopCars
基于jQuery,之前必须先引用jquery

调用方法：<br />
//$(".J_cars_btn")为购物车按钮<br />
$(".J_cars_btn").shopCars({<br />
    show:$(".J_cars_num"),  //购物车商品个数容器<br />
    thumb:"xq01.jpg",  //商品缩略图路径<br />
    speed:1000, //缩略图滑动速度<br />
    disabled:true  //是否禁用按钮<br />
});
