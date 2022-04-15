
function factorial(n) {
    
    if (!Number.isInteger(n)) {
        throw new Error("Please, this function allows only integer as parameter");
    }

    let result = 1;

    if( n == 0 || n == 1) {
        return  result;
    }

    for( let i = 1; i <= n ; i++) {
        result = i * factorial(i-1);
    } 
    return result;
}

for( let i = 0; i < 1 ; i++) {
    console.log(factorial(i))
}
