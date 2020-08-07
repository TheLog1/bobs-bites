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

module.exports = {
  showReport,
  submitReport
}
