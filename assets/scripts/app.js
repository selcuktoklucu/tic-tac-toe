'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./auth/events.js')
const gamesEvents = require('./games/events.js')

$(() => {
  // your JS code goes here
  console.log('I am at app.js, Jquery is working!')
  userEvents.addHandlers()
  gamesEvents.addHandlers()
  $('#playAgain').hide()
  $('#formSignUp').hide()
  $('#form-change-password').hide()
  $('#btn-Signout').hide()
  $('#btn-ShowGameRecords').hide()
  // $('#btnShowSignUpSection').on('click', alert(''))
  // $('#btn-Signout').slideToggle(500)
  // ^^ All clicks will be here to handle front ent
})
