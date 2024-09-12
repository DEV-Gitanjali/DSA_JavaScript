function mylcm(a,b){
  let res = Math.max(a,b);

  while(true){
    if(res % a == 0 && res % b == 0){
      return res;
    }
    res++;
  } 
}

console.log(mylcm(2,3)); // Expected output: 6