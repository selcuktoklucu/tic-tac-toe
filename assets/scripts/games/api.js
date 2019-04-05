
const config = require('../config')
const store = require('../store')

const createGame = function (token) {
  console.log('creating a game on api.js')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token
    }
    // data: data >>Works as well
    // data: token
  })
}

const updateLoggedInGame = function (arrNumber, value, gameStatus, token) {
  console.log('I am in games/api.js and updating logged in game. Game id is= ' + store.game.game.id)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token
      // ,
      // 'index': arrNumber,
      // 'value': value,
      // 'over': gameStatus
    },
    data: {
      'game': {
        'cell': {
          'index': arrNumber, // <<<<< which INDEX
          'value': value // <<<<< X or O
        },
        'over': gameStatus // <<<<<game status
      }
    }
    // ,
    // data: data >>Works as well
    // data: {
    //   'game': {
    //     'cell': {
    //       'index': arrNumber, // <<<<< which INDEX
    //       'value': value // <<<<< X or O
    //     },
    //     'over': gameStatus // <<<<<game status
    //   }
    // }
  })
}

// const finishLoggedInGame = function (gameEndingStatus, token) {
//
// }

module.exports = {
  updateLoggedInGame,
  createGame

}
// //
// {
//   "game": {
//     "cell": {
//       "index": "'"${INDEX}"'",
//       "value": "'"${VALUE}"'"
//     },
//     "over":  "'"${OVER}"'"
//   }
// }
