'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const reportEvents = require('./reports/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#report-page').hide()
  $('#change-password-button').hide()
  $('#change-password').hide()
  $('#sign-up-button').on('click', authEvents.showSignUp)
  $('#sign-in-button').on('click', authEvents.showSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password-button').on('click', authEvents.showChangePassword)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // now for my report events
  $('#report').hide()
  reportEvents.addHandlers()
})
