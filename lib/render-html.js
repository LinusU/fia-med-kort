var template = require('./template')
var loadCards = require('./load-cards')

function renderHTML (name, cb) {
  loadCards(name, function (err, cards) {
    if (err) return cb(err)

    var html
    try {
      html = template({ cards: cards })
    } catch (err) {
      return cb(err)
    }

    cb(null, html)
  })
}

module.exports = renderHTML
