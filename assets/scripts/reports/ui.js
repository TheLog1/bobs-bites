
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
  $('.bite-edit-box').html('')
  $('.report-index').empty()
  $('#edit-form').trigger('reset')
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

  $('.reports-index').on('click', '.show-one-report', (event) => {
    event.preventDefault()
    const reportId = $(event.target).closest('section').data('id')
    api.showOneReport(reportId)
      .then(showReportSuccess)
      .then(function () {
        $('.bite-edit-box').html('')
      })
      .catch(showReportFailure)
  })
}

const showReportsFailure = function () {
  $('#signed-in-message').text('Show Reports Failed')
}

const showReportSuccess = function (res) {
  $('.reports-index').empty()
  $('#edit-form').trigger('reset')
  $('.report-index').empty()
  const reportPageTemplate = require('../../templates/report-page.handlebars')
  const reportPageHtml = reportPageTemplate({ report: res.report })
  $('.report-index').append(reportPageHtml)
  $('#edit-form').hide()
  $('.report-index').on('click', '.edit-report-button', (event) => {
    event.preventDefault()
    $('#edit-form').show()
  })
  $('.update-report').on('click', (event) => {
    event.preventDefault()
    const reportId = $(event.target).closest('section').data('id')
    const data = {
      reportId: reportId,
      info: $('.bite-edit-box').val()
    }
    api.updateReport(data)
      .then(updateReportSuccess)
      .catch(updateReportFailure)
  })
}

const updateReportSuccess = function (res) {
  $('#report-edit-form').empty()
  $('#show-reports-button').click()
  $('#signed-in-message').text('Report Updated!')
}

const updateReportFailure = function () {
  $('#signed-in-message').text('Report Not Updated!')
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
