// function mypower(x,n){
//   let res =1;
//   for(let i=0; i<n; i++)
//     res = res*x;
//     return res;
  
// }

// console.log(mypower(2,3)); // output: 8

function power(x,n){
  if(n===0)return 1;
  let temp = power(x,Math.floor(n/2));
  if( n % 2===0)return temp * temp;
  else return x * temp * temp;
}
let x=2 , n=3;
console.log(power(x,n));
