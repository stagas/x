var crypto = require('x')('crypto')
  , math = require('x')('math')
  
console.log('crypto.hash(string, [algo], [encoding])', ':' , crypto.hash('hello'))
console.log('math.multiply(a, b)', ':', math.multiply(5, 10))