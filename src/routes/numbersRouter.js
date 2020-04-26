const express = require('express');
const { add } = require('../lib/numbers');

const numbersRouter = express.Router();

numbersRouter.get('/add/:firstNum/and/:secondNum', (req, res) => {
  const firstNum = parseInt(req.params.firstNum);
  const secondNum = parseInt(req.params.secondNum);

  return Number.isNaN(firstNum) || Number.isNaN(secondNum)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.'})
    : res.status(200).json({ result: add(firstNum, secondNum) });
});

module.exports = numbersRouter;
