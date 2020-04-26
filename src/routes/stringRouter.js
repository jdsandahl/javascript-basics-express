const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/strings');
const stringController = require('../controllers/stringsController');

const router = express.Router();

router.get('/hello/:string', stringController.strings_sayhello);

router.get('/upper/:string', stringController.strings_uppercase); 

router.get('/lower/:string', stringController.strings_lowercase);

router.get('/first-characters/:string', stringController.strings_firstCharacters);

module.exports = router;
