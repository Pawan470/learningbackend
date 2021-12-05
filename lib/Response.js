module.exports = function (code, message, data, totalCount) {
    const response = {}
    response.code = code
    response.message = message
    response.data = data
  
  
    if (totalCount === 0 || totalCount) {
      response.totalCount = totalCount
    }
    return response
}