'use strict'
const store = require('../store')
const gameEvents = require('../games/events.js')

const timingDelay = 1501

const signUpSuccess = function (data) {
  // console.log('signup Success', data)
  $('form').trigger('reset')
  $('#modelTitle').text('Successfuly Sign Up!').css('background-color', 'green').animate({
    opacity: 0.25
  }, timingDelay, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Sign in')
  })
  $('#formSignUp').fadeOut(700)
  $('#formSignIn').show(500)
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  // console.log('signup Failure', data)
  $('#modelTitle').text('SignUp Failed! Be sure to confirm password').css('background-color', 'red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Sign Up')
  })
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  // console.log('Sign in success By ui', data)
  //  we need to successful login token by this function.
  store.user = data.user
  // console.log('after stored user data into store.user', data)
  $('#form-change-password').slideToggle(500)
  $('#formSignIn').slideToggle(500)
  // $('#btnShowSignUpSection').hide(500)
  // $('#btnShowSignUpSection').slideToggle(500)
  $('#btn-Signout').slideToggle(500)
  $('#btn-ShowGameRecords').toggle(500)
  $('#btnShowSignUpIn').hide(500)
  $('#myAccount').text('My Tic-Tac-Toe')
  $('#modelTitle').text('Successfuly Logged In!').css('background-color', 'green').animate({
    opacity: 0.25
  }, timingDelay, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Change Password')
  })
  gameEvents.createAGameForAUser()
  // $('form').trigger('reset')
  // clears all forms
  // debugger
}

const signInFailure = function (data) {
  // console.log('Sign in failure', data)
  $('form').trigger('reset')
  $('#modelTitle').text(' User or Password is Wrong, Try Again! ').css('background-color', 'red').animate({
    opacity: 0.5
  }, timingDelay, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Sign In')
  })
}

const changePwSuccess = function (data) {
  $('form').trigger('reset')
  // console.log('Change password success', data)
  $('#modelTitle').text(' Password changed Successfully ').css('background-color', 'green').animate({
    opacity: 0.5
  }, timingDelay, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Change Password')
  })
  $('.modal .fade').delay(800).toggle()
}
const changePwFailure = function (data) {
  $('form').trigger('reset')
  // console.log('Change password failed!', data)
  $('#modelTitle').text(' Oppss! Something went wrong! Try again! ').css('background-color', 'red').animate({
    opacity: 0.5
  }, timingDelay, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Change Password')
  })
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  // console.log('User sign out Successful')
  store.user = null
  $('#modelTitle').text(' User Signed Out Successfully! ').css('background-color', 'green').animate({
    opacity: 0.5
  }, timingDelay, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Sign In')
  })
  $('#form-change-password').hide(600)
  $('#formSignIn').show(600)
  $('#btn-Signout').hide(600)
  // $('#btnShowSignUpSection').show(600)
  $('#btnShowSignUpIn').show(500)
  $('#btn-ShowGameRecords').hide(500)
  $('#games-display').empty()
  $('#myAccount').text('Sign In Here!')
}

const signOutFailure = function () {
  $('form').trigger('reset')
  // console.log('signOut Failed!')
  $('#modelTitle').text(' Sign Out Failed! Please Try Again... ').css('background-color', 'red').animate({
    opacity: 0.5
  }, timingDelay, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Change Password')
  })
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePwSuccess,
  changePwFailure
}
