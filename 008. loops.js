// Loops are the way of iteration
// with the help of loops we can iterately prints elements of loops one after the another in a particular manner
const fruits = ['banana', 'apple', 'orange', 'pear', 'mango']

// For loop
for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i])
}

console.log("------------------------------------------------------------------------------------")

// for each loop
for(const fruit of fruits) {
    console.log(fruit)
}

console.log("------------------------------------------------------------------------------------")

// while loop
let i=0
while(i<fruits.length) {
    console.log(fruits[i])
    i++
}

console.log("------------------------------------------------------------------------------------")

// do-while loop
let j=0
do{
    console.log(fruits[j])
    j++
}
while(j<fruits.length)

console.log("------------------------------------------------------------------------------------")