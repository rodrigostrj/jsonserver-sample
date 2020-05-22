# jsonserver-sample


https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d

1- Run it on terminal. Instaling json-server globaly:
COMAND: npm install json-server -g

2- create a file called db.json:

{
  "employees": [
    {
      "id": 1,
      "first_name": "Sebastian",
      "last_name": "Eschweiler",
      "email": "sebastian@codingthesmartway.com"
    },
    {
      "id": 2,
      "first_name": "Steve",
      "last_name": "Palmer",
      "email": "steve@codingthesmartway.com"
    },
    {
      "id": 3,
      "first_name": "Ann",
      "last_name": "Smith",
      "email": "ann@codingthesmartway.com"
    }
  ]
}


4 - Running the server:

COMAND:  json-server .\db.json

5 The following HTTP endpoints are created automatically by JSON server:

GET    /employees
GET    /employees/{id}
POST   /employees
PUT    /employees/{id}
PATCH  /employees/{id}
DELETE /employees/{id}



#########  Create even more fake data ###############################################

Generate even more data fake with faker (Create 50 fake items):

1- COMAND: npm init  
2- COMAND: npm install faker     
3- Crete the file employees.js: 
	
		// employees.js
		var faker = require('faker')
		function generateEmployees () {
		  var employees = []
		  for (var id = 0; id < 50; id++) {
			var firstName = faker.name.firstName()
			var lastName = faker.name.lastName()
			var email = faker.internet.email()
			employees.push({
			  "id": id,
			  "first_name": firstName,
			  "last_name": lastName,
			  "email": email
			})
		  }
		  return { "employees": employees }
		}
		module.exports = generateEmployees
	

4 - json-server employees.js
