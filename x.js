module.exports = function(mod) {
  require.paths.unshift(module.parent.filename.substr(0, module.parent.filename.lastIndexOf('/')))
  return require('node_extensions/' + mod)
    (require(mod)) // this is below so we know the line of the failed module
}