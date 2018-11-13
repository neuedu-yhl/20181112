window.onload = function () {
    // document.onclick = function () {
    //     alert("点击");
    // }
    document.getElementById("son").onclick = function () {
       alert("我是son");
       event.cancelBubble = true;
    }
    document.getElementById("father").onclick = function () {
        alert("我是father");
    }
    document.getElementById("grandFather").onclick = function () {
        alert("我是grandFather");
    }
}