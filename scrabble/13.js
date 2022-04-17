// What is the shortest word that contains all 5 vowels?

const fs = require('fs');
const raw = fs.readFileSync('./sowpods.txt', 'utf8');
const data = raw.split('\n');

function solution(words) {
  const result = []
  words.forEach(word => {
    if (word.includes('A') && word.includes('E') && word.includes('I') && word.includes('O') && word.includes('U')) {
      const initialValue = 0;
      var shortestString = result.reduce(function(previousValue, currentValue){
        return previousValue.length <= currentValue.length ? previousValue:currentValue, initialValue
      })
    }
  })

  console.log(shortestString)
}

solution(data)




// function solution(words) {
//   var result = []
//   words.forEach(word => {
//     if (word.includes('A') && word.includes('E') && word.includes('I') && word.includes('O') && word.includes('U')) {
//       result.push(word)
//     }
//   })

//   console.log(result)
//   var shortestString = result.reduce(function(a, b) {
//     return a.length <= b.length ? a : b;
//   })
// }

// solution(data) //this shows the array of words

// //array.reduce look @ 


// var arrayList  = ["Elements", "Console", "Sources", "Performance", "Network", "Memory"];
//         var shortest_string =   arrayList.reduce(function(a, b) {
//             return a.length <= b.length ? a : b;
//         })
// console.log(shortest_string);