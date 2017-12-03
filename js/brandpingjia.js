$(function(){
    var productid=tools.getParm("productid");
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getproductcom",
        data:{
            productid:productid,
        },
        success:function(data){
            console.log(data);
            $(".desc").html(template("tpl",data));
        }
    })
})