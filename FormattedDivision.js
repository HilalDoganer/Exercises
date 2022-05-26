function FormattedDivision(num1,num2) { 
  let result = Number(parseFloat((num1/num2).toFixed(4))).toLocaleString('en-US')

  // code goes here  
  return result; 

}
   
// keep this function call here 
console.log(FormattedDivision(readline()));
