$(function(){
    //发送ajax请求 渲染页面数据
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getbrandtitle",
        success:function(data){
            console.log(data);
            $(".brand_list").html(template("tpl",data));
        }
    })
})