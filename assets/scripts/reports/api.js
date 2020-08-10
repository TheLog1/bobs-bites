const config = require('../config')
const store = require('../store')

const createReport = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reports',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const indexReports = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/reports'
  })
}

const showOneReport = function (id) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/reports/' + id
  })
}

const updateReport = function (formData) {
  return $.ajax({
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/reports/' + formData.reportId,
    data: {
      report: {
        info: formData.info
      }
    }
  })
}

const deleteReport = (reportId) => {
  return $.ajax({
    url: config.apiUrl + '/reports/' + reportId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  createReport,
  indexReports,
  showOneReport,
  updateReport,
  deleteReport
}
