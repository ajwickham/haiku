import Syllable from '../src/js/syllable';

describe('Syllable Count', () => {

    let testWord;

    beforeEach(() => {
        testWord = new Syllable("street",1);
    })
  test('A. Should correctly create a Syllable object', () => {
    expect(testWord.word).toEqual("street");
    expect(testWord.syllables).toEqual(1);
  });
  test('B.  Should correctly split syllable object into letter array', () => {
    expect((testWord.word).split("")).toEqual(["s","t","r","e","e","t"]);  
  });
  test('C.  Should correctly find the next consonant', () => {
    expect(testWord.syllables).toEqual(1);  
  });
  test('D.  Should correctly count syllables by counting first vowel then vowels after consonants that are not a final e', () => {
    testWord = new Syllable("beater",1);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(2);  
  });
  test('E.  Should correctly manage employee', () => {
    testWord = new Syllable("employee",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(3);  
  });
  test('E.  Should correctly manage prism', () => {
    testWord = new Syllable("prism",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(2);  
  });
});