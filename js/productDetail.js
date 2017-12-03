$(function () {
    //获取浏览器地址栏中带过来的category
    var category=tools.getParm("category");
    console.log(category);
    //开始渲染数据
    var id=tools.getParm("productid");
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getproduct",
        data:{
            productid:id,
        },
        success:function(data){
            data.category=category;
            console.log(data);
            var third=data.result[0].productName;
            console.log(third);
            third=third.split(" ");
            console.log(third);
            data.jianjie=third[0];
            console.log(data.jianjie);

            $(".pro_detail").html(template("tpl",data));
            $(".break_nav").html(template("break_nav",data));
        }
    });

    //渲染下面的评论
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getproductcom",
        data:{
            productid:id,
        },
        success:function(data){
            console.log(data);
            $(".pro_pingjia").html(template("tpl2",data));
        }
    })


})