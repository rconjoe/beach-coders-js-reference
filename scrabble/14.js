const fs = require('fs');
const raw = fs.readFileSync('./sowpods.txt', 'utf8');
const data = raw.split('\n');


// What is the longest word that contains no vowels?

// function solution(words) {
//     var result = []
//     words.forEach(word => {
//       if (!word.includes('A') && !word.includes('E') && !word.includes('I') && !word.includes('O') && !word.includes('U')) {
//         result.push(word)
//       }
//     })
  
//     console.log(result.reduce((a, b) => a.length >= b.length ? a : b)
//     )
//   }
  
//   solution(data)//this displays 'GLYCYLS'



function solution(words) {
    var result = []
    words.forEach(word => {
      if (!word.includes('A') && !word.includes('E') && !word.includes('I') && !word.includes('O') && !word.includes('U')) {
        result.push(word)
      }
    })
  
    console.log(result.reduce((a, b) => a.length > b.length ? a : b)
    )
  }
  
  solution(data) //this displays 'TSKTSKS', both are 7 letters 





