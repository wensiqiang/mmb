$(function(){

    //发送ajax请求
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getinlanddiscount",
        success:function(data){
            console.log(data);
            $(".inland_show").html(template("tpl",data));
        }
    });
});