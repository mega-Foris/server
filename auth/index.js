const  express = require('express');
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
  if(validateUser(req.body)) {
    Person
          .getUserByEmail(req.body.email)
          .then(person => {
            console.log('person', person);
            if(!person) {
              res.json({
                person,
                message: '✅'
                })
            } else {
              next( new Error('Email in use'));
            }
    })
  } else {
    next(new Error('Invalid user'))
  }
})







module.exports = router;
