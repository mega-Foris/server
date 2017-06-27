const knex = require('./knex');

module.exports = {
  getAllEvents(){
    return knex('event');
  },
  getOneEventByID(id){
    return knex('event').where('id', id).first();
  },
  getAllEventsBySport(sport){
    return knex('event').where('main_sport', sport);
  },
  getAllEventsByDifficulty(difficulty){
    return knex('event').where('difficulty', difficulty);
  },
  getAllEventsBySportAndDifficulty(sport, difficulty){
    return knex('event').where('main_sport', sport).andWhere('difficulty', difficulty);
  }, //will ideally modify this so that it dynamically can accept any 2 filters or number
  getAllUsers(){
    return knex('person');
  },
  getOneUserByID(id){
    return knex('person').where('id', id).first();
  },
  getAllUsersByEventID(event_id){
    return knex('person_event').where('event_id', event_id);
  },
  getUserByEmail(email) {
    return knex('person').where('email', email).first();
  }
};
