const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const WordList = require('../../models/WordList');

router.get('/user/:user_id', (req, res) => {
    Wordlist.find({user: { $in: [req.params.user_id] } })
        .sort({ date: -1 })
        .then(wordlists => res.json(wordlists))
        .catch(err =>
            res.status(404).json({ nowordlistsfound: 'No WordLists found on that user' }
        )
    );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const newWordList = new WordList({
        name: req.body.name,
        unlisted: req.body.unlisted,
	words: req.body.words,
        user: req.user.id
      });
  
      newWordList.save().then(wordlist => res.json(wordlist));
    }
  );

  module.exports = router;
