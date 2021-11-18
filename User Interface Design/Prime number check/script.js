function findPrimeNumber(number)
{
    //fill the code
    var isPrime=true;
    if(number==1){
        return "1 is neither a prime number nor a composite number";
    }
    else{
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        return number+" "+"is a prime number";
    } else {
        return number+" "+"is not a prime number";
    }
}
}
console.log(findPrimeNumber(11));
