// function factorial(n){
//   if(n===0 || n===1){
//     return 1;
//   }else{
//     return n * factorial(n-1);
//   }
// }
// let num1 = 6;
// let result = factorial(num1);
// console.log("this factorial number is " +result);

// function fun(n){
//   if(n==0)
//     return ;
//   console.log(n);
//   fun(n-1);
//   console.log(n);
// }
// fun(3);

// console.log(fun(3));  


function fun(n){
  if(n==0)
    return 0;
  fun(Math.floor(n/2));
  console.log(n%2);
}

let n=16;
// console.log(fun(13));
console.log(fun(16));
