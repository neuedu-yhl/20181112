$(function () {
    $(document).click(function () {
        // $("div").addClass("divOpeartion divOpeartion2");
        // $("div").text("<p>这是一个段落</p>");
        //=================================================================================
        // console.log($("#username").val("123456"));
        //
        // //=================================================================================
        // var $bt = $("<button>点击我</button>")
        // // $("div").insertAfter($bt);
        // $bt.insertBefore($("div"));
        // console.log($("div:first").id);
        $("div:first").removeAttr("id");
        //attr()
        //getAttribut setAttribute


        //====================================================================================
        //siblings获取前后元素
        var $sArr = $("div:first").siblings();
        $sArr.each(function () {
            console.log($(this).attr("id"));
        })
    })
})
//window.onload()   document.ready();