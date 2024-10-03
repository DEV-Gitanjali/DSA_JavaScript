class RecursiveTraverse{
  traverse(n){
  if(n>0){
    this.traverse(n-1);
    console.log(n);
  }
  return;
  }
}
(function main(){
  const g = new RecursiveTraverse();
   g.traverse(30);
}) ();