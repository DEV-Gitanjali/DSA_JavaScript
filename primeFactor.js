// function pFactor(n){
//   for(let i=2; i< n; i++){
//     if(isPrime(i)){
//       let x=i;
//       while(n % x===0){
//         console.log(i);
//         x=x*i;
//       }
//     }
//   }
// }

// console.log(pFactor(12));


function primeFactors(n){
  while(n %2===0){
    console.log(2);
    n=n/2;
  }
  for(let i=3; i<=Math.sqrt(n); i=i+2){
    while(n % i ===0){
      console.log(i);
      n=n/i;
    }
  }

  if(n>2)
    console.log(n);
}

console.log(primeFactors(12));
console.log(primeFactors(17));