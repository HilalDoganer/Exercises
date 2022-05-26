function Calculator(str) { 
  str = str.replace(/\)\(/g,')*(')
 

  // code goes here  
  return eval(str); 

}
   
// keep this function call here 
console.log(Calculator(readline()));
