let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

console.log(foods)
let fruitsToRemove = ["oranges", "plums", "strawberries"];
// Only change code below this line

function cleanFoods(arr, obj) {
    return arr.forEach(item => {
        return delete obj[item]
    })
}

cleanFoods(fruitsToRemove, foods)

// Only change code above this line

console.log(foods);