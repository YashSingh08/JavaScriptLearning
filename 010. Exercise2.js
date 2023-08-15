// QUESTION 1
// return the frequency of each letter
// input:- "madam"
// output:- {'m': 2, 'a': 2, 'd': 1}

// SOLUTION 1
const letterFrequency = () => {
    const phrase = "madam"
    let frequency = {}
    for(const letter of phrase) {
        if(letter in frequency) {
            frequency[letter] = frequency[letter] + 1
        }
        else {
            frequency[letter] = 1
        }
    }
    return frequency
}
frequency = letterFrequency()
console.log(frequency)

// QUESTION 2
// return the frequency of each word in a phrase
// input:- "lol what lol yo yo yo"
// output:- {'lol': 2, 'what': 1, 'yo': 3}

// SOLUTION 2
const wordFrequency = () => {
    const phrase = "lol what lol yo yo yo"
    let frequency = {}
    let words = phrase.split(' ')
    for(const word of words) {
        if(word in frequency) {
            frequency[word] = frequency[word]+1
        }
        else {
            frequency[word] = 1
        }
    }
    return frequency
}
frequency = wordFrequency()
console.log(frequency)
