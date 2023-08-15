// QUESTION 1
// Count the number of letters in a phrase
// input:- "Hey, can you go to grocery store with me?"
// output:- 41

// SOLUTION 1
const howManyLetters = () => {
    const phrase = "Hey, can you go to grocery store with me?"
    let count = 0
    for(letter in phrase) {
        count++
    }
    return count
}
const count = howManyLetters()
console.log(count)

// QUESTION 2
// Sum of all the numbers in an Array
// input:- arr[1, 2, 3, 4]
// output:- 10


// SOLUTION 2
const countSum = () => {
    const arr = [1, 2, 3, 4]
    let sum = 0
    for(let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
const sum = countSum()
console.log(sum)

// QUESTION 3
// Find a maximum number in an Array
// input:- arr[1, 2, 3, 4, 6, 12, 456, 312, 2, 2345, 1231, 78, 6, 8, 10]
// output:- 2345

// SOLUTION 3
const findMax = () => {
    const arr = [1, 2, 3, 4, 6, 12, 456, 312, 2, 2345, 1231, 78, 6, 8, 10]
    let max = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
const max = findMax()
console.log(max)