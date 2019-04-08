
const store = require('../store')
const api = require('./api')
// const gEn = require('../gameEngine.js')
const ui = require('./ui')

// updateApiArray(arrNumber, value, over, token)
// over and token valuelerini gondermem gerek

// let isGameEnd = false
let currentGameID

const handleCreateUpdate = function () {
  if (store.game === null) {
    console.log('There is no game, creating')
    createAGameForAUser()
  } else {
    console.log('handle section 2')
    // updateApiArray()
  }
}

const createAGameForAUser = function (event) {
  cleanTheBoard()
  $('#playAgain').hide()
  $('.play-message-board').hide()
  if (store.user.token === '' || store.user.token === undefined) {
    console.log('There is no user Logged In! To Create a game, please sign In!')
  // } else if (store.gBoardArr !== ['', '', '', '', '', '', '', '', '']) {
  //   console.log('You cant save existing game. Finish game and try again.')
  } else {
    console.log('creating a game, hopefully...')
    api.createGame(store.user.token)
      .then(ui.onCreateGameSuccess)
      .catch()
  }
}

const cleanTheBoard = function () {
  store.gBoardArr = ['', '', '', '', '', '', '', '', '']
  console.log('store.gBoardArr cleaned! Array is: ' + store.gBoardArr)
  store.currentTurn = 'X'
  $('#whosTurn').text('X')
  $('.box').text('')
}
//
// const updateFullArray = function () {
//   // store.
//   store.gBoardArr =
// }

const showPlayButton = function () {
  $('#playAgain').show(1000).on('click', createAGameForAUser)
  $('.play-message-board').show()
}

const updateApiArray = function (arrNumber, value, isGameEnd) {
  if (isGameEnd === true) {
    $('#whosTurn').text('Game Over')

    // What happens if a game ends?
    // $('#onPlayMessage').text(store.currentTurn + 'Won the Game!')
    $('.play-message-board').text(store.currentTurn + ' Won the Game!').css('background-color', 'green').animate({
      opacity: 0.5
    }, 1000, function () {
      // Animation complete.
      $('.play-message-board').animate({opacity: 1}).css('background-color', '')
    })
    // $('.play-message-board')

    // $('#playAgain').show(1000).on('click', createAGameForAUser)
    showPlayButton()
  }
  // yendiysek isgamend true gelecek
  // if (currentGameID === null) {
  //   console.log('There is no current game ID, creating a game.....')
  //   createAGameForAUser()
  // } else {
  console.log('current game id is: ' + currentGameID)
  if (store.user === '' || store.user === undefined) {
    console.log('There is no user Logged In! To save record, please sign In!')
  // } else if ($('#whosTurn').text() === 'Game Over') {
  //   // Check if game is over or not
  //   // isGameEnd = true
  //   console.log('isGameEnd' + isGameEnd)
  } else if (store.game === undefined) {
    console.log('called by updateLoggedInGame and store.game.id is undefined. Calling back create game')
    console.log('my stored user token is ' + store.user.token)
    api.createGame(store.user.token)
      .then(ui.onCreateGameSuccess)
      .catch()
  } else {
    updateApiArrayExtension(arrNumber, value, isGameEnd)
    $(document).delay(1000).queue(function () {
      updateApiArrayExtension(arrNumber, value, isGameEnd)
    })
  }
  // $('').delay(1000).updateApiArrayExtension(arrNumber, value)
  // I need to wait for creating the game on API
  // console.log('I am updating the API game' +
  // 'arrNumber= ' + arrNumber +
  // 'value= ' + value +
  // 'gamestatus= ' + isGameEnd +
  // 'store.user.token= ' + store.user.token)
  // // debugger
  // api.updateLoggedInGame(arrNumber, value, isGameEnd, store.user.token)
  //   .then(console.log)
  //   .catch()
}

const updateApiArrayExtension = function (arrNumber, value, isGameEnd) {
  //
  $(() => {
    console.log('I am updating the API game' +
  'arrNumber= ' + arrNumber +
  'value= ' + value +
  'gamestatus= ' + isGameEnd +
  'store.user.token= ' + store.user.token)
    api.updateLoggedInGame(arrNumber, value, isGameEnd, store.user.token)
      .then(console.log)
      .catch()
  })
}

const endTheGameOnEvents = function () {
  // api.finishLoggedInGame(false, store.user.token)
  console.log('I Shouldnt CALLED!!')
}

const onShowGameHistory = function () {
  event.preventDefault()
  api.indexAllGames(store.user.token)
    .then(ui.getGamesSuccess)
    .catch()
}

const addHandlers = function () {
  // $('.box').on('click', updateApiArray)
  $('.box').on('click', handleCreateUpdate)
  $('#formGameHistory').on('submit', onShowGameHistory)
}
module.exports = {
  addHandlers,
  updateApiArray,
  createAGameForAUser,
  endTheGameOnEvents,
  showPlayButton
}
