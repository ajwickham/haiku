export default class Syllable {
    constructor(word, syllables) {
      this.word = word;
      this.syllables = syllables;
    }
  
  


  findNextVowel(){  //if it finds a vowel it adds 1 syllable
    let splitWord = (this.word).split("");
    for(let i = 0; i<splitWord.length; i++) {
      if(/[aeiouyAEIOU]/.test(splitWord[i])) {
        if((i===splitWord.length -1) && (splitWord[i] === "e")) {
          this.handleExceptions(splitWord,splitWord.length);
          return;
        }    //if the last letter is an e don't add to the syllables count
        else {
          this.syllables = this.syllables +1;
          i = this.findNextConsonant(i); 
        };  
      };
    };
    if(this.syllables===0) {   //if the word has no vowels        
      this.handleExceptions(splitWord,splitWord.length);
    }    
  } 
  findNextConsonant(i) {
    let splitWord = (this.word).split("");
    let j;
    if(i<(splitWord.length)) {   //checks if at the end of the word
      for(j = i+1; j<(splitWord.length); j++) {  
        if(/[aeiouyAEIOU]/.test(splitWord[j])===false) {  //finds next consonant   
          j = this.handleExceptions(splitWord,j);
          i=j;
        return i; //goes back to find next vowel
        }  
      }
    }  
  }
  handleExceptions(splitWord,j) {
    if(/e/.test(splitWord[j+1])&&
      (j+1 === (splitWord.length-1))) { // if e is last letter and we are at penultimate letter stop counting
      j = splitWord.length
      if(/i/.test(splitWord[j-3])&&(/r/.test(splitWord[j-2]))) {
        this.syllables = this.syllables + 1;  //if it ends in ire add a syllable 
      }
    }
    if((j>splitWord.length-3)&&(/s/.test(splitWord[splitWord.length-2]))&&
      (/m/.test(splitWord[splitWord.length-1]))) { //if it ends in sm (prism) add a syllable
        this.syllables = this.syllables + 1; 
    } 
    for(let k = 0; k<exceptionWords.length; k=k+1) {
      if(exceptionWords[k][0].toUpperCase()===(this.word).toUpperCase()) {
        this.syllables = exceptionWords[k][1];
        j = splitWord.length;
        return j;
      }
    } 
  return j
  } 
}
const exceptionWords = [["ear",2],["eel",2],["hmm",1],["tiara",3],["employee",3],["the",1]]