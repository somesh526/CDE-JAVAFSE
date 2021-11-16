$("#btn-id").click(function(){
    $.getJSON("https://reqres.in/api/users?page=2",function(json){
        $("#data-id").html("")
        json.data.forEach(function(jd){
           $("#data-id").append(jd.id+"--"+jd.email+'<br>'); 
        });
    });
});
