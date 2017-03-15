const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');
const cors = require('cors');
const todo = require('./routes/todo-routes');

app.use(cors());
app.use(morgan('dev'));
app.use('/', todo);
app.use(errorHandler);

module.exports = app;