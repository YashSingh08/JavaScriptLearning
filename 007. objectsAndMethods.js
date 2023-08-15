/*
OBJECTS {}
objects are type of variables, quite similar to arrays but thay have something called key-value pairs,
this key-value pairs are called properties
for example: we have an object person and its properties are like as follows
    person.name = "John"
    person.shirt = "white"
*/

// key: value pairs
const person = {
    name: "john",
    shirt: "white"
}

// accessing the property
console.log(person.name) // accessing using dot notation
console.log(person['name']) // accessing using bracket notation
console.log(person.shirt)
console.log(person['shirt'])

// we can also assign properties to an object
person.pants = "black"
console.log(person.pants)

// to print entire object we can simply pass the name of an object into the consol.log()
console.log(person)


// lets create a function for the John
const introducer1 = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt
    }
    const intro = `Hi my name is ${person.name} and i wear ${person.shirt} shirt`

    return intro
}
let func1 = introducer1("John", "white")
console.log(func1)


/*
METHODS
Method is a property containing a function definition
taking a same example of jogn function here we calculate his net worth
*/
const introducer2 = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 10000,
        liabilities: 5000,
        netWorth: function() {
            return this.assets - this.liabilities
        }
    }
    const intro = `Hi my name is ${person.name} and i wear ${person.shirt} shirt and my net worth is ${person.netWorth()}`

    return intro
}
let func2 = introducer2("John", "white")
console.log(func2)