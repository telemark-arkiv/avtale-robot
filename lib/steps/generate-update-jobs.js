const generateUpdateAgreementStatusJob = require('../generate-update-agreement-status-job')
const logger = require('../logger')

module.exports = async agreements => {
  logger('info', ['generate-update-jobs', 'agreements', agreements.length])
  const data = agreements.map(agreement => Object.assign({}, agreement, {job: generateUpdateAgreementStatusJob(agreement)}))
  return data
}
