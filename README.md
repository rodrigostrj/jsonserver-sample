# jsonserver-sample


https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d

1- Run it on terminal. Instaling json-server globaly:
COMAND: npm install json-server -g

2- create a file called db.json:

{
    "offices": [
      {
        "id": 1,
        "office_name": "xpto 123",
        "office_code": "xpto123",
        "email": "xpto123@xpto 123.com"
      },
      {
        "id": 2,
        "office_name": "xpto 1234",
        "office_code": "xpto1234",
        "email": "xpto1234@xpto1234.com"
      },
      {
        "id": 3,
        "office_name": "xpto 12345",
        "office_code": "xpto12345",
        "email": "xpto12345@xpto12345.com"
      }
    ]
  }


4 - Running the server:

COMAND:  json-server .\db.json

5 The following HTTP endpoints are created automatically by JSON server:

GET    /offices
GET    /offices/{id}
POST   /offices
PUT    /offices/{id}
PATCH  /offices/{id}
DELETE /offices/{id}



#########  Create even more fake data ###############################################

Generate even more data fake with faker (Create 50 fake items):

1- COMAND: npm init  
2- COMAND: npm install faker     
3- Crete the file offices.js: 
	
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
	

4 - json-server offices.js
