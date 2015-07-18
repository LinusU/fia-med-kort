#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var renderPDF = require('./lib/render-pdf')

function render (name, cb) {
  var outPath = path.join(__dirname, 'gen', name + '.pdf')

  renderPDF(name, outPath, cb)
}

function done (err) {
  if (err) throw err
}

if (process.argv[2]) {
  render(process.argv[2], done)
} else {
  render('base', done)
  render('games', done)
  render('events', done)
}
