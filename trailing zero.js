  //  function countZero(n){
  //   let fact=1;
  //   for(let i=2; i<=n; i++)
  //     fact=fact*i;
  //     let res = 0;
  //     while(fact%10===0){
  //       res++;
  //       fact=fact/10;
  //     }
  //     return res;
  //   }
   

  // console.log(countZero(23440));


  function countZero(n){
    let res = 0;
    for(let i=5; i<=n; i=i*5)
      res = res + Math.floor(n/i);
    return res;
  }

  console.log(countZero(251));