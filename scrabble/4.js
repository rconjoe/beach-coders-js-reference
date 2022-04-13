// What are all of the words that contain the word CAT and are exactly 5 letters long?

// 1. contains cat
// 2. 5 letters long

const fs = require('fs');
const raw = fs.readFileSync('./sowpods.txt', 'utf8');
const data = raw.split('\n');

function solution(words) {
  words.forEach(word => {
    if (word.includes('CAT') && word.length === 5) {
      console.log(word)
    }
  })
}

console.log(solution(data));
