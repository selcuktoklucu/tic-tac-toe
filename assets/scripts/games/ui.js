
const store = require('../store')

const onCreateGameSuccess = function (data) {
  // console.log('create game success By ui', data)
  store.game = data
  // console.log('stored object is' + store.game)
}
const getGamesSuccess = function (data) {
  // console.log('retrived games' + data.games)
  $('#games-display').empty()
  $('#games-display').append('TotalGames: ' + data.games.length)
  // data.games.forEach(game.cells)
  data.games.forEach(function (game) {
    // console.log(game.id)
    $('#games-display').append(`
      <p>Game ID: ${game.id}</p>
      <p>Game Array: ${game.cells}</p>
      <p>Is Game Over: ${game.over}</p>
      <br>
      `
    )
  })
}
const onCreateGameFailure = function () {
  $('whosTurn').text('Game didnt saved.')
}
const updateApiArrayExtensionSuccess = function () {
  // $('whosTurn').text('Game  saved.')
}

const updateApiArrayExtensionFailure = function () {
  $('whosTurn').text('Game didnt saved.')
}

module.exports = {
  onCreateGameSuccess,
  getGamesSuccess,
  onCreateGameFailure,
  updateApiArrayExtensionSuccess,
  updateApiArrayExtensionFailure
}
// const getBooksSuccess = function (response) {
//   // console.log(response)
//   $('#message').text('')
//   $('#books-display').html('')
//   response.books.forEach(function (book) {
//     console.log(book.author)
//     $('#books-display').append(`
//       <h3>${book.title}</h3>
//       <p>author: ${book.author}</p>
//       <p>${book.id}</p>
//       <br>
//       `
//     )
//     // $('#books-display').append('<p>' + book.author + '</p>') >>>this works as well
//   })
// }
