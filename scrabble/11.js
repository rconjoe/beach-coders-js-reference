// How many words contain the substring 'TYPE'?

const fs = require('fs')

const data = fs.readFileSync('./sowpods.txt', 'utf-8')
const wordList = data.split('\n')

function solution(words) {
    const result = []
    words.forEach(word => {
        if (word.match(/TYPE/g)) {
            result.push(word)
        }
    })
    return result
}

console.log(solution(wordList)) //mine only shows the array, not the list of arrays


// function solution (words) {
//     words.forEach(function(word){
//         let i = 0;
//         while (i < 1 && word.includes('TYPE')) {
//             console.log(i);
//             i++;
//         }
//     })
// }

// solution(wordList)







// occurences (data, 'TYPE')




// function solution (words) {
//     words.forEach(function(word){
//         let i = 0;
//         do {
//             console.log(i);
//             i++;
//             //break;
//         } while (word.includes('TYPE'))
//     })
// }

// solution(wordList)