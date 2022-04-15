/* 

Perform a search and replace on the sentence using the arguments provided and return the new sentence.
> first argument is the sentence to perform the search and replace on.
> second argument is the word that you will be replacing (before).
> third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. 
      For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */


function myReplace(str, before, after) {

    if (/[A-Z]/.test(before[0]) && /[a-z]/.test(after[0])) {
        console.log("1111")
        after = after[0].toUpperCase() + after.substring(1)
        return str.replace(before, after);
    } else if (/[a-z]/.test(before[0]) && /[A-Z]/.test(after[0])) {
        console.log("2222")
        after = after[0].toLowerCase() + after.substring(1)
        return str.replace(before, after);

    } else return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));