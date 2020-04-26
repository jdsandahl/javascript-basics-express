const express = require('express');
const stringRouter = require('./routes/stringRouter');
const numbersRouter = require('./routes/numbersRouter');

const app = express();

app.use('/strings', stringRouter);
app.use('/numbers', numbersRouter);

module.exports = app;
