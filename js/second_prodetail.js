$(function () {
    var productid = tools.getParm("productid");
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getmoneyctrlproduct",
        data:{
            productid:productid,
        },
        success:function (data) {
            console.log(data);
            $(".contain").html(template("tpl",data))
        }
    })
})
