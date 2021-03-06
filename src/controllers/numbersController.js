const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

exports.numbers_add = (req, res) => {
  const firstNum = parseInt(req.params.firstNum);
  const secondNum = parseInt(req.params.secondNum);

  return Number.isNaN(firstNum) || Number.isNaN(secondNum)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(firstNum, secondNum) });
};

exports.numbers_subtract = (req, res) => {
  const firstNum = parseInt(req.params.firstNum);
  const secondNum = parseInt(req.params.secondNum);

  return Number.isNaN(firstNum) || Number.isNaN(secondNum)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(secondNum, firstNum) });
};

exports.numbers_multiply = (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a)) || Number.isNaN(parseInt(req.body.b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
};

exports.numbers_divide = (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a)) || Number.isNaN(parseInt(req.body.b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  }
};

exports.numbers_remainder = (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a)) || Number.isNaN(parseInt(req.body.b))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  }
};
