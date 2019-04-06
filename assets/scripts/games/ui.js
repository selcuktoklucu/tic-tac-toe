
const store = require('../store')

const onCreateGameSuccess = function (data) {
  console.log('create game success By ui', data)
  store.game = data
  console.log('stored object is' + store.game)
}
const getGamesSuccess = function (data) {
  console.log('retrived games' + data.games)
  data.games.forEach(function (game) {
    console.log(game.id)
    $('#games-display').append(`
      <h3>${game.id}</h3>
      <p>${game.cells}</p>
      <p>${game.over}</p>
      <br>
      `
    )
  })
}

module.exports = {
  onCreateGameSuccess,
  getGamesSuccess
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
