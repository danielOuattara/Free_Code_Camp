function convertToRoman(num) {
    const romanIntegerRelation = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
    let romanOutput = "";
    for (let i in romanIntegerRelation) {
        while (num >= romanIntegerRelation[i]) {
            romanOutput += i;
            num -= romanIntegerRelation[i]
        }
    }
    console.log(num, "-", romanOutput)
    return romanOutput;
}

convertToRoman(1999);

//-------------------------------------------------------------------------------------------------------

function convertToInteger(roman) {
    const romanIntegerRelation = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
    let number = 0;
    for (let i in romanIntegerRelation) {
        while(roman.slice(0, i.length) === i) {
            number += romanIntegerRelation[i];
            roman = roman.slice(i.length);
        }
    }
    console.log(roman,'-', number)
    return number;
}

convertToInteger("MCMXCIX");
