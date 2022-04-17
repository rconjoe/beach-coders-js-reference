// What are all of the words with no vowel and not even a Y?

const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')



function solution (words) {
    words.forEach(function(word) {
        if (!word.includes('E') && !word.includes('A') && !word.includes('I') && !word.includes('O') && !word.includes('U') && !word.includes('Y')) {
            console.log(word)
        }
    })
} 

solution(wordList)