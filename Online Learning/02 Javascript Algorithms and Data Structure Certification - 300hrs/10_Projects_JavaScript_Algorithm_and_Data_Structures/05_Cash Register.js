
function cashInDrawerCounter(arr) {
    let cashInDrawer = 0;
    for (let i = 0; i < arr.length; i++) {
        cashInDrawer += arr[i][1] * 100;
    }
    return cashInDrawer /= 100;
}


//---------------------------------------------------------

function arrayCopier(arr) {
    /* This function requires a 2-d array as input and return its copy 
    *  input  ---> array[["String", number], ...]
    *  output ---> array[["String", number], ...]
    */
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

//---------------------------------------------------------

function currencyUnitAdder(arr) {
    /* This function requires a 2-d array as input 
    * It adds, for each sub-array the equivalent value of currency unit in cents 
    *  input  ---> array[["TWENTY", 60], ...]
    *  output ---> array[["TWENTY", 60, 2000], ...] Note: 2000 means 2 thousands cents
    */ 
    for (let i = 0; i < arr.length; i++) {
        let currencyUnit = arr[i][0];
        switch (currencyUnit) {
            case 'PENNY':
                arr[i][2] = 1
                break;
            case 'NICKEL':
                arr[i][2] = 5
                break;
            case 'DIME':
                arr[i][2] = 10
                break;
            case 'QUARTER':
                arr[i][2] = 25
                break;
            case 'ONE':
                arr[i][2] = 100
                break;
            case 'FIVE':
                arr[i][2] = 500
                break;
            case 'TEN':
                arr[i][2] = 1000
                break;
            case 'TWENTY':
                arr[i][2] = 2000
                break;
            case 'ONE HUNDRED':
                arr[i][2] = 10000
                break;
        }
    }
    return arr

}

//---------------------------------------------------------

function quantityOfCashCurrencyAdder(arr) {
    /* This function requires a 2-d array as input 
    *  It adds, for each sub-array the quantity of currency units. eg: the number of bills of 10$
    *  input  ---> array[["TWENTY", 60, 2000], ...]
    *  output ---> array[["TWENTY", 60, 2000, 3], ...]  note: 3 means here that 60 / 20 --> 3bills of 20$
    */ 
    for (let i = 0; i < arr.length; i++) {
        arr[i][3] = Math.round(arr[i][1] * 100 / arr[i][2]);
    }
    return arr;
}

//---------------------------------------------------------

function changeConstructor(optimizedArr, changeDueInCents) {
    let change = [];
    for (let i = 0; i < optimizedArr.length; i++) {
        let currencyQuantityInCid = optimizedArr[i][3];
        while (changeDueInCents >= optimizedArr[i][2] && currencyQuantityInCid > 0) {
            change.push([optimizedArr[i][0], optimizedArr[i][2] / 100])
            changeDueInCents -= optimizedArr[i][2];
            currencyQuantityInCid--;
        }
    }
    return change;
}

//----------------------------------------------------------

function changeOptimizer(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][0] === arr[i + 1][0]) {
            arr[i + 1][1] += arr[i][1]
            delete arr[i];
        }
    }
    arr = arr.filter(subArray => subArray !== []);
    return arr;
}

//----------------------------------------------------------

function changeChecker(arr, amountDue) {
    let changeChecker = cashInDrawerCounter(arr);    
    if (changeChecker !== amountDue) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    } else {
        return {
            status: "OPEN",
            change: arr
        }
    }
}

//-----------------------------------------------------------

function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let cashInDrawer = cashInDrawerCounter(cid);

    if (cashInDrawer < changeDue) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }

    } else if (cashInDrawer === changeDue) {
        return {
            status: "CLOSED",
            change: [...cid]
        }

    } else {
        let changeDueInCents = changeDue * 100;
        let otpimizedCid =quantityOfCashCurrencyAdder(currencyUnitAdder(arrayCopier(cid))); 
        let change = changeConstructor(otpimizedCid, changeDueInCents);
        let finalChange = changeOptimizer(change);
        let result = changeChecker(finalChange, changeDue);
        return result;
    }
}


// checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ])
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// console.log(checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]))
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
// 
