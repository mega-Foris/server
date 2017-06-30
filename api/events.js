const express = require('express');

const router = express.Router();

const queries = require('../db/queries.js');

const moment = require('moment');

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


router.post('/createEvent',  (req, res, next) => {
    //  console.log(req.body.date_time);
    //  req.body.date_time = moment(req.body.date_time).format('YYYY-MM-DD');
    //  console.log(req.body.date_time);
      queries.createEvent(req.body).then(result => {
        console.log(req.body);
        res.send(result);
      })
})


//just duplicated directly above, but it's probably close.
// router.delete('/deleteEvent', (req, res, next) => {
//   queries.deleteEvent(req.body).then(result => {
//     console.log(req.body);
//     res.send(result);
//   })
// })
// router.put('/changeEvent', (req, res, next) => {
//   queries.changeEvent(req.body).then(result => {
//     console.log(req.body);
//     res.send(result);
//   })
// })




module.exports = router;
