function countdigit(x){
  let i = 0;
  while(x >0){
    x=Math.floor(x/10);
    i++;
  }

  return i;
}

let numberOfDigits = countdigit(9835);
console.log(numberOfDigits);