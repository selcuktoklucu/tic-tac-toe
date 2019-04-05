
const store = require('../store')

const onCreateGameSuccess = function (data) {
  console.log('create game success By ui', data)
  store.game = data
  console.log('stored object is' + store.game)
}

module.exports = {
  onCreateGameSuccess
}
