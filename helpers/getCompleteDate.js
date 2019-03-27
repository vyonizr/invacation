const moment = require("moment")

module.exports = function getCompleteDate(date) {
  return moment(date).format("dddd, DD MMMM YYYY")
}