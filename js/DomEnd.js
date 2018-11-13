window.onload = function () {
    var div1 = document.getElementById("div1");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("style","width:100px;height:200px;background-color:green");

    //创建一个段落标签
    var newPText = document.createElement("p");
    //创建一个文本节点
    var text1 = document.createTextNode("今天真开心");
    newPText.appendChild(text1);
    //把段落标签添加到body里边
    document.body.appendChild(newPText);
    document.onclick = function()
    {
        document.body.removeChild(newPText);
    }






    div1.appendChild(newDiv);
    // div1.setAttribute("style","width:100px;height:500px;background-color:red");
    // document.onclick = function () {
    //     div1.removeAttribute("style");
    // }
    // console.log(result);
}