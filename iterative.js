function mypower(x,n){
  let res =1;
  while(n>0){
    if(n %2!==0)
      res = res *x;
    x= x*x;
    n= Math.floor(n/2);
  }
  return res;
}

console.log(mypower(4,5)); 

