/* 
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or 
  consonant cluster, move it to the end of the word, and add 'ay' to it.

- If a word begins with a vowel, just add 'way' at the end.
 */


/* function translatePigLatin(str) {  ???
    let vowels = ["a", "e", "i", "o", "u", "y"];
    if (vowels.indexOf(str[0]) > -1) { // 'str' starts with a vowels !
        return str + "way"
    }
    let startWithConsonants = str.match(/[^aeiouy]+/) || null;
    return str.split(startWithConsonants)[1] + startWithConsonants + 'ay'
}

// console.log(translatePigLatin("hfmkahfeansonant"));
console.log(translatePigLatin("paragraphs"));
 */


function translatePigLatin(str) {  // OK!
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) { // str[0] is a vowel !
        return str + "way";
    } else {
        let otherVowelsMatchArray = str.match(/[aeiou]/g) || 0;
        console.log(otherVowelsMatchArray)
        let otherVowelsfirstIndex = str.indexOf(otherVowelsMatchArray[0]);
        console.log(otherVowelsfirstIndex)
         return str.substring(otherVowelsfirstIndex) + str.substring(0, otherVowelsfirstIndex) + "ay";
    }
}


console.log(translatePigLatin("hfmkahfeansonant"));
console.log(translatePigLatin("paragraphs"));
translatePigLatin("paragraphs")