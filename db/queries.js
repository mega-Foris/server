const knex = require('./knex');
const moment = require('moment');

module.exports = {
  getAllEvents(){
    return knex('event');
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
  getAllUsersByEventID(event_id){
    return knex('person_event').where('event_id', event_id);
  },
  getUserByEmail(email) {
    return knex('person').where('email', email).first();
  },
  createPerson(person) {
    return knex('person').insert(person).returning('*');
  },
  createEvent(event) {
    return knex('event').insert(event).returning('*');
  },
  getOneEventByID(id) {
    const promises = [
      //return event joined to location
      knex('event').innerJoin('location', 'event.location_id', 'location.id').where('event.id', id).first(),
      //return person_event joined to person
      knex('person_event').innerJoin('person', 'person_event.person_id', 'person.id').where('person_event.event_id',id),
      //get all comments where event_id is one we are interested in
      knex('comment').where('event_id', id)
    ];
    return Promise.all(promises)
      .then(results => {
        const event = results[0];
        const people = results[1];
        const comments = results[2];
        return Promise.all(
          people.map(person=>{
            return knex('person_attribute')
              .where('person_id', person.id)
              .andWhere('attribute_id', 1)
              .first()
              .then(profile_pic => {
                person.profile_pic = profile_pic;
              });
          })
        ).then(()=>{
        //  console.log(people);
          event.people = people;
          event.comments = comments;
          return event;
        });
    });
  }, //end event id function
  getOneUserByID(id) {
    const promises = [
      //return basic person information
      knex('person').where('id', id).first(),
      //return all events the person is attending
      knex('person_event').where('person_event.person_id',id),
      //return all attribute value for the person
      knex('person_attribute').innerJoin('attribute', 'attribute.id', 'attribute_id').where('person_id', id)
    ];
    return Promise.all(promises)
      .then(results => {
        const person = results[0];
        const events = results[1];
        const attributes = results[2];
        return Promise.all(
          events.map(event=>{
            return knex('event')
            .where('id', event.event_id)
            .then(event_info=>{
              event.event_info = event_info;
            });
          })
        ).then(()=>{
          person.futureevents = [];
          person.pastevents = [];
          const now = new Date();
          const now_moment = moment.utc(now,'YYYY-MM-DD');
          for (var i = 0; i < events.length; i++) {
            let event_time = events[i].event_info[0].date_time;
            var event_moment = moment.utc(event_time, 'YYYY-MM-DD');
            //console.log('now_time =',now_moment);
            //console.log('event_time =',event_moment);
            if(event_moment.isAfter(now_moment)){
              person.futureevents.push(events[i]);
            }else{
            person.pastevents.push(events[i]);
          }
        }
        person.attributes = attributes;
        return person;
        });
    });
  }
};//end total one
