const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordListSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String
  },
  unlisted: {
    type: Boolean
  },
  words: {
    type: Array
  }
});

module.exports = WordList = mongoose.model('wordlists', WordListSchema);
