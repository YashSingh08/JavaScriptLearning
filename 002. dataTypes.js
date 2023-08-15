/*
    Data types we have in javascript
    numbers => 1, 5, 14 ,76, 2.5, (it can be integer or float or double) 
    strings => 'hello', "hello world" (single qoutes or double qoutes bith will work)
    arrays => [1, 2, 4, 5, 6] , ["a", "b", "c", "d", "e"] (integer array or string array or character array)
    objects => {} (like a function using a body, that is also acts as an object)
    boolean => true/false
*/

// numbers (either integer or float or double)
let num1 = 1
console.log("this is a integer number: "+num1)
let num2 = 1.5
console.log("this is a float number: "+num2)


// strings
let str = "hello there i'm a string data type"
console.log(str)

// arrays
let arr = [1, 2, 3, 4, 5]
console.log("this is an arr using literal : "+arr)

let arr2 = new Array(10, 20, 30, 40, 50)
console.log("this is an array using new keyword : "+arr2)

// objects
const o = new Object();
o.foo = 42;
console.log(o);

let person = {
    name: 'Yash Singh',
    location : 'Delhi',
    displayInfo : function(){
        console.log(`My name is ${person.name} i live in ${person.location}`);
    }
}
person.displayInfo(); 

// boolean types
a = 10
if (a>10) {
    console.log(true)
} else {
    console.log(false)
}