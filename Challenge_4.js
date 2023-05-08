
// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) { 
    let newArray = sen.split(" ")
    let topLengthIndex;
    for(let i = 0; i < newArray.length; i++){
        newArray[i] = newArray[i].replace(/[^a-zA-Z_]/gi, "");
        if (topLengthIndex == undefined){
          topLengthIndex = i;
        }
        if (newArray[i].length > newArray[topLengthIndex].length){
          topLengthIndex = i;
        }
    }
    sen = newArray[topLengthIndex]
      // code goes here  
      return sen; 
    
    }