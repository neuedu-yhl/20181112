$(function () {
    $("table tr:first").css(
        {
            "color":"red",
            "font-size":"20px"
        }
    );
    $("table tr:last").css(
        {
            "color":"blue"
        }
    );
    $("table tr:even").css(
        {
            "background-color":"#ffd"
        }
    );
    $("table tr:odd").css(
        {
            "background-color":"#ddf"
        }
    );
    $("table tr:gt(3)").css(
        {
            "font-size":"12px"
        }
    );
    $("table tr:lt(4)").css(
        {
            "font-size":"14px"
        }
    );

    //=====================================================================================
        $("p").each(function () {
            $(this).click(function () {
                alert($(this).text());
            })
        })

    //=====================================================================================
    //     $("ul").css("list-style","none");
    //     $("ul li").css(
    //         {
    //             "width":"80px",
    //             "height":"30px",
    //             "border":"1px solid black"
    //         }
    //     )
    //     $("ul li:first").click(function () {
    //         $("ul li:not(:first)").fadeToggle(1000);
    //     })
    //
    //     $("ul li:not(:first)").hover(function () {
    //         $(this).css("background-color","red");
    //     },
    //        function () {
    //            $(this).css("background-color","white");
    //        }
    //         )

    $("[type=text]").focus(function () {
        $(this).css(
            {
                "outline":"none",
                "border":"10px solid red",
                "background-color":"blue"
            }
        );
    })
    $("#ul1").css(
        "list-style","none"
    )
    $("#ul1 li").css(
        {
            "width":"200px",
            "height":"80px",
            "border":"1px solid black"
        }
    )
    var switch1 = false;
    $("#ul1 li").each(function () {
        $(this).click(function () {
            if($(this).attr("id")=="li1"&&switch1==false)
            {
                $(this).children("img").attr("src","../img/减.svg");
                $(this).append($("<div style='width: 150px;height: 30px;border:1px solid blue;'>冲个会员就能看到了</div>"));
                switch1 = true;
            }
            else if(switch1 == true)
            {
                $(this).children("img").attr("src","../img/加.svg");
                $(this).children("div").remove();
                switch1 = false;
            }
        })
    })
})