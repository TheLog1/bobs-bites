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
  $('#signed-in-message').text('Sign in Success!')
  store.user = response.user
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#change-password-button').show()
  $('#start-page').hide()
  $('#report-page').show()
  $('#sign-in')[0].reset()
  $('#change-password').hide()
}
const signInFailure = function () {
  $('#message').text('Sign in failed')
  $('#sign-up').show()
  $('#sign-in')[0].reset()
  $('#sign-up-button').hide()
}
const changePasswordSuccess = function () {
  $('#signed-in-message').text('change password success!')
  $('#change-password')[0].reset()
}
const changePasswordFailure = function () {
  $('#signed-in-message').text('change password failed :(')
  $('#change-password')[0].reset()
}
const signOutSuccess = function () {
  $('#message').text('sign out success!')
  store.user = null
  $('#sign-out').hide()
  $('#change-password-button').hide()
  $('#report-page').hide()
  $('#start-page').show()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
}
const signOutFailure = function () {
  $('#signed-in-message').text('sign out failed')
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
