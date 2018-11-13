window.onload = function () {

    var str = "neuedu";
    //通过new关键字创建正则
    var regExp = new RegExp("neu","i");
    // console.log(regExp.test(str));

    //通过字面量的方法创建正则
    var regExp2 = /neu/ig;
    // console.log(regExp2.test(str));


    //String中的正则表达式
    var str2 ="today,is Tuesday,today";
    var mArr = str2.match("today1");
    // console.log(mArr);

    //replace替换
    var result = str2.replace(/to.../g,"TODAY");
    console.log(result);

    //search
    var pos = str2.search("today");
    // console.log(pos);

    //split
    var sArr = str2.split(",");
    for(var i in sArr)
    {
        // console.log(sArr[i]);
    }

    //输入的字符必须有字母和数字
    var inputVal = "12345678";
    var mResult = inputVal.match(/[0-9]{5,11}@qq(\.com|\.cn|\.org)/);
    console.log(mResult);

    //检测邮箱

    var vEmail = document.getElementById("email");
    vEmail.onblur = function () {
        var result = this.value.match(/[0-9]{5,11}@qq(\.com|\.cn|\.org)/);
        if(result == null)
        {
            document.getElementById("span1").innerText = "邮箱不合法";
        }else
        {
            document.getElementById("span1").innerText = "可以注册";
        }
    }

    //利用字面量的方式创建regexp
    var regExp1 = /^a...e$/;
    var re = "eabcde";
    console.log(regExp1.test(re));

    //邮政编码
    var postCode = /[0-9][0-9]{5}/;

    //压缩文件格式   rar zip 7z tar jar war
    var fileFormat = /[\w]+(\.rar|\.zip|\.tar)/;

    //去空格
    var wStr = "avc dsasd dasasd DSAADS  DASASD";
    var wResult = wStr.replace(/\s/g,"");
    console.log(wResult);
}