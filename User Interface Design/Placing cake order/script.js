function OrderCake(str) {
	//fill the code
	 var a= str.slice(0,4);
   var b= str.slice(4,str.length-3);
   var c= str.slice(str.length - 3);
   var kg= Math.round(a/1000);
   var pr=Math.round((a/1000)*450)
    return "Your order for "+kg+" "+"kg"+" "+b+" "+"cake has been taken. You are requested to pay Rs. "+pr+" "+"on the order no "+c;
}
 console.log(OrderCake("5848ButterBlast485"));
