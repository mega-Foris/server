const express = require('express');

const router = express.Router();

const queries = require('../db/queries.js');

router.get('/', (req,res)=>{
  queries.getAllEvents().then(events=>{
    res.json(events);
  });
});

module.exports = router;
