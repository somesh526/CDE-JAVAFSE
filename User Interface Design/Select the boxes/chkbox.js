var $c=$('#form input[type="checkbox"]');
$c.change(function(){
    var d=$c.filter(':checked').length;
    if(d == 1)
    $('#result').text(d+' box is checked');
    else
    $('#result').text(d+' boxes are checked');
});
