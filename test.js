'use strict'

const lab = exports.lab = require('lab').script()
const expect = require('code').expect
const defe = require('./')
const Bluebird = require('bluebird')

lab.experiment('general tests', () => {
  lab.test('should correctly instantiate', done => {
    const deferred = defe()

    expect(deferred.promise).to.be.an.object()
    expect(deferred.resolve).to.be.a.function()
    expect(deferred.reject).to.be.a.function()

    done()
  })

  lab.test('should work', done => {
    const deferred = defe()

    deferred.promise.then(value => {
      expect(value).to.be.true()
      done()
    })

    deferred.resolve(true)
  })

  lab.test('should be able to use your own Promise constructor', done => {
    const deferred = defe(Bluebird)

    expect(deferred.promise).to.be.instanceof(Bluebird)
    expect(deferred.promise).to.not.be.instanceof(Promise)

    done()
  })
})
