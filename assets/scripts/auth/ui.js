'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('signup Success', data)
  $('form').trigger('reset')
  $('#modelTitle').text('Successfuly Sign Up!').css('background-color', 'green').animate({
    opacity: 0.25
  }, 700, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Sign in')
  })
  $('#formSignUp').fadeOut(700)
}

const signUpFailure = function (data) {
  console.log('signup Failure', data)
  $('#modelTitle').text('SignUp Failed! Be sure to confirm password').css('background-color', 'red').animate({
    opacity: 0.25
  }, 700, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Sign Up')
  })
}

const signInSuccess = function (data) {
  console.log('Sign in success By ui', data)
  //  we need to successful login token by this function.
  store.user = data.user
  console.log('after stored user data into store.user', data)
  $('#form-change-password').slideToggle(500)
  $('#formSignIn').slideToggle(500)
  $('#btnShowSignUpSection').hide(500)
  // $('#btnShowSignUpSection').slideToggle(500)
  $('#btn-Signout').slideToggle(500)
  $('#btn-ShowGameRecords').toggle(500)

  $('#modelTitle').text('Successfuly Logged In!').css('background-color', 'green').animate({
    opacity: 0.25
  }, 700, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Change Password')
  })
  // $('form').trigger('reset')
  // clears all forms
  // debugger
}

const signInFailure = function (data) {
  console.log('Sign in failure', data)
  $('#modelTitle').text(' User or Password is Wrong, Try Again! ').css('background-color', 'red').animate({
    opacity: 0.5
  }, 700, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Sign In')
  })
}

const changePwSuccess = function (data) {
  console.log('Change password success', data)
  $('#modelTitle').text(' Password changed Successfully ').css('background-color', 'green').animate({
    opacity: 0.5
  }, 700, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Change Password')
  })
  $('.modal .fade').delay(800).toggle()
}
const changePwFailure = function (data) {
  console.log('Change password failed!', data)
  $('#modelTitle').text(' Oppss! Something went wrong! Try again! ').css('background-color', 'red').animate({
    opacity: 0.5
  }, 700, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Change Password')
  })
}

const signOutSuccess = function () {
  console.log('User sign out Successful')
  store.user = null
  $('#modelTitle').text(' User Signed Out Successfully! ').css('background-color', 'green').animate({
    opacity: 0.5
  }, 700, function () {
    // Animation complete.
    $('#modelTitle').animate({opacity: 1}).css('background-color', 'white').text('Sign In')
  })
  $('#form-change-password').hide(600)
  $('#formSignIn').show(600)
  $('#btn-Signout').hide(600)
  $('#btnShowSignUpSection').show(600)
}

const signOutFailure = function () {
  console.log('signOut Failed!')
  $('#modelTitle').text(' Sign Out Failed! Please Try Again... ').css('background-color', 'red').animate({
    opacity: 0.5
  }, 700, function () {
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
