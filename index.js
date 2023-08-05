const {Person} = require("./person");
const dotenv = require('dotenv');
const connectToDatabase = require('./src/connect');

dotenv.config();

connectToDatabase();


//require('./modules/http');
require('./modules/express')

require


const person = new Person('daniel');

