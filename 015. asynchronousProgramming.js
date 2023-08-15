/* 
    => Asynchronous Prorgamming is a concept introduced by Promises
    => Promises is an object that will produce some value in the future
        A promise is tied to an outcome that will show it is fulfilled.
        If that outcome does not happen, then the promise failed.
        A promise at the end must have one of these results.

    => In other words, Promises are used to handle asynchronous operations in JavaScript.
    Perform operations inside the callback function and if everything went well then call RESOLVE.
    If desired operations do not go well then call REJECT.
*/

// Suppose you are in a restaurant with friend and we ordered a soup and waiter said that he'll look into that,
// then it would be asynchronous request becuase it will take some to process meanwhile you and your friend having conversation.
// Either soup will be made and delivered to you, or waiter comes and tells you that there is no soup available today.
// Let's code this situation

const waitingForSoup = () => console.log("Soup arrived : using Timeout")

console.log("Start conversation with friend")
setTimeout(waitingForSoup, 2000) // waiting time of 2 seconds
console.log("Still talking")

// here we can notice "Start conversation with friend" will print first and then "Still talking" after 2 seconds "Soup arrived" is printing
// that is an example of asynchronous operation. But timeout is basically a thread blocking
// when dealing with real world data as API request then it gonna return as a Promise which is not a timeout thing

// to understand Promises, lets take an example. This example is similar to API calls
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // output depends on the isReady condition of either true or false
        isReady = [true, false][Math.floor(Math.random() * 2)] // randomly generating true and false 
        isReady ? resolve("Soup is ready"): reject("No Soup today")
    }, 1000)
})

console.log(promise1
    .then(value => console.log("Not async and await",value)) // displays "soup is ready" if condition is resolved because of true condition
    .catch(value => console.log("Not async and await",value)) // displays "No soup today" if condition is rejected because of false condition
)

// asyncronous example of API
const getDog1 = () => {
    fetch('https://dog.ceo/api/breeds/image/random') // promise
    .then(response => response.json()) // promise
    .then(data => console.log(data))
}
getDog1()

/*
    Another concept of asynchronous operations is Async & Await
    With the help of async and await we can get rid of many ".then" while asynchronous operation
*/
const getDog = async () => { // async is used whenever we are making an asynchronous call
    const url = "https://dog.ceo/api/breeds/image/random"
    const response = await fetch(url) // await is similar to ".then"
    const data = await response.json() // similar to '.then(response => response.json())'
    console.log(data)
}
getDog()

/*
    Rules for using a async/await
    1. You must have a function
    2. You must use the keyword async on asynchronous call
    3. You must use the keyword await on promise response
*/

// Let's code the Soup example using async/await
// we need to do error handling whenever we make an asynchronous call
const getSoup = async() => {
    try {
        const soup = await promise1
        console.log("using async and await",soup)
    } catch (error) {
        console.log("using async and await",error)
    }
}
getSoup()