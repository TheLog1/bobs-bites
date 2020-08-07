const config = require('../config')

const createReport = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reports',
    data: formData
  })
}

module.exports = {
  createReport
}
