var p,i,t;
function EstimateReducingInterestLoan()
{
	/* Fill with required javascript code to read input values from HTML Components  */
     p = document.getElementById("principalAmount").value;
     i = document.getElementById("interestRate").value;
     t = document.getElementById("tenure").value;

	  calculateEMI();
      totalPayment();
      totalInterest();
      EstimateFixedInterestLoan();


    
}

function EstimateFixedInterestLoan()
{
   
    var ti=p*(i/1200)*t;
    document.getElementById("tInterestFixed").innerHTML = ti.toFixed(2); /*Assign total Interest value here*/
    
     var tp= parseInt(p)+parseInt(ti);
    document.getElementById("tPaymentFixed").innerHTML = tp.toFixed(2); /*Assign total payment value here*/
    
     var em= tp/t;
    document.getElementById("EMIFixed").innerHTML = em.toFixed(2); /*Assign emi  value here*/
    
    
}
var em="0";
function calculateEMI(){
    var R=(i/100)/12;
    var q=1+R;
    var top=Math.pow(q,t);
    var bottom=top-1;
    var s=top/bottom;
    window.em=p*R*s;
    document.getElementById("EMI").innerHTML = em.toFixed(2);/*Assign emi value here*/
}
var pa="0";
function totalPayment(){
	window.pa=em*t;
    document.getElementById("tPayment").innerHTML = pa.toFixed(2); /*Assign total payment value here*/
}
function totalInterest(){
    var inn=pa-p;
    document.getElementById("tInterest").innerHTML = inn.toFixed(2); /*Assign total Interest value here*/
}


