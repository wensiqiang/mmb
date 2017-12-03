$(function(){
    //发送ajax请求 渲染数据
    //获取超市信息
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getgsshop",
        success:function(data){
            console.log(data);
            $(".list_fir").html(template("tpl",data));
        }
    });

    //获取地域信息
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getgsshoparea",
        success:function (data) {
            console.log(data);
            $(".list_sec").html(template("tpl2",data));

        }
    });

    //渲染主内容区的数据
    //先默认传值
     var shopid=0;
     var areaid=0;
    function render(shopid,areaid){
        var shopid=shopid || 0;
        var areaid= areaid ||0;
        $.ajax({
            type:"get",
            url:"http://localhost:9090/api/getgsproduct",
            data:{
                shopid:shopid,
                areaid:areaid,
            },
            success:function(data){
                console.log(data);
                $(".product_list").html(template("tpl3",data));
            }
        });
    }
    render();


    //当点击导航上面的li--点击京东
    $(".pro_fir").on("click",function(){
    //当点击京东的时候 其他两个导航条下面的下拉框隐藏
        $(".fir").toggle().siblings(".pro_list").hide();
        //点击下面每一个小标题
        $(".list_fir").off().on("click","li",function(e){
            //让刚开始默认选中的那个对号隐藏掉
            $(".fir .xuanzhong").hide();
            //点击那一条就让某一条上显示对号
            $(this).children(".xuanzhong1").toggle().parent().siblings().children(".xuanzhong1").hide();
            console.log($(this).data("shopid"));
            var shopId=$(this).data("shopid");
            //将li标签里面的内容更换
           var html= $(this).children("span").html();
           // console.log(html);
           $(".pro_fir span").html(html);
            //重新渲染数据
           render(shopId);
           //此时要将下拉列表隐藏
            $(".fir").hide();
        });
    });
    //点击地区
    $(".pro_sec").on("click",function(){
        $(".sec").toggle().siblings(".pro_list").hide();
        //点击下面每一个小标题
        $(".list_sec").off().on("click","li",function(){
            //点击下面的li数据 隐藏掉默认选中的i标签
            $(".sec .xuanzhong").hide();
            //选中哪一个 上面显示对应的对号
            $(this).children(".xuanzhong1").toggle().parent().siblings().children(".xuanzhong1").hide();

            var areaId=$(this).data("areaid");
            console.log(areaId);
            //将li标签里面的内容更换
            var html= $(this).children("span").html().slice(0,2);
            console.log(html);
            $(".pro_sec span").html(html);
            render(areaId);
            $(".sec").hide();
        });


    });
    //点击全部价格
    $(".pro_thi").on("click",function(){
        $(".thi").toggle().siblings(".pro_list").hide();

    })

});