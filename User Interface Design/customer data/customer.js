$(".add-row").click(function(){
   var a=$('#name').val();
   var b="<tr><td><input type='checkbox' name='record'></td><td>"+a+"</td></tr>";
   $("table tbody").append(b);
});
$(".delete-row").click(function(){
    $("table tbody").find('input[name="record"]').each(function(){
        if($(this).is(":checked")){
            $(this).parents('tr').remove();
        }
    });
});
