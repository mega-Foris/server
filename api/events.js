const express = require('express');

const router = express.Router();

const queries = require('../db/queries.js');

router.get('/', (req,res)=>{
  queries.getAllEvents().then(events=>{
    res.json(events);
  });
});

router.get('/:id', (req,res)=>{
  queries.getOneEventByID(req.params.id).then(events=>{
    res.json(events);
  });
});

router.get('/sport/:sport', (req,res)=>{
  queries.getAllEventsBySport(req.params.sport).then(events=>{
    res.json(events);
  });
});

router.get('/difficulty/:difficulty', (req,res)=>{
  queries.getAllEventsByDifficulty(req.params.difficulty).then(events=>{
    res.json(events);
  });
});

router.get('/sport/:sport/difficulty/:difficulty', (req,res)=>{
  queries.getAllEventsBySportAndDifficulty(req.params.sport, req.params.difficulty).then(events=>{
    res.json(events);
  });
});

router.post('/createEvent', (req, res, next) => {
      queries.createEvent(req.body).then(result => {
        res.send(result);
      })
})



module.exports = router;
