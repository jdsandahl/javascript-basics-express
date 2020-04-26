const express = require('express');
const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const router = express.Router();

router.post('/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

router.post('/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

router.get('/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number);

  return Number.isNaN(number)
    ? res.status(400).json({ error: 'Parameter must be a number.' })
    : res.status(200).json({ result: isOdd(number) });
});

router.get('/:string/starts-with/:letter', (req, res) => {
  const { string } = req.params;
  const { letter } = req.params;

  return letter.length > 1
    ? res.status(400).json({ error: 'Parameter "character" must be a single character.' })
    : res.status(200).json({ result: startsWith(letter, string) });
});

module.exports = router;
