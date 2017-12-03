//底部点击回到顶部图标 内容区域回到顶部
$(".foot_pic .yuan>i").on("click",function(){
    //回到顶部就是让内容去scroll的高度变为零
    $("html,body").stop().animate({'scrollTop':'0px'},500);
});

//获取浏览器地址中传进的参数字段
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

