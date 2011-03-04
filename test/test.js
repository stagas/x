var crypto = require('x')('crypto')
  , math = require('x')('math')
  , util = require('x')('util')
  
console.log('crypto.hash(string, [algo], [encoding])', ':' , crypto.hash('hello'))
console.log('math.multiply(a, b)', ':', math.multiply(5, 10))
console.log('util.sprintf()', ':', util.sprintf("[%10s]", 'monkey'))
util.printf("util.printf() : [%10s]", 'monkey')