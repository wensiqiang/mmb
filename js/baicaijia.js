$(function(){

         //顶部li滑动
        // 使用框架来简单实现滚动效果
        new IScroll(".fenlei",{scrollX:true,scrollY:false});

   //发送ajax请求 渲染页面数据
    //渲染标题
   $.ajax({
       type:"get",
       url:"http://localhost:9090/api/getbaicaijiatitle",
       success:function(data){
           console.log(data);
           $(".baicai_show").html(template("tpl",data));
           $(".baicai_show").find("li:eq(0)").addClass("active").siblings().removeClass("active");
       },
   });


   //渲染下面商品列表
    var titleid=0;
    function render(titleid){
        var titleid=tools.getParm(titleid)||0;
    $.ajax({
        type:"get",
        data:{
          titleid:titleid,
        },
        url:"http://localhost:9090/api/getbaicaijiaproduct",
        success:function(data){
            console.log(data);
            $(".main").html(template("tpl2",data));
        }
    });
    };
    render(titleid);
      // 拿到数据
            var lis=$(".baicai_show").children("li");
            console.log(lis);


    //点击上面的li标签里的a标签 下面自动显示对应的商品列表
    $(".baicai_show").on("click","li",function(){
        var id=$(this).data("id");
         render(id);
    });

});