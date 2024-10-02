// function printReverseOrder(n){
//   for(let  i =n ; i>0; i--){
//     console.log(i);
//   }
// }

//   (function main(){
//     const n=5;
//     printReverseOrder(n);
//   })()


function printReverseOrder(n){
  if(n<=0){
    return;
  }
  else {
    console.log(n);
    printReverseOrder(n-1);
  }
}

(function main(){
  const n=5;
  printReverseOrder(n);
})();