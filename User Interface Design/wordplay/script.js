function wordPlay(number){
    var my=new Array();
    var s="";
    if(number>50)
     return "Range is High";
    else if(number<1)
     return "Not Valid";
    else{
    for(var i=1;i<=number;i++){
        if( (i%3==0) && (i%5==0))
        my.push("Jump");
        else if(i%3 == 0)
        my.push("Tap");
        else if(i%5==0)
        my.push("Clap");
        else
        my.push(i);
    }
    for (var j = 0; j<number; j ++ ){
    s += ' '+my[j];
    }
}
return s;
}
var m=wordPlay(11);
console.log(m);
