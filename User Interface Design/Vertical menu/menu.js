$(function(){
    $("#each_ex").click(function (){
        $(".men_ex ul li a").css("background-color", "red");
        $("#list li").each(function(){
        var a=$(this).text();
        $("#msg_ex").append(a);
        $("#msg_ex").append("<br>");
        });
    });
});
