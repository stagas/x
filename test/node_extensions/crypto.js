module.exports = function(crypto) {

  crypto.hash = function(s, algo, enc) {
    return crypto.createHash(algo || 'md5').update(s).digest(enc || 'hex')
  }

  return crypto
}