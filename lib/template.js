var fs = require('fs')
var ejs = require('ejs')
var path = require('path')

function loadTemplateSync () {
  var templatePath = path.join(__dirname, '..', 'template', 'index.ejs')
  var templateContent = fs.readFileSync(templatePath, 'utf8')

  return ejs.compile(templateContent, { filename: templatePath })
}

module.exports = loadTemplateSync()
