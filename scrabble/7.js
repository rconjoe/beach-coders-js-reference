const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')


// What are all of the words that start and end with a Y?

function solution (words) {
    words.forEach(function(word) {
        if (word.startsWith('Y') || word.endsWith('Y')) {
            console.log(word)
        }
    })
} 

solution(wordList)