
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE person_event CASCADE; ALTER SEQUENCE person_event_id_seq restart with 9')
    .then(function () {
      // Inserts seed entries
      return knex('person_event').insert([
        {id: 1, person_id: 1, event_id: 1, is_organizer: true },
        {id: 2, person_id: 2, event_id: 2, is_organizer: true },
        {id: 3, person_id: 3, event_id: 3, is_organizer: true },
        {id: 4, person_id: 4, event_id: 2, is_organizer: false },
        {id: 5, person_id: 1, event_id: 2, is_organizer: false },
        {id: 6, person_id: 2, event_id: 2, is_organizer: false },
        {id: 7, person_id: 3, event_id: 2, is_organizer: false },
        {id: 8, person_id: 4, event_id: 1, is_organizer: false }
      ]);
    });
};
