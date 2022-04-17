

const fs = require('fs');
const raw = fs.readFileSync('./sowpods.txt', 'utf8');
const data = raw.split('\n');

// What is the shortest word that contains all 5 vowels?
// I know that I need to make an if statement to let the array contain all 5 vowels. 
// and make that statement sift through all words and compare to see which string is shorter,
//pass that string along to compare through the entire array of strings containing vowels


// //try #0
// function solution(words) {
//   const result = []
//   words.forEach(word => {
//     if (word.includes('A') && word.includes('E') && word.includes('I') && word.includes('O') && word.includes('U')) {
//       var shortestString = result.reduce(function(a, b){
//         return a.length <= b.length ? a:b;
//       })
//     }
//   })

//   console.log(shortestString)
// }

// solution(data)//no initial value 


// //try #1
// function solution(words) {
//   const result = []
//   words.forEach(word => {
//     if (word.includes('A') && word.includes('E') && word.includes('I') && word.includes('O') && word.includes('U')) {
//       const initialValue = 0;
//       var shortestString = result.reduce(function(previousValue, currentValue){
//         return previousValue.length <= currentValue.length ? previousValue:currentValue, initialValue
//       })
//     }
//   })

//   console.log(shortestString)
// }

// solution(data)



// //try #2
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

// // //array.reduce look @ 


// //try #2.5
function solution(words) {
  var result = []
  words.forEach(word => {
    if (word.includes('A') && word.includes('E') && word.includes('I') && word.includes('O') && word.includes('U')) {
      result.push(word)
    }
  })

  console.log(result.reduce((a, b) => a.length <= b.length ? a : b)
  )
}

solution(data) // FINALLY GOT IT


// //this array console logs the shortest string in the array
// var arrayList  = ["Elements", "Console", "Sources", "Performance", "Network", "Memory"];
//         var shortest_string =   arrayList.reduce(function(a, b) {
//             return a.length <= b.length ? a : b;
//         })
// console.log(shortest_string);


// //another example that works 
// var arr = ["aaaa", "aa", "aa", "aaaaa", "a", "aaaaaaaa"];

// console.log(
//   arr.reduce((a, b) => a.length <= b.length ? a : b)
// )