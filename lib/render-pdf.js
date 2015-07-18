var fs = require('fs')
var path = require('path')
var temp = require('fs-temp')
var template = require('./template')
var loadCards = require('./load-cards')
var renderHTML = require('./render-html')
var renderWebpage = require('render-webpage')

function tempWrite (template, content, cb) {
  temp.template(template).writeFile(content, 'utf8', cb)
}

function renderPDF (name, outputPath, cb) {
  renderHTML(name, function (err, html) {
    if (err) return cb(err)

    tempWrite('%s.html', html, function (err, htmlPath) {
      if (err) return cb(err)

      renderWebpage(htmlPath, outputPath, function (err) {
        if (err) return cb(err)

        fs.unlink(htmlPath, cb)
      })
    })
  })
}

module.exports = renderPDF
