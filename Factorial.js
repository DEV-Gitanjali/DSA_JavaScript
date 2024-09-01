//  Q-give integer 'n' find the factorial of the integer

 function factorial(n){

    let result = 1

    for(let i=1; i<=n; i++){
        result = result * i
   
 }

   return result
 }

 console.log(factorial(0));
 console.log(factorial(1));
 console.log(factorial(7));
