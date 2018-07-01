var result = "";
$(document).ready(function () {
    $.ajax({
        url : "https://www.easy-mock.com/mock/5b02420cb748c95f2a60536c/partner/content",//请求地址
        dataType : "json",//数据格式
        type : "get",//请求方式
        async : false,//是否异步请求
        success : function(data) {   //如果发送成功
            result = data;
        }
    });
    console.log(result.data.content[0][0]);
    laytpl($('#indexContent').html()).render(result.data, function (html) {
        console.log(result.data.content.length)
        if (result.data){
            $('#indexTextContent').append(html);
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        } else {
            $('#indexTextContent').html(html)
        }
    });
});

$(document).ready(function () {
    var yXContentTheDiv = document.getElementById('yXContent').getElementsByClassName("yXContentTheDiv");
    console.log(yXContentTheDiv.length)
    if (yXContentTheDiv.length == 4) {
        console.log("24");
        yXContentTheDiv[3].style.border = "none";
        yXContentTheDiv[2].style.border = "none";
    } else if (yXContentTheDiv.length == 2) {
        console.log("12");
        yXContentTheDiv[0].style.border = "none";
        yXContentTheDiv[1].style.border = "none";
    } else if (yXContentTheDiv.length == 3) {
        console.log("13");
        yXContentTheDiv[2].style.border = "none";
    }else if (yXContentTheDiv.length == 1) {
        console.log("13");
        yXContentTheDiv[0].style.border = "none";
    }
});

var mySwiper1 = new Swiper('.swiper-container1',{
    slidesPerView: 'auto',
    loopedSlides: 2,
});


//显示遮罩层 合伙协议
function showMask(){
    $("#mask").css("height",$(document).height());
    $("#mask").css("width",$(document).width());
    $("#mask").show();
    document.getElementById("xyContent").style.display = "block";
}
//显示遮罩层 费用说明
function showMask2(){
    $("#mask").css("height",$(document).height());
    $("#mask").css("width",$(document).width());
    $("#mask").show();
    document.getElementById("fyContent").style.display = "block";
}
//隐藏遮罩层
function hideMask(){
    $("#mask").hide();
    document.getElementById("xyContent").style.display = "none";
    document.getElementById("fyContent").style.display = "none";
}
