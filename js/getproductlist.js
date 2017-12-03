$(function(){
    //渲染面包屑数据
    //取到浏览地址框中的参数
    var tools={
        setParm:function(){
    var parm=decodeURI(location.search);
    console.log(parm);
    parm=parm.slice(1);
    console.log(parm);
    parm=parm.split("&");
    console.log(parm);
    var obj={};
    parm.forEach(function(e,i){
        var key=e.split("=")[0];
        var value=e.split("=")[1];
        obj[key]=value;
    });
    return obj;
  },
        getParm:function(key){
            return this.setParm()[key];
        }
};
    //获得categoryId
    var id=tools.getParm("categoryid");
    console.log(id);
    $.ajax({
       type:"get",
        url:"http://localhost:9090/api/getcategorybyid",
        data:{
            categoryid:id
        },
        success:function(data){
           console.log(data);
           $(".break_nav").html(template("tpl",data));
        }
    });


    //渲染下面的商品列表数据
    //传入的参数
    var pageid=tools.getParm("pageid");
    console.log(pageid);
        $.ajax({
            type: "get",
            url: "http://localhost:9090/api/getproductlist",
            data: {
                categoryid: id,
                pageid:pageid,
            },
            success: function (data) {
                console.log(data);
                // $(".pro_single").html(template("tpl2", data));
                //如果没有搜到相关数据 则下面三个按钮不显示
                if (data.result.length == 0) {
                    $(".page_btn").hide();
                }
                //拿到一页上的显示数量
                var pageSize=data.pagesize;
                console.log(pageSize);
                //拿到搜到商品的总条数
                var total = data.totalCount;
                console.log(total);
                //增加一个属性 是总页数
                var pageCount = Math.ceil(total / pageSize);
                data.pageid=pageid;
                data.pageCount=pageCount;
                console.log(data);
                console.log(pageCount);
                $("#sele").html(template("tpl3",data));
               //拿到此时页面地址栏里的category和categoryid
                var category=tools.getParm("category");
                //category也需要添加到data里面 为了进入评价页面实现面包屑导航效果
                data.category=category;
                console.log(data);
                data.categoryid=id;
                $(".pro_single").html(template("tpl2", data));



                 var categoryid=tools.getParm("categoryid");
                //点击上一页功能
                $(".btn_prev").on("click", function(){
                    pageid--;
                    if(pageid<1){
                        mui.toast("已经是第一页");
                        return;
                    }else{
                        location.href="getproductlist.html?pageid="+pageid+"&category="+category+"&categoryid="+categoryid;
                    }
                });
                //点击下一页
                $(".btn_next").on("click", function(){
                    pageid ++;
                    if (pageid>pageCount) {
                        mui.toast("已经是最后一页");
                        return;
                    }else{
                    location.href="getproductlist.html?pageid="+pageid+"&category="+category+"&categoryid="+categoryid;
                    }
                });

                //点击下拉框 跳转到相应的页数
                $("#sele").on("change",function(){
                    console.log(123);
                    var pageid=($("#sele").val());
                    pageid=pageid.split("/");
                    console.log(pageid);
                    var newPageid=pageid[0];
                    console.log(newPageid);
                    location.href="getproductlist.html?pageid="+newPageid+"&category="+category+"&&categoryid="+categoryid;


                })


            },

        })






});