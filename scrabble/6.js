// What are all of the words that have a B and an X and are less than 5 letters long?

const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')



function solution (words) {
    words.forEach(function(word) {
        if (word.includes('B') && word.includes('X') && word.length <= 4) {
            console.log(word)
        }
    })
} 

solution(wordList)