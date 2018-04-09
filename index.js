const getUnsignedAgreements = require('./lib/steps/get-unsigned-agreements')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getUnsignedAgreements()
  .then(data => {
    logger('info', ['index', 'finished'])
    process.exit(0)
  })
  .catch(error => {
    logger('error', ['index', 'error', JSON.stringify(error)])
    process.exit(1)
  })
