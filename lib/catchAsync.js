const constants = require('./constants'),
  Response = require('./response')

module.exports = catchAsync = (fn) => {
    console.log('pawan')
  return (req, res, next) =>
    fn(req, res, next).catch((error) => {
      if (error.isJoi) {
        res.json({
          code: constants.statusCode.validation,
          message: error.details[0].message,
        })
      } else {
        res.json({
          code: constants.statusCode.internalservererror,
          message: constants.messages.internalError,
        })
      }


      
    })
}
