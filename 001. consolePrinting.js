/*
    to print something on console we use the function console.log(), anything goes in will be printed
    whether it is a string or a character or any Variable which holds some value in it.
*/
console.log('Hello World !!!')

// store something in variable and then printing that
let name = 'Yash Singh'
console.log(name)

// to store integer on console number is storing a value of 23 (without any quotes)
let number = 23
console.log(number)

/*
    in JavaScript there is no much difference of string and characters, we can either use double quotes ("")
    or we can use single quotes also ('') for both strings and characters
    string on console
*/
let str = "This is a string with double quotes"
let str2 = 'This is a string using single quotes'
console.log(str)
console.log(str2)

// printing character on console
let ch = '2'
console.log(ch)
let ch2 = "2"
console.log(ch2)

/*
    we can also take input from user using function prompt(), which pop up the statement with input field
    on the screen, then user can give their input to that field
    Here in this example, prompt() is called then user give thier input then that input is stored in the variable name
    then we are printing that variable using console.log()
*/
let num = prompt('enter the number')
console.log(num)

// we can also show the output in the prompt way, by using alert()
let num2 = prompt('enter the number')
alert(num)