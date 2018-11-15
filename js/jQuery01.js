$(document).ready(function(){
    $("#div1").css("width","1000px");

    $("#div1").next().addClass("divStyle");


    var content = $("#div1").html();
    console.log(content);

    //jQuery中的点击事件
    $(document).click(function () {
        //创建节点
        // $("#div1").append($("<p>这是一个段落</p>"));
    })

    //jQuery中的after()方法
    $(document).click(function () {
        //创建节点
        // $("#div1").before($("<p>这是一个p标签</p>"));
    })

    //点击时给li标签添加css
    // $(document).click(function () {
    //     $("#ulCon").css(
    //         "background-color","blue"
    //     );
    // })
    //并集选择器
    $(document).click(function () {
        // $("#ulCon,.lis").css("border","1px solid blue");
    })
    //全局选择器
    $(document).click(function () {
        // $("*").css(
        //     {
        //         "margin":"0px",
        //         "padding":"0px"
        //     }
        // );
    })


    //后代选择器
    $(document).click(function () {
        // $("#ulCon2>span").css("color","red");
    })

    //相邻元素选择器
    $(document).click(function () {
        // $("#ulCon+#ulCon2").css("background-color","green");
    })


    //过滤选择器
    /*$(document).click(function () {
        $("li:last").css("background-color","purple");
    })*/
    //even
    $(document).click(function () {
        $("tr:lt(1)").css("background-color","purple");
    })

    $(document).mouseover(function () {
        $("tr:lt(1)").css("background-color","purple");
    })


    //键盘事件
    $(document).keypress(function () {
        if(event.keyCode==13)
        {
            confirm("确定要提交吗?");
        }
    })


    //focus和blur
    $("#name").focus(function () {
        // console.log("获得焦点");
})
    $("#name").blur(function () {
        // console.log("失去焦点");
    })


    //on
    $("#name").on("focus",function () {
        console.log("获取焦点");
    })

    //on传多个事件
    $("#name").on(
        {
            "mouseover":function () {
                console.log("鼠标经过");
            },
            "mouseout":function () {
                console.log("鼠标离开");
            }
        }
    )

    //hover
    $("#name").hover(
        function () {
            console.log("鼠标经过");
        },
        function () {
            console.log("鼠标离开");
        }
    )
    
    //动画
    $(document).click(function () {
        $("#div1").slideUp(1000);
    })
    



})