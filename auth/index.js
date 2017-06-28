const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const Person = require('../db/queries')

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
        console.log('person', person);
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
                .then(result => {
                  res.send(result);
                })
            })
        } else {
          next(new Error('Invalid user'))
        }
      })
  }
})






module.exports = router;
