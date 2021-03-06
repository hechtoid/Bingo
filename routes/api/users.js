const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle
    });
  })

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }
// Check to make sure nobody has already registered with a duplicate handle
    User.findOne({ handle: req.body.handle })
    .then(user => {
        if (user) {
        return res.status(400).json({handle: "A user has already registered with this username"})
        } else {
        const newUser = new User({
            handle: req.body.handle,
            password: req.body.password
        })
// Hash password and create new user
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
        })
        }
    })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    
    if (!isValid) {
    return res.status(400).json(errors);
    }

    const handle = req.body.handle;
    const password = req.body.password;

    User.findOne({handle})
    .then(user => {
        if (!user) {
        return res.status(404).json({handle: 'This user does not exist'});
        }

    bcrypt.compare(password, user.password)
    .then(isMatch => {
        if (isMatch) {
        const payload = {id: user.id, handle: user.handle};
        
        jwt.sign(
            payload,
            keys.secretOrKey,
            // Tell the key to expire in one hour
            {expiresIn: 86400},
            (err, token) => {
            res.json({
                success: true,
                token: 'Bearer ' + token
            });
            });
        } else {
            return res.status(400).json({password: 'Incorrect password'});
        }
    })
    })
})

module.exports = router;