const config = require('../config')
const store = require('../store')

const createReport = function (formData) {
  console.log(formData)
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

const showReport = function (id) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/reports/' + id
  })
}

module.exports = {
  createReport,
  indexReports,
  showReport
}
