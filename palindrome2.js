const isPalindrome = (s ,i)=>{
  if(i> s.length/2){
    return true;
  }

  return s[i]===s[s.length-1] && isPalindrome(s, i+1);};
  const main=()=>{
  const str = "geeg"; 

  if(isPalindrome(str , 0)){
    console.log("yes");
  }  else {
    console.log("No");
  }
    return 0;
  }
  main();
  
  
