const uuid = require('uuid/v4')
const pkg = require('../package.json')
const config = require('../config')
const logger = require('../logger')

module.exports = agreement => {
  const url = `${config.AGREEMENTS_SERVICE_URL}/agreements/${agreement.id}`
  logger('info', ['update-agreement-status', 'id', agreement._id])
  return {
    '_id': uuid(),
    system: pkg.name,
    jobId: agreement.id,
    url: url,
    method: 'POST',
    payload: {
      history: agreement.history,
      status: 'signed'
    }
  }
}
