const express = require('express');
const booleanController = require('../controllers/boolController');

const router = express.Router();

router.post('/negate', booleanController.bool_negate);

router.post('/truthiness', booleanController.bool_truthiness);

router.get('/is-odd/:number', booleanController.bool_isOdd);

router.get('/:string/starts-with/:letter', booleanController.bool_startsWith); 

module.exports = router;
