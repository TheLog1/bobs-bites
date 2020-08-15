'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const reportEvents = require('./reports/events')
const api = require('./reports/api')
const ui = require('./reports/ui')
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
  $('#change-password-button').click(function () {
    $('#change-password').toggle()
  })
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // now for my report events
  $('#report').hide()
  reportEvents.addHandlers()
  $('.reports-index').on('click', '.delete-report', (event) => {
    event.preventDefault()
    // getting the id of the report we want to delete
    const reportId = $(event.target).closest('section').data('id')
    // sending the api call with the info we just gathered
    api.deleteReport(reportId)
      .then(ui.deleteReportSuccess)
      .catch(ui.deleteReportFailure)
  })
  $('.reports-index').on('click', '.show-one-report', (event) => {
    event.preventDefault()
    // fetching the id
    const reportId = $(event.target).closest('section').data('id')
    // sending the api call with the id
    api.showOneReport(reportId)
      .then(ui.showReportSuccess)
      .catch(ui.showReportFailure)
  })
  // update report button finalizing the update.
  $('.report-index').on('click', '.update-report', (event) => {
    event.preventDefault()
    // fetching the id of the report.
    const reportId = $(event.target).closest('section').data('id')
    // the data being passed in the patch request
    const data = {
      // id used for the ajax call
      reportId: reportId,
      // new info being passed
      info: $('.bite-edit-box').val()
    }
    api.updateReport(data)
      .then(ui.updateReportSuccess)
      .catch(ui.updateReportFailure)
  })
})
