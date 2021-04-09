'use strict'
function prefixer(prefix) {
  return function(name) {
    return prefix + ' ' + name;
  }
}

module.exports = prefixer