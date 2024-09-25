// function isprime(num){
//   if(num<2) return false;
//   for(let j=2; j<=Math.sqrt(num); j++){
//     if(num % j ===0)return false;
//   }

//   return true;
// }

// // function printPrime(n){
// //   for(let i=2; i<=n; i++)
// //     if(isprime(i))
// //       console.log(i);
// // }

// // console.log(printPrime(12));

// function seive(n){
//   let isprime = new Array(n+1).fill(true);
//   for(let i=2; i*i<=n; i++){
//     if(isprime[i]){
//       for(let j=2*i; j<=n; j++)
//         isprime[j]=false;
      
//     }
//   }
//     for(let i=2; i<=n; i++)
//       if(isprime[i])
//         console.log(i);
    
// }

// console.log(seive(9));


function seiveprime(n){
  let prime =[]
  for(let i=0; i<=n; i++){
    prime[i]= true
  }

  for(let p=2; p*p<=n; p++){
    if(prime[p]===true){
      for(let i=p *p ; i<=n; i+=p){
        prime[i]=false;
      }
    }
  }

  let result =[];
  for(let p=2; p<=n; p++){
    if(prime[p]){
      result.push(p);
    }
  }

  return result;
}

let n=30;
console.log("following are the prime numbers smaller than or equal to " + n + ":")
console.log(seiveprime(n))