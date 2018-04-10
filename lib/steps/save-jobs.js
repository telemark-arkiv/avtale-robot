const uuid = require('uuid/v4')
const saveFile = require('../save-file')
const logger = require('../logger')
const config = require('../../config')

module.exports = async agreements => {
  logger('info', ['save-jobs', 'agreements', agreements.length])
  async function next () {
    if (agreements.length > 0) {
      const agreement = agreements.pop()
      const filePath = `${config.JOBS_DIRECTORY_PATH}/${uuid()}.json`
      try {
        await saveFile({filePath: filePath, data: agreement.job})
        await next()
      } catch (error) {
        throw error
      }
    } else {
      return agreements
    }
  }
  await next()
}
