'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('signup Success', data)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  console.log('signup Failure', data)
}

const signInSuccess = function (data) {
  console.log('Sign in success By ui', data)
  //  we need to successful login token by this function.
  store.user = data.user
  console.log('after stored user data into store.user', data)
  // $('form').trigger('reset')
  // clears all forms
  // debugger
}

const signInFailure = function (data) {
  console.log('Sign in failure', data)
}

const changePwSuccess = function (data) {
  console.log('Change password success', data)
}
const changePwFailure = function (data) {
  console.log('Change password failed!', data)
}

const signOutSuccess = function () {
  console.log('User sign out Successful')
  store.user = null
}

const signOutFailure = function () {
  console.log('signOut Failed!')
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
