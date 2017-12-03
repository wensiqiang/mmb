$(function(){
    var brandtitleid=tools.getParm("brandTitleid");
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getbrandproductlist",
        data:{
            pagesize:10,
            brandtitleid:brandtitleid,
        },
        success:function (data) {
            console.log(data);
            //判断下面的按钮是否显示
            if(data.result.length==0){
                $(".footer ul").hide();
                var str='<p style="text-align: center;margin-top: 50px;font-size:16px;">对不起，没有搜到数据</p>';
                $(".footer").append(str);
            }else{
                $(".brand_show").html(template("tpl",data));
            }
        }
    });
})