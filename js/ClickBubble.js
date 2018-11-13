window.onload = function () {
    document.getElementById("message").style.display ="none";
    document.getElementById("bt1").onclick = function () {
        document.getElementById("message").style.display ="block";
        event.cancelBubble = true;
    }
    document.onclick = function () {
        document.getElementById("message").style.display ="none";
        console.log("横坐标:"+event.clientX);
        console.log("纵坐标:"+event.clientY);
    }
    document.onkeydown = function () {
       console.log(event.keyCode);
    }
}