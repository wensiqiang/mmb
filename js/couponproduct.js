$(function(){
    //发送ajax请求 选渲染数据
    //拿到couponid
    var couponid=tools.getParm("couponid");
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getcouponproduct",
        data:{
            couponid:couponid,
        },
        success:function (data) {
            console.log(data);
            $(".coupon_count").html(template("tpl",data));
        }
    })
})