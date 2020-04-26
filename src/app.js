const express = require('express');
const stringRouter = require('./routes/stringRouter');
const numbersRouter = require('./routes/numbersRouter');
const boolRouter = require('./routes/boolRouter');
const arraysRouter = require('./routes/arraysRouter');


const app = express();

app.use(express.json());

app.use('/strings', stringRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', boolRouter);
app.use('/arrays', arraysRouter);

module.exports = app;
