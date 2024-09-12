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


// function primeFactors(n){
//   while(n %2===0){
//     console.log(2);
//     n=n/2;
//   }
//   for(let i=3; i<=Math.sqrt(n); i=i+2){
//     while(n % i ===0){
//       console.log(i);
//       n=n/i;
//     }
//   }

//   if(n>2)
//     console.log(n);
// }

// console.log(primeFactors(12));
// console.log(primeFactors(17));

// more efficient solution

const printPrimeFactors = n=>{
  if(n <=1)return;
  while(n%2===0){
    console.log(2);
    n=n/2;
  }
  while(n % 3===0){
    console.log(3);
    n=n/3;
  }

  for(let i=5; i*i<=n; i=i+6){
    while(n % 1===0){
      console.log(i);
      n=n/i;
    }

    while(n % (i+2)===0){
      console.log(i+2);
      n=n/(i+2);
    }
  }

  if(n>3)
    console.log(n);

}

const main=()=>{
  const n= 315;
  printPrimeFactors(n);
  return 0;
}

main();

