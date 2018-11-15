$(function () {
    $("#div1").css("display","none");
    $("#ul1").mouseover(function () {
        $("#div1").show();
    })
    $("#div1,#ul1").mouseout(function () {
        $("#div1").hide();
    })
    $("#div1").mouseover(function () {
        $("#div1").show();
    })
})
