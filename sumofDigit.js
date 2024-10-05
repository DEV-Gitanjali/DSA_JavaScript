// function getSum(n){
//   if(n==0)
//     return 0;
//   let ld = n%10;
//   n=Math.floor(n/10);
//   return getSum(n) + ld;
// }

// console.log(getSum(253));


function sumOfDigit(n){
  if(n===0) return 0;
    return (n % 10 + sumOfDigit(Math.floor(n/10)));
  
  const num=12345;
  const result = sumOfDigit(num);
  console.log(`sum of digits in ${num} is ${result}`);
}