const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const WordList = require('../../models/WordList');

router.get("/", (req, res) => res.send("Hello Word!!"));


router.get('/user/:user_id', 
    passport.authenticate('jwt', { session: false }),  
    (req, res) => {
      WordList.find({user: { $in: [req.params.user_id] } })
        .sort({ date: -1 })
        .then(wordlists => res.json(wordlists))
        .catch(err =>
            res.status(404).json({ nowordlistsfound: 'No WordLists found forthat user' }
        )
    );
});

router.get('/:list_id',
    // Keep Unlocked! Share Games with Non-Users
    // But check userID for lists with unlisted flag set? 
    // passport.authenticate('jwt', { session: false }),    
    (req, res) => {
      WordList.findById(req.params.list_id)
        .then( wordlist => res.json(wordlist))
        .catch(err =>
            res.status(404).json({ nowordlistsfound: 'No WordLists found by that id' })
        )
    }
)

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const newWordList = new WordList({
        name: req.body.name,
        unlisted: req.body.unlisted,
	    words: req.body.words,
        user: req.user.id
      });
      newWordList.save()
        .then(wordlist => res.json(wordlist))
        .catch(err=> res.status(500).json(err))
    }
);

router.put('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        WordList.findById(req.body._id)
            .then( wordlist => {
                wordlist.name = req.body.name
                wordlist.unlisted = req.body.unlisted
                wordlist.words = req.body.words
                wordlist.user = req.user.id
                wordlist.save()
                    .then(wordlist => res.json(wordlist))
                    .catch(err=> res.status(500).json(err))
            })
            .catch(err =>
                res.status(404).json({ nowordlistsfound: 'No WordLists found by that id' })
            )
    }
);

router.delete('/:list_id',
    passport.authenticate('jwt', { session: false }),    
    (req, res) => {
      WordList.deleteOne({ _id: req.params.list_id })
      .then( () => res.status(204).json({}))
      .catch( error => res.status(500).json({error}))
    }
);



  module.exports = router;
