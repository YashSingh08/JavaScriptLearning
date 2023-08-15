// Exercise for asynchronous programming
// You go to the restaurant with your friend and ordered a soup.
// Task: If waiter brings the soup, tip the waiter and pay for the soup, elsewise leave a bad review
// Keep in mind it is an asynchronous operation

// Structure of the solution will be something like follows:
// getSoup() {
//     let rating, let tip, let pay, let review
//     try {
//         soup as promises
//         output soup
//         rating = rating_increases
//         tip = tip_something
//         pay = pay_for_soup
//         review = good_review
//     } catch (error) {
//         if didn't get what was asked for
//         output error
//         rating = rating_decreases
//         tip = No_tip
//         pay = No_payment
//         review = bad_review
//     }
// }

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve("Soup is ready"): reject("No Soup today")
    }, 1000)
})

const getSoup = async () => {
    const data = {rating: 0, tip: 0, pay: 0, review: 0} // null value or undefined

    try {
        const soup = await promise1
        data.rating = 5
        data.tip = 0.2
        data.pay = 50
        data.review = 5
        return data
    } catch (error) {
        console.log(error)
        data.rating = 1
        data.tip = 0
        data.pay = 0
        data.review = 1
        return data
    }
}
getSoup().then(value => console.log(value))