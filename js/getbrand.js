$(function(){
    //开始渲染数据 发送ajax请求
    var brandid=tools.getParm("brandTitleId");
    $.ajax({
        type:"get",
        data:{
            brandtitleid:brandid,
        },
        url:"http://localhost:9090/api/getbrand",
        success:function(data){
            console.log(data);
             $(".brand_show").html(template("tpl",data));
        }
    });



});