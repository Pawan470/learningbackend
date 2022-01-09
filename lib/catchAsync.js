const constants = require('./constants'),
  Response = require('./response')

module.exports = catchAsync = (fn) => {
  return (req, res, next) =>
    fn(req, res, next).catch((error) => {
      console.log(error)
      if (error.isJoi) {
        res.json({
          code: constants.statusCode.validation,
          message: error.details[0].message,
        })
      } else {
        res.json({
          code: constants.statusCode.internalservererror,
          message: 'internalError',
        })
      }


      
    })
}
