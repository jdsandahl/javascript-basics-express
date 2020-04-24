const express = require('express');
const stringRouter = require('./routes/stringRouter');

const app = express();

app.use('/strings', stringRouter);

module.exports = app;
