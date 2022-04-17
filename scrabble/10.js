// What are all of the words that have all 5 vowels, in alphabetical order?

const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')


function solution (words) {
    words.forEach(function(word) {
        if (word.includes('E') && word.includes('A') && word.includes('I') && word.includes('O') && word.includes('U') && word.localeCompare()){
            console.log(word)
        }
    })
} 

solution(wordList)