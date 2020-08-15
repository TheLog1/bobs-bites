const api = require('./api')

const getFormFields = require('../../../lib/get-form-fields')

const ui = require('./ui')
// after the submit report button is pressed
const submitReport = function (event) {
  event.preventDefault()
  const form = event.target
  // getting the info from the form
  const formData = getFormFields(form)
  // sending that data to the server with the ajax call
  api.createReport(formData)
    .then(ui.createReportSuccess)
    .catch(ui.createReportFailure)
}

const showReports = function (event) {
  event.preventDefault()
  // not letting the reports list double when pressed twice.
  $('.reports-index').empty()
  // the get request for all reports.
  api.indexReports()
    .then(ui.showReportsSuccess)
    .catch(ui.showReportsFailure)
}

const addHandlers = () => {
  // letting the start report button toggle the report from showing and not showing.
  $('#start-report').click(function () {
    $('#report').toggle()
  })
  $('.submit-report').click(function () {
    $('.signed-in-message-2').text('Report submitted!')
  })
  // submitting the report.
  $('#report').on('submit', submitReport)
  // then showing the reports list
  $('#show-reports-button').on('click', showReports)
}

module.exports = {
  submitReport,
  showReports,
  addHandlers
}
