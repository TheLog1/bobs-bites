const api = require('./api')

const getFormFields = require('../../../lib/get-form-fields')

const ui = require('./ui')

const showReport = function () {
  $('#report').show()
}

const submitReport = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createReport(formData)
    .then(ui.createReportSuccess)
    .catch(ui.createReportFailure)
}

const showReports = function (event) {
  event.preventDefault()
  $('.reports-index').empty()
  api.indexReports()
    .then(ui.showReportsSuccess)
    .catch(ui.showReportsFailure)
}

const onShowOneReport = function (event) {
  event.preventDefault()
  console.log('the form we submitted: ', event.target)
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.showOneReport(formData.report.id)
    .then(ui.showReportSucess)
    .catch(ui.showReportFailure)
}

const onUpdateReport = function (event) {
  event.preventDefault()
  console.log(event)
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.updateReport(formData)
    .then(ui.updateReportSuccess)
    .catch(ui.updateReportFailure)
}

const onDeleteReport = (event) => {
  event.preventDefault()
  console.log('hello')
}

const addHandlers = () => {
  $('#start-report').on('click', showReport)
  $('#report').on('submit', submitReport)
  $('#show-reports-button').on('click', showReports)
  // $('#delete-report').on('submit', reportEvents.onDeleteReport)
}

module.exports = {
  showReport,
  submitReport,
  showReports,
  onShowOneReport,
  onUpdateReport,
  onDeleteReport,
  addHandlers
}
