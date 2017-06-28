const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const router = express.Router();
const Person = require('../db/queries')

require('dotenv').config();

router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  })
})

function validateUser(user) {
  const validEmail = typeof user.email == 'string' &&
    user.email.trim() != '';
  const validPassword = typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;

  return validEmail && validPassword;
}


router.post('/signup', (req, res, next) => {
  if (validateUser(req.body)) {
    Person
      .getUserByEmail(req.body.email)
      .then(person => {
        // console.log('person', person);
        if (!person) {

          bcrypt.hash(req.body.password, 10)
            .then((hash) => {
              console.log(hash);
              const person = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash
              }

              Person
                .createPerson(person)
                .then(id => {
                  jwt.sign({
                    id: person.id
                  }, process.env.TOKEN_SECRET, {
                    expiresIn: '1hr'
                  }, (err, token) => {
                    console.log('err', err);
                    console.log('token', token);
                    res.json({
                      id: person.id,
                      token,
                      message: 'ok'
                    })
                  });
                })
            })
        } else {
          next(new Error('Invalid user'))
        }
      })
  }
})

router.post('/login', (req, res, next) => {
  if (validateUser(req.body)) {
    Person
      .getUserByEmail(req.body.email)
      .then(person => {
        console.log('person', person);
        if (Person) {
          console.log('if');
          bcrypt.compare(req.body.password, person.password)
            .then((result) => {

              if (result) {
                console.log('if2');
                console.log(process.env.TOKEN_SECRET);
                jwt.sign({
                    id: person.id
                  },
                  process.env.TOKEN_SECRET, {expiresIn: '1hr'},(err, token) => {
                    console.log('err', err);
                    console.log('token', token);
                    res.json({
                      id: person.id,
                      token,
                      message: 'ok'
                    });
                    alert('Sign-up Successful!')
                  });
              } else {
                console.log('else');
                next(new Error('Invalid user'))
              }console.log('missed');
            })
          } else {
            next( new Error('Invalid user'))
          }
        })
  }
});









module.exports = router;
