const axios = require('axios')
const generateSystemToken = require('../generate-system-token')
const config = require('../../config')
const logger = require('../logger')

module.exports = async () => {
  axios.defaults.headers.common['Authorization'] = generateSystemToken()
  const url = `${config.AGREEMENTS_SERVICE_URL}/agreements/search`
  logger('info', ['get-unsigned-agreements', 'url', url])
  try {
    const { data } = await axios.post(url, {status: 'unsigned'})
    logger('info', ['get-unsigned-agreements', 'url', url, 'success', data.length])
    return data
  } catch (error) {
    logger('error', ['get-unsigned-agreements', 'url', url, error])
    throw error
  }
}
