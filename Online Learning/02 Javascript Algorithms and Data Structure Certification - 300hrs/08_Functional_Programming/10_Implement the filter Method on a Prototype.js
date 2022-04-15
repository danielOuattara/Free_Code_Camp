/* 
You might learn a lot about the filter method if you 
implement your own version of it. It is recommended 
you use a for loop or Array.prototype.forEach().

//--------------------------------------------------------------

Write your own Array.prototype.myFilter(), which should 
behave exactly like Array.prototype.filter(). 
You should not use the built-in filter method. 
The Array instance can be accessed in the myFilter method using this.
 */

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) === true) {
            newArray.push(this[i], i)
            // newArray.push(i, this)
            // newArray.push(this[i], i, this)
            // newArray.push(this[i],`index ${i} `)
            // newArray.push({value: this[i], i})
        }
    }
    // Only change code above this line
    return newArray;
};

const new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

console.log(new_s)


Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    const newArray = [];
    this.forEach(item => {
        if (callback(this[i], i, this) === true) {
            newArray.push(this[i], i)

        }
    }) 
    // Only change code above this line
    return newArray;
};