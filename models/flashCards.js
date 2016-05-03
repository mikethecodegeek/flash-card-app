var mongoose = require('mongoose');

var flashCard = mongoose.model('Cards', {
    question: String,
    answer: String,
    category: String
});

module.exports = flashCard;