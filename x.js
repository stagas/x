module.exports = function(mod) {
  // first requiring script's path, then package's path
  require.paths.unshift(module.parent.filename.substr(0, module.parent.filename.lastIndexOf('/')), __dirname)
  var mod_obj = require('node_extensions/' + mod)
    (require(mod)) // this is below so we know the line of the failed module
  require.paths = require.paths.slice(2) // undo our changes in require.paths
  return mod_obj
}