const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')


// What are all of the words containing a Q but not a U?


function solution (words) {
    words.forEach(function(word){
        if (word.includes('Q') && !word.includes('U')) {
            console.log(word)
        } 
    })
}

solution(wordList)





// const qWord = qWord.includes('Q')

// function solution (words) {
//     words.forEach(function(word){
//         if (word.includes('Q') && !word.includes('U')) {
//             console.log(word)
//         } 
//     })
// }

// solution(wordList)