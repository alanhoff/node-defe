'use strict'

module.exports = function (p) {
  var resolve, reject
  var Implementation = p || Promise

  var promise = new Implementation(function () {
    resolve = arguments[0]
    reject = arguments[1]
  })

  return {
    resolve: resolve,
    reject: reject,
    promise: promise
  }
}
