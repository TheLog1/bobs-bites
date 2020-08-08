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
}

const showReportFailure = function () {
  $('#signed-in-message').text('Show Reports Failed')
}

module.exports = {
  createReportFailure,
  createReportSuccess,
  showReportsSuccess,
  showReportFailure
}
