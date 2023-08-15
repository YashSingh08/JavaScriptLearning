// javascript function is a block of code designed to perform a particular task and is executed when "something" calls it
// functions increases readabilty and reusabilty


// no argument function
function sayMyName() {
    console.log("No argument function: "+"yash")
}

sayMyName()

// argument function
function myName(name) {
    console.log("argument function: "+name)
}

myName('yash')

// Dynamic Function
// this function is not dynamic as it can't use the input dynamically
function greeting1(name) {
    greet = "Hi name, welcome to the function"
    console.log("NOT DYNAMIC: "+greet)
}

// this fucntion is dynamic as it takes input as an argument and printing it while concatenating with the string
function greeting2(name) {
    greet = "Hi "+name+", welcome to the function"
    console.log("DYNAMIC WITH CONCATENATION: "+greet)
}

// this function is also dynamic but instead of concatenation here it uses String Interpolation to print the name
function greeting3(name) {
    greet = `Hi ${name}, welcome to the function`
    console.log("DYNAMIC WITH STRING INTERPOLATION: "+greet)
}
greeting1('yash')
greeting2('yash')
greeting3('yash')

// Function with return statement
// return statement stops the execution of a function and returns a value, returned value can be any data type or can also be void
function sum(a, b) {
    return a + b
}

let num1 = sum(1, 2)
console.log(num1)

/*
    Why we used return instead of using console.log() to print the value ?
    If we use console log instead of return then it can surely print the value when function is called
    but the value num2 will store will be undefined as function is not returning anything to num2
        function sum(a, b) {
            console.log(a + b)
        }
        let num2 = sum(1, 2)
        console.log(num2)
*/

// TIP CALCULATOR
function calculateFoodTotal(foodAmount, tipPercentage) {
    tipPercentage = tipPercentage/100
    let tipAmount = foodAmount * tipPercentage
    let totalAmount = foodAmount + tipAmount
    return totalAmount
}
let foodAmount = 999
let tipPercentage = 12
let totalAmount = calculateFoodTotal(foodAmount, tipPercentage)
console.log(`Total amount to be paid is ${totalAmount} when food was ${foodAmount} Rs. and tip is ${tipPercentage} percent`)

/* 
    => Arrow Function "=>" (used in ES6)
    
    arrow function allows us to write shorter function syntax

    This is Arrow function with explicit return
        const sumFunc = (a, b) => {
            return a+b
        }
    This is Arrow function with implicit return
        const sumFunc = (a, b) => a+b
*/