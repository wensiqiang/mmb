$(function(){
//首先渲染导航框中的数据
$.ajax({
    type:"get",
    url:"http://localhost:9090/api/getindexmenu",
    success:function(data){
        console.log(data);
        $(".nav_info").html(template("tpl",data));
        //导航只能显示两列数据
        //找到导航中的li标签
        $(".nav_info").find("li:gt(7)").addClass("change");
            // var lis=$(".nav_info li");
            // console.log(lis);
            // for(var i=8;i<lis.length;i++){
            // lis[i].style.display="none";
            // }
            // //当我们点击更多按钮的时候 就出现第三列数据 再次点击后就消失
            var $target=$(".nav_info").find("li:eq(7)");
            var $next=$(".nav_info").find("li:gt(7)");
            $target.on("click",function(){
                if($next.hasClass("change")) {
                    $next.removeClass("change");
                }else{
                    $next.addClass("change");
                }
            });
    }
});
    //点击比价搜索进入相应页面





//渲染下面每一条数据
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getmoneyctrl",
        success:function(data){
            console.log(data);
            //渲染数据
            $(".product_list").html(template("tpl2",data));
        }
    });
});