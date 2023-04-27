//First Reverse
//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
//For example: 
//if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.


function FirstReverse(str) { 
    let newStr = "";
    for (let i = str.length - 1; i > -1; i--){
        newStr += str[i]
    }
    // code goes here  
    return newStr; 
  
  }