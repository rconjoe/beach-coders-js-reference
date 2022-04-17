// What are all of the words containing UU?
const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')


// What are all of the words containing UU?

function solution (words) {
    words.forEach(function(word) {
        if (word.includes('UU')) {
            console.log(word)
        }
    })
} 

solution(wordList)

