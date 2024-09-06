// //  Q-give integer 'n' find the factorial of the integer

//  function factorial(n){

//     let result = 1

//     for(let i=1; i<=n; i++){
//         result = result * i
   
//  }

//    return result
//  }

//  console.log(factorial(0));
//  console.log(factorial(1));
//  console.log(factorial(7));
//  console.log(factorial(4));


function fact(n){
  if(n===0)
    return 1;
  return n*fact(n-1);
}

console.log(fact(4)); 