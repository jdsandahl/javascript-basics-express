const express = require('express');
const { getNthElement, arrayToCSVString, addToArray2, elementsStartingWithAVowel, removeNthElement2 } = require('../lib/arrays');

const arrayRouter = express.Router();

arrayRouter.post('/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});

arrayRouter.post('/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

arrayRouter.post('/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

arrayRouter.post('/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

arrayRouter.post('/remove-element', (req, res) => {
  let { index } = req.query || 0;
  const { array } = req.body;

  res.status(200).json({ result: removeNthElement2(index, array) });
});

module.exports = arrayRouter;
