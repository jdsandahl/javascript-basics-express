const express = require('express');
const numbersController = require('../controllers/numbersController');

const router = express.Router();

router.get('/add/:firstNum/and/:secondNum', numbersController.numbers_add);

router.get('/subtract/:firstNum/from/:secondNum', numbersController.numbers_subtract);

router.post('/multiply', numbersController.numbers_multiply);

router.post('/divide', numbersController.numbers_divide);

router.post('/remainder', numbersController.numbers_remainder);

module.exports = router;
