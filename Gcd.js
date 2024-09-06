// function mygcd(a,b){
//   let res = Math.min(a,b);
//   while(res > 0){
//     if(a % res === 0 && b % res === 0){
//       return res;
//     }
//     res--;
//   }
//   return res;
// }

// console.log(mygcd(12, 18)); // Expected output: 6

// function mygcd(a,b){
//   if(b===0)
//     return a;
//   return mygcd(b, a % b);
// }

// console.log(mygcd(10, 15)); // Expected output: 6

function mygcd(a,b){
  while(b!==0){
    a=a%b;
    [a,b] = [b,a];
  }

  return a;
}

console.log(mygcd(10, 15)); // Expected output: 5