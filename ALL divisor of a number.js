// naive solution

// function printDivisors(n){
//   for(let i=1; i<=n; i++){
//     if(n%i==0){
//       console.log(i);
//     }
//   }
// }

// console.log("the divisors of 100 are:");
// printDivisors(10);

// efficient solution
// const printDivisors = (n)=>{
//  for(let i=1; i<=Math.sqrt(n); i++){
   
//   if(n%i ==0){
//     if(n/i==i){
//     console.log(i);
//     }
//     else{
//       console.log(i, n/i);
//     }
//   }
//  }
// }

// console.log("the divisors of 100 are:");
// printDivisors(100);

// shorted order
function printDivisors(n){
  let i=1;
  for(i=1; i *i <n; i++){
    if(n % i == 0){
      console.log(i);
    }
  }
  
  for(; i >=1 ; i--){
    if(n % i==0){
      console.log(n/i);
    }
  }
}

const n=100;
printDivisors(n);