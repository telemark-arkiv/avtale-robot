const getAgreementStatus = require('../get-agreement-status')
const logger = require('../logger')

module.exports = async agreements => {
  let checked = []
  async function next () {
    if (agreements.length > 0) {
      const agreement = agreements.pop()
      try {
        const { data } = await getAgreementStatus(agreement.forsendelsesId)
        agreement.history = data
        checked.push(agreement)
        await next()
      } catch (error) {
        throw error
      }
    } else {
      return checked
    }
  }
  logger('info', ['check-agreements-status', 'agreements', agreements.length, 'start'])

  await next()
}
