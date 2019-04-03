// All clicks will be here to handle front end

const api = require('./api.js')
const gEn = require('../gameEngine.js')

let currentTurn = 'X'

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Hey I am on register function!')
  api.signUp()
}

const changeTurn = function () {
  if (currentTurn === 'X') {
    currentTurn = 'O'
  } else {
    currentTurn = 'X'
  }
}

const onClickBox = function (event) {
  //                        ^^ Box number should be passed here!!!
  event.preventDefault()
  if ($('#whosTurn').text() === 'Game Over') {
    // Check if game is over or not
    console.log('Game Over')
  } else {
    console.log('click! event.target rendered!' + event.target.id)
    // alert('ALEEERRT ' + event.target.id)
    console.log('text value is: ', $(event.target).text())
    if ($(event.target).text() === 'X' || $(event.target).text() === 'O') {
      console.log('You tried invalid slot! Please use a valid spot to play!')
      //
    } else if (gEn.gameState === false) {
      console.log('game is over Mesage from onClickBox')
      // debugger
    } else {
      // Get value of the box, so we can check if it is valid
      $(event.target).html(currentTurn)
      // debugger
      // .then(api.setCurrentGame)
      // After rendering the turn Call API
      // console.log()
      const boxId = event.target.id
      console.log('boxId charater of 3 is : ' + boxId.charAt(3))
      gEn.updateGameBoardArray(currentTurn, boxId.charAt(3))
      // .then(changeTurn())
      changeTurn()
      //                    ^^   this should be changed by the turn
    }
  }
}

const addHandlers = function () {
  console.log('I am at events.js!, jquery passed me from app js')
  $('.box').on('click', onClickBox)
  $('#btn-signUp').on('click', onSignUp)
}
module.exports = {
  addHandlers

}
