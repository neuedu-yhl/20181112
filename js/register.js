window.onload = function () {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var CheckPassword = document.getElementById("CheckPassword");
    var telPhone = document.getElementById("telPhone");
    var email = document.getElementById("email");
    var postCode = document.getElementById("postCode");
    var idCardNum = document.getElementById("idCardNum");

    //制定校验规则
    var validateName= /^[a-zA-Z0-9]\w{6,14}$/;
    //密码
    var validatePsw = /^[a-zA-Z0-9]{6,14}$/;
    //电话号码
    var validateTel = /^\+861[0-9]{10}$/;

    //判断用户名
    username.onblur =  function () {
        var result = this.value.match(validateName);
        if(result==null)
        {
            document.getElementById("userInfo").innerHTML = "<span style='color: red'>用户名不合法</span>";
        }else
        {
            document.getElementById("userInfo").innerHTML = "<span style='color: green'>用户名合法</span>";
        }
    }
    //密码
    password.onblur = function () {
        var result = this.value.match(validatePsw);
        if(result==null)
        {
            document.getElementById("pswInfo").innerHTML = "<span style='color: red'>密码不合法</span>";
        }else
        {
            document.getElementById("pswInfo").innerHTML = "<span style='color: green'>密码合法</span>";
        }
    }

    //检查密码
    CheckPassword.onblur = function () {
        if(this.value==password.value&&this.value!=null)
        {
            document.getElementById("cInfo").innerHTML = "<span style='color: green'>两次密码一致</span>";
        }else
        {
            document.getElementById("cInfo").innerHTML = "<span style='color: red'>密码不合法</span>";
        }
    }

    var bt2 = document.getElementById("bt2");
    bt2.onclick = function () {
        if(username.value==null||username.value==""||username.value.match(validateName)==null)
        {
            return false;
        }
    }
}