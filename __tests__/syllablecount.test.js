import Syllable from '../src/js/syllable';

describe('Syllable Count', () => {

    let testWord;

    beforeEach(() => {
        testWord = new Syllable("ear",2);
    })
  test('A. Should correctly create a Syllable object', () => {
    expect(testWord.word).toEqual("ear");
    expect(testWord.syllables).toEqual(2);
  });
  test('B.  Should correctly split syllable object into letter array', () => {
    expect((testWord.word).split("")).toEqual(["e","a","r"]);  
  });
  test('C.  Should correctly find the next vowel', () => {
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(1);  
  });
  let testWord1;
  beforeEach(() => {
    testWord1 = new Syllable("street",1);
  })
  test('D.  Should correctly find the next vowel', () => {
    testWord1.findNextVowel();
    expect(testWord1.syllables).toEqual(1);  
  });
  test('E.  Should correctly find the subsequent vowel', () => {
    expect(testWord1.findNextVowel()).toEqual("yippee");  
  });
});