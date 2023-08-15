// Arrays allows to store multiple values in it
const groceries = ["apple", "banana", "mango", "orange"]
console.log(groceries)

// Unlike arrays in programming languages like c++ and java, we can store multi data type values in the javascript array
const multiDataTypeArray = [1, 'A', "Apple", 2, 'B', "Banana", 3, 'C', "Cake", true, 1.231]
console.log(multiDataTypeArray)

// Arrays are store as 0 based indexing, that is first element will be at 0 position second is at 1 position and so on
// index give us the location of a value within an array
// Elements of groceries array
console.log(groceries[0])
console.log(groceries[1])
console.log(groceries[2])
console.log(groceries[3])

// Elements of multiDataTypeArray array
console.log(multiDataTypeArray[0])
console.log(multiDataTypeArray[1])
console.log(multiDataTypeArray[2])
console.log(multiDataTypeArray[3])
console.log(multiDataTypeArray[4])
console.log(multiDataTypeArray[5])
console.log(multiDataTypeArray[6])
console.log(multiDataTypeArray[7])
console.log(multiDataTypeArray[8])
console.log(multiDataTypeArray[9])
console.log(multiDataTypeArray[10])


// push() method
// Adds one or more elements to the end of an array and returns the new length of the array
groceries.push("pear")
console.log(groceries)

// slice() method
// slice method returns the portion of an array we want in a new array
console.log(groceries.slice(0, 2)) // this will print elements from 0 to 2 index including 0 and excluding 2
console.log(groceries.slice(2, 5)) // this will print elements from 2 to 5 index including 2 but excluding 5

// indexOf() method
// indexOf() method returns the index of that particular element in an array
console.log(groceries.indexOf(("orange")))
// if the searched elements is not present in an array this method will returns -1
console.log(groceries.indexOf(("peach")))

// length property
// length is an array property that returns the number of elements array is having
console.log(groceries.length)

// Higher order functions in Arrays
// These are the functions which takes function as an argument
/*   
map() method - it loops and returns an array
it will map through the array and print it on console its same as loop through an array
it maps one element to the another with the same index
*/
let result = [1, 2, 3, 4].map(number => number)
console.log(result)
// for example map each element with its twice
let result2 = [1, 2, 3, 4].map(number => number*2)
console.log(result2)

// filter() method
// it takes two arguments, one is array, and other is any number which is used to filter an array
// as here we are taking an array which is taking an array and a number and printing all the numbers greater than a number
const filter = (numbers, greaterThan) => {
    let result = []
    for(const number of numbers) {
        if(number > greaterThan) {
            result.push(number)
        }
    }
    return result
}
console.log(filter([1, 2, 3, 4, 5, 6], 3))

// reduce() method
// it takes function as an argument and reduces the loops and gives us back the accumulator
const nums = [1, 2, 3, 4]
const res = nums.reduce((prev, curr) => prev+curr)
console.log(res)
// we can also multiply the elements
const arr = [1, 2, 3, 4]
const ans = arr.reduce((prev, curr) => prev*curr)
console.log(ans)