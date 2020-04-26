const express = require('express');
const { getNthElement, arrayToCSVString, addToArray2, elementsStartingWithAVowel, removeNthElement2 } = require('../lib/arrays');

const router = express.Router();

router.post('/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});

router.post('/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

router.post('/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

router.post('/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

router.post('/remove-element', (req, res) => {
  let { index } = req.query || 0;
  const { array } = req.body;

  res.status(200).json({ result: removeNthElement2(index, array) });
});

module.exports = router;
