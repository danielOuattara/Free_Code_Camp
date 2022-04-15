function factorialize1(num) {
    let result = 1;
    if (num <= 1) {
        return result;
    }

    for (let i = 1; i <= num; i++) {
        result = i * result
    }

    return result;
}

console.log(factorialize1(4));

//--------------------------------------------

function factorialize2(num) {
    let result = 1;
    if (num <= 1) {
        return result;
    }
    for (let i = 1; i <= num; i++) {
        result = i * factorialize2(i - 1);
    }
    return result;
}

console.log(factorialize2(7));