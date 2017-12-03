$(function(){
    //开始渲染商品列表项
    //发送ajax请求
    var pageid=1;
    function render(pageid){
        var pageid=pageid||1;
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getmoneyctrl",
        data: {
            pageid: pageid,
        },
        success: function (data) {
            $(".product_list").html(template("tpl", data));
            //点击上一页 实现页面跳转
            //先获取一页显示的条数
             pageSize = data.pagesize;
            //拿到数据的总条数
             total = data.totalCount;
            //那么得到总页数
             count = Math.ceil(total / pageSize);
             data.count=count;
             data.pageid=pageid;
            $(".sele").html(template("tpl2",data));
            console.log(data);
        }
    });
    }
    render(pageid);

    //点击上一页 下一页都是根据下拉框中的val值 不能单纯的根据pageid
    //获取下拉框中的值
    //点击上一页
    $(".btn_prev").on("click",function(){
        var pageid=($("#sele").val())||"1/"+count;
        pageid=pageid.split("/");
        console.log(pageid);
        var newPageid=pageid[0];
        console.log(newPageid);
        newPageid--;
        if(newPageid<1){
            mui.toast("已经是第一页");
            return;
        }else{
         render(newPageid);
        }
    });
    //点击下一页
    $(".btn_next").on("click",function(){
        var pageid=($("#sele").val())||"1/"+count;
        pageid=pageid.split("/");
        console.log(pageid);
        var newPageid=pageid[0];
        console.log(newPageid);
        newPageid++;
        if(newPageid>count){
            mui.toast("已经是最后一页");
            return;
        }else{
            render(newPageid);
        }
    });


    $("#sele").on("change",function(){
        //点击中间的下拉框
      var pageid=($("#sele").val()) ||"1/"+count;
        pageid=pageid.split("/");
        var newPageid=pageid[0];
        console.log(newPageid);
        render(newPageid);
    });



});