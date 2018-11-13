window.onload = function () {
    
    var ps = document.getElementById("pros");
    var city = document.getElementById("city");
    var area = document.getElementById("area");
    
    var pros = ["天津市","北京市","山西省"];
    var citys = [
        ["空港","河东","河西"],
        ["西城","东城","朝阳"],
        ["太原","运城","大同"]
    ];
    var areas =
    [
        [
            ["西七道","西八道"],
            ["新开路","成林道"],
            ["黑牛城","友谊路"]
        ],
        [
            ["西城1","西城2"],
            ["东城1","东城2"],
            ["朝阳1","朝阳2"]
        ],
        [
            ["万柏林","小店区"],
            ["运城1","运城2"],
            ["大同1","大同2"]
        ]
    ]
    
    /*
       抽象添加select的方法
     */
    function addArea(arr,sel) {
        if(arr.length>0)
        {
            for(var i=0;i<arr.length;i++)
            {
                var option = new Option(arr[i],i);
                sel.appendChild(option);
            }
        }
    }
    addArea(pros,ps);
    var middleArr;
    /**
     * 改变省市的下拉框之后追加到city里
     */
    ps.onchange = function () {
        city.options.length = 1;
        var index = this.value;
        if(index !=-1)
        {
            var cArr = citys[index];
            middleArr = areas[index];
            addArea(cArr,city);
        }
    }
    /**
     * 改变city时候追加区域
     */
    city.onchange = function () {
        area.options.length = 1;
        var index = this.value;
        if(index != -1)
        {
            var as = middleArr[index];
            addArea(as,area);
        }
    }
}