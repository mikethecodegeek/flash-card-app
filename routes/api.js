var express = require('express');
var router = express.Router();

router.use('/cards', require('./flashcards'));




module.exports = router;

