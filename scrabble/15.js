// Which of the letters Q, X, and Z is the least common?

const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')



function solution (words) {
    words.forEach(function(word) {
        if (!word.includes('Q')) {
            console.log(word.count())
        }
    })
} 

solution(wordList)