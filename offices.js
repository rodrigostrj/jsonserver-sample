// offices.js
var faker = require('faker')
function generateOffices () {
  var offices = []
  for (var id = 0; id < 50; id++) {
    var officeName = faker.company.companyName()
    var officeCode = faker.name.companySuffix()
    var email = faker.internet.email()
    offices.push({
      "id": id,
      "office_name": officeName,
      "office_code": officeCode,
      "email": email
    })
  }
  return { "offices": offices }
}
module.exports = generateOffices