const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/strings');

const stringRouter = express.Router();

stringRouter.get('/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

stringRouter.get('/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

stringRouter.get('/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

stringRouter.get('/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;

  res.status(200).json({ result: firstCharacters(req.params.string, length) });
});

module.exports = stringRouter;
