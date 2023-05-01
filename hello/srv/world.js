module.exports = class say {
  hello(i_req) {
    let {to} = i_req.data
    if (to === 'me') to = require('os').userInfo().username
    return `Hello ${to}!`
  }
}
