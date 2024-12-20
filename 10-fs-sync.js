const {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', `Here are the contents : ${first}, ${second}`)
