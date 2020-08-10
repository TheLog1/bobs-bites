// requireing in api
const api = require('./api')
// if it fails to create report, it will clear fields and send user message that it failed
const createReportFailure = function () {
  $('#signed-in-message').text('Failed To Create Report')
  $('#report').trigger('reset')
}
// on create report success
const createReportSuccess = function () {
  // it gives the message to the user
  $('#signed-in-message').text('You Created a Report')
  // resets the fields
  $('#report').trigger('reset')
  // hides the report form
  $('#report').hide()
  // and clicks the show all reports button
  $('#show-reports-button').click()
}
// after it shows all reports
const showReportsSuccess = function (res) {
  // success message
  $('#signed-in-message').text('Here Are Your Reports!')
  // it clears window if already viewing single report.
  $('.report-index').empty()
  // clearing the edit box if previously editing.
  $('#edit-form').trigger('reset')
  // requiring in the handlebars for all reports to loop through.
  const reportsPageTemplate = require('../../templates/reports-page.handlebars')
  // giving the reports page template a value of what in the reports.
  const reportsPageHtml = reportsPageTemplate({ reports: res.reports })
  // inserting the info into the div in my index.html
  $('.reports-index').append(reportsPageHtml)
  // going inside of the div and clicking the delete report button
  $('.reports-index').on('click', '.delete-report', (event) => {
    event.preventDefault()
    // getting the id of the report we want to delete
    const reportId = $(event.target).closest('section').data('id')
    // sending the api call with the info we just gathered
    api.deleteReport(reportId)
      .then(deleteReportSuccess)
      .catch(deleteReportFailure)
  })
  // going into reports div and clciking the show single report button
  $('.reports-index').on('click', '.show-one-report', (event) => {
    event.preventDefault()
    // fetching the id
    const reportId = $(event.target).closest('section').data('id')
    // sending the api call with the id
    api.showOneReport(reportId)
      .then(showReportSuccess)
      .catch(showReportFailure)
  })
}

const showReportsFailure = function () {
  $('#signed-in-message').text('Show Reports Failed')
}
// function for everything happening in single report
const showReportSuccess = function (res) {
  // message for user
  $('#signed-in-message').text('Here Is Your Report!')
  // taking away all reports
  $('.reports-index').empty()
  // clearing previously viewed report
  $('.report-index').empty()
  // requiring the handlebar for single report
  const reportPageTemplate = require('../../templates/report-page.handlebars')
  // giving the handlebar report the info taken from the get request
  const reportPageHtml = reportPageTemplate({ report: res.report })
  // moving the info into the page
  $('.report-index').append(reportPageHtml)
  // hiding the edit form that is within the handlebar
  $('#edit-form').hide()
  // going into the handlebar and adding the click event to show the edit form
  $('.report-index').on('click', '.edit-report-button', (event) => {
    event.preventDefault()
    $('#edit-form').show()
  })
  // update report button finalizing the update.
  $('.update-report').on('click', (event) => {
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
      .then(updateReportSuccess)
      .catch(updateReportFailure)
  })
}
// on the update report success
const updateReportSuccess = function () {
  // showing the updated reports
  $('#show-reports-button').click()
  $('.reports-index').empty()
  // success message
  $('#signed-in-message-2').text('Report Updated!')
}

const updateReportFailure = function () {
  $('#signed-in-message').text('Report Not Updated!')
}

const showReportFailure = function () {
  $('#signed-in-message').text('Failed To Show Report')
}

const deleteReportSuccess = function () {
  $('#signed-in-message-2').text('Report Deleted!')
  // showing the reports
  $('#show-reports-button').click()
  $('.reports-index').empty()
}

const deleteReportFailure = function () {
  $('#signed-in-message').text('Delete Report Failed')
}

module.exports = {
  createReportFailure,
  createReportSuccess,
  showReportsSuccess,
  showReportsFailure
}
