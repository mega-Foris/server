const knex = require('./knex');


module.exports = {
  getOneEvent(id) {
    const promises = [
      //return event joined to location
      knex('event').innerJoin('location', 'event.location_id', 'location.id').where('event.id', id).first(),
      //return person_event joined to person
      knex('person_event').innerJoin('person', 'person_event.person_id', 'person.id').where('person_event.event_id',id),
      //get all comments where event_id is one we are interested in
      knex('comment').where('event_id', id)
    ];
    Promise.all(promises)
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
                    console.log(people);
          event.people = people;
          event.comments = comments;
          return event;
        });
    });
  } //end function
}; //end module.exports
