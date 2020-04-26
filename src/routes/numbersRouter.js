const express = require('express');
const { add, subtract, multiply } = require('../lib/numbers');

const numbersRouter = express.Router();

numbersRouter.get('/add/:firstNum/and/:secondNum', (req, res) => {
  const firstNum = parseInt(req.params.firstNum);
  const secondNum = parseInt(req.params.secondNum);

  return Number.isNaN(firstNum) || Number.isNaN(secondNum)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(firstNum, secondNum) });
});

numbersRouter.get('/subtract/:firstNum/from/:secondNum', (req, res) => {
  const firstNum = parseInt(req.params.firstNum);
  const secondNum = parseInt(req.params.secondNum);

  return Number.isNaN(firstNum) || Number.isNaN(secondNum)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(secondNum, firstNum) });
});

numbersRouter.post('/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a)) || Number.isNaN(parseInt(req.body.b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
});

module.exports = numbersRouter;
