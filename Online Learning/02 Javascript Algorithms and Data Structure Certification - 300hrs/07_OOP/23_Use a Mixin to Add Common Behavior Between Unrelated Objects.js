/* 
As you have seen, behavior is shared through inheritance. 
However, there are cases when inheritance is not the best solution. 
Inheritance does not work well for unrelated objects like Bird and 
Airplane. They can both fly, but a Bird is not a type of Airplane 
and vice versa.

For unrelated objects, it's better to use mixins. 
A mixin allows other objects to use a collection of functions. */

let bird = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengeres: 524
};

let flyMixin = function (obj) {
    obj.fly = function () {
        console.log("Flying...woosh ! ");
    }
};


flyMixin(bird);
bird.fly() // Flying...woosh ! 

flyMixin(plane);
plane.fly() // Flying...woosh ! 


/* 
Note how the mixin allows for the same fly method 
to be reused by unrelated objects bird and plane. */


console.log('--------------------------------------------');

let newBird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line

const glideMixin = function (obj) {
    obj.glide = function () {
        console.log("I'am gliding ... waoouh !")
    }
}

glideMixin(newBird);
glideMixin(boat);

newBird.glide()
boat.glide()