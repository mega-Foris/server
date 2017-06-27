const express = require('express');

const router = express.Router();

const queries = require('../db/queries.js');

router.get('/', (req,res)=>{
  queries.getAllUsers().then(persons=>{
    res.json(persons);
  });
});

router.get('/:id', (req,res)=>{
  queries.getOneUserByID(req.params.id).then(persons=>{
    res.json(persons);
  });
});

router.get('/event/:eventid', (req,res)=>{
  queries.getAllUsersByEventID(req.params.eventid).then(persons=>{
    res.json(persons);
  });
});

router.post('/createPerson', (req, res, next) => {
      queries.createPerson(req.body).then(result => {
        console.log(req.body);
        res.send(result);
      })
})

module.exports = router;
