function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return "";
    }
    let result = ""
    for (let i = 0; i < num; i++) {
        result += str
    }

    return result;
}

repeatStringNumTimes("abc", 3);

//--------------------------------------------------------
function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";

    for (let i = 0; i < num; i++) {
        accumulatedStr += str;
    }

    return accumulatedStr;
}
//--------------------------------------------------------
function repeatStringNumTimes(str, num) {
    return str.repeat(num);
}

//--------------------------------------------------------
function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return "";
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}


//------------------------------------------------------------
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  }