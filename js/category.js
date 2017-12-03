$(function(){
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getcategorytitle",
        success:function(data){
            // console.log(data);
            $(".mmb_main").html(template("tpl",data));
            $(".cate_show").on("click",function() {
                $(this).siblings().toggle();
                var titleid = $(this).data("id");
                console.log(titleid);
                $.ajax({
                    type: "get",
                    url: "http://localhost:9090/api/getcategory",
                    data: {
                        titleid: titleid,
                    },
                    success: function (data) {
                        console.log(data);
                        $(".cate_all").html(template("tpl2",data));
                        console.log($(this));

                    }
                });
            });

        }
    });
});