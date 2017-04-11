process.env.MONGODB_URI = 'mongodb://localhost:27017/todo-test';
require('../lib/connection');
const mongoose = require('mongoose');

before(() => mongoose.connection.dropDatabase());