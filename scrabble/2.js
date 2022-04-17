const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')


// What are all of the words containing an X and a Y and a Z? 

function solution (words) {
    words.forEach(function(word){
        if (word.includes('X') && word.includes('Y') && word.includes('Z')) {
            console.log(word)
        }
    })
}

solution(wordList)





// function solution (words) {
//     words.forEach(function(word){
//         if (word.includes('X', 'Y', 'Z')) {
//             console.log(word)
//         }
//     })
// }

// solution(wordList)