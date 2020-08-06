const store = require('../store')
const signUpSuccess = function () {
  $('#message').text('Successfully signed up! Now Sign In!')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-up')[0].reset()
}
const signUpFailure = function () {
  $('#message').text('Sign Up failed :(')
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}
const signInSuccess = function (response) {
  $('#message').text('Sign in Success!')
  store.user = response.user
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#change-password-button').show()
  $('#start-page').remove()
}
const signInFailure = function () {
  $('#message').text('Sign in failed')
  $('#sign-up').show()
  $('#sign-in')[0].reset()
  $('#sign-up-button').hide()
}
const changePasswordSuccess = function () {
  $('#message').text('change password success!')
}
const changePasswordFailure = function () {
  $('#message').text('change password failed :(')
}
const signOutSuccess = function () {
  $('#message').text('sign out success!')
  store.user = null
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-password-button').hide()
}
const signOutFailure = function () {
  $('#message').text('sign out failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
