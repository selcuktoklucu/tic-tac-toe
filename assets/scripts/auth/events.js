// All clicks will be here to handle front end

const api = require('./api.js')
const gEn = require('../gameEngine.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const store = require('../store.js')
// let currentTurn = 'X'

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Hey I am on register function!')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Hey I am on SignIN function!')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const changeTurn = function () {
  if (store.currentTurn === 'X') {
    store.currentTurn = 'O'
  } else {
    store.currentTurn = 'X'
  }
  if ($('#whosTurn').text() !== 'Game Over') {
    $('#whosTurn').text(store.currentTurn)
  }
}

const onClickBox = function (event) {
  //                        ^^ Box number should be passed here!!!
  event.preventDefault()
  if ($('#whosTurn').text() === 'Game Over') {
    // Check if game is over or not
    console.log('Game Over')
  } else {
    console.log('click! event.target rendered! ' + event.target.id)
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
      $(event.target).html(store.currentTurn)
      // debugger
      // .then(api.setCurrentGame)
      // After rendering the turn Call API
      // console.log()
      const boxId = event.target.id
      console.log('boxId charater of 3 is : ' + boxId.charAt(3))
      gEn.updateGameBoardArray(store.currentTurn, boxId.charAt(3))
      // .then(changeTurn())
      changeTurn()
      //                    ^^   this should be changed by the turn
    }
  }
}

const addHandlers = function () {
  console.log('I am at events.js!, jquery passed me from app js')
  $('.box').on('click', onClickBox)
  $('#formSignUp').on('submit', onSignUp)
  $('#formSignIn').on('submit', onSignIn)
  $('#form-change-password').on('submit', onChangePassword)
  $('#formSignOut').on('submit', onSignOut)
}
module.exports = {
  addHandlers

}
