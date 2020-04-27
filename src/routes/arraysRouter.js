const express = require('express');
const arraysController = require('../controllers/arraysController');

const router = express.Router();

router.post('/element-at-index/:index', arraysController.arrays_getNthElement); 

router.post('/to-string', arraysController.arrays_arrayToCSVString);

router.post('/append', arraysController.arrays_addToArray2);

router.post('/starts-with-vowel', arraysController.arrays_elementsStartingWithAVowel);

router.post('/remove-element', arraysController.arrays_removeNthElement2);

module.exports = router;
