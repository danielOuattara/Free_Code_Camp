/* 
In previous lessons, you learned that an object can inherit 
its behavior (methods) from another object by referencing 
its prototype object: 
*/

// ChildObject.prototype = Object.create(ParentObject.prototype);

/* 
Then the ChildObject received its own methods by chaining them onto its prototype:
*/

// ChildObject.prototype.methodName = function() {...};

function Animal() {};
Animal.prototype.eat = function () {
    console.log('nom nom nom !');
};

function Bird() {};


Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.eat() // nom nom nom !

/* 
It's possible to override an inherited method. It's done the same way,
by adding a method to ChildObject.prototype using the same method name 
as the one to override. 
Here's an example of Bird overriding the eat() method inherited from Animal: 
*/

Bird.prototype.eat = function () {
    console.log("peck peck peck !");
}

duck.eat();