
const api = require('./api')

const createReportFailure = function () {
  $('#signed-in-message').text('Failed To Create Report')
  $('#report').trigger('reset')
}

const createReportSuccess = function () {
  $('#signed-in-message').text('You Created a Report')
  $('#report').trigger('reset')
  $('#report').hide()
  $('#show-reports-button').click()
}

const showReportsSuccess = function (res) {
  const reportsPageTemplate = require('../../templates/reports-page.handlebars')
  const reportsPageHtml = reportsPageTemplate({ reports: res.reports })
  $('.reports-index').append(reportsPageHtml)
  $('.reports-index').on('click', '.delete-report', (event) => {
    event.preventDefault()
    const reportId = $(event.target).closest('section').data('id')
    api.deleteReport(reportId)
      .then(deleteReportSuccess)
      .catch(deleteReportFailure)
  })
}

const showReportsFailure = function () {
  $('#signed-in-message').text('Show Reports Failed')
}

const showReportSuccess = function (res) {
  const reportsPageTemplate = require('../../templates/reports-page.handlebars')
  const reportsPageHtml = reportsPageTemplate({ reports: res.reports })
  $('.reports-index').append(reportsPageHtml)
}

const showReportFailure = function () {
  $('#signed-in-message').text('Failed To Show Report')
}

const deleteReportSuccess = function () {
  $('#signed-in-message').text('Report Deleted!')
  $('.reports-index').empty()
}

const deleteReportFailure = function () {
  $('#signed-in-message').text('Delete Report Failed')
}

module.exports = {
  createReportFailure,
  createReportSuccess,
  showReportsSuccess,
  showReportsFailure,
  showReportSuccess,
  showReportFailure,
  deleteReportSuccess,
  deleteReportFailure
}
