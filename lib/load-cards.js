var fs = require('fs')
var path = require('path')

const COLLECTIONS = path.join(__dirname, '..', 'src')

const whenDescription = {
  'end-of-life': 'Kortet spelas när en pjäs tas ut.',
  'end-of-turn': 'Kortet spelas i slutet av en tur.',
  'begining-of-turn': 'Kortet spelas i början av en tur.',
  'after-dice': 'Kortet spelas efter du slagit tärningen.',
  'instantly': 'Kortet spelas på direkten.',
  'anytime': 'Kortet kan spelas när som helst.'
}

function loadCards (name, cb) {
  fs.readFile(path.join(COLLECTIONS, name, 'cards.json'), function (err, raw) {
    if (err) return cb(err)

    var parsed
    try {
      parsed = JSON.parse(raw.toString())
    } catch (err) {
      return cb(err)
    }

    var result = []
    parsed.forEach(function (rawCard) {
      var card = {
        title: rawCard.title,
        description: rawCard.desc,
        when: whenDescription[rawCard.when],
        imagePath: path.join(COLLECTIONS, name, 'img', rawCard.name + '.png')
      }

      for (var i = 0; i < rawCard.count; i++) {
        result.push(card)
      }
    })

    cb(null, result)
  })
}

module.exports = loadCards
