// Create and print an array containing all the words that end in 'GHTLY'

const fs = require('fs');
const raw = fs.readFileSync('./sowpods.txt', 'utf8');
const data = raw.split('\n');

function solution(words) {
  const result = []

  words.forEach(word => {
    if (word.endsWith('GHTLY')) {
      result.push(word)
    }
  })

  console.log(result)
}

solution(data)
