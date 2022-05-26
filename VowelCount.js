function VowelCount(str) { 
  
  // code goes here 
  let vowelNo = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for( let i=0; i<str.length; i++)
  {
      const c = str[i];
      if(vowels.includes(c)) {vowelNo++}
  }
  return vowelNo; 

}
   
// keep this function call here 
console.log(VowelCount(readline()));
