const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')


// What are all of the words that have no E or A and are at least 15 letters long?

function solution (words) {
    words.forEach(word => {
        if (!word.includes('E') && !word.includes('A') && word.length >= 15) {
            console.log(word)
        }
    })
} 

solution(wordList)
