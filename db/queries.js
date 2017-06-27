const knex = require('./knex');

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
  getOneUserByID(id){
    return knex('person').where('id', id).first();
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
        console.log(event);
        console.log('break');
        console.log(people);
        console.log('break');
        console.log(comments);

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
  } //end function
};
