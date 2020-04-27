const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

exports.bool_negate = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

exports.bool_truthiness = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
};

exports.bool_isOdd = (req, res) => {
  const number = parseInt(req.params.number);

  return Number.isNaN(number)
    ? res.status(400).json({ error: 'Parameter must be a number.' })
    : res.status(200).json({ result: isOdd(number) });
};

exports.bool_startsWith = (req, res) => {
  const { string } = req.params;
  const { letter } = req.params;

  return letter.length > 1
    ? res.status(400).json({ error: 'Parameter "character" must be a single character.' })
    : res.status(200).json({ result: startsWith(letter, string) });
};