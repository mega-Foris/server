
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE person_event CASCADE; ALTER SEQUENCE person_event_id_seq restart with 26')
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
        {id: 8, person_id: 4, event_id: 1, is_organizer: false },
        {id: 9, person_id: 1, event_id: 4, is_organizer: true },
        {id: 10, person_id: 5, event_id: 5, is_organizer: true },
        {id: 11, person_id: 7, event_id: 6, is_organizer: true },
        {id: 12, person_id: 8, event_id: 7, is_organizer: true },
        {id: 13, person_id: 9, event_id: 8, is_organizer: true },
        {id: 14, person_id: 10, event_id: 9, is_organizer: true },
        {id: 15, person_id: 4, event_id: 10, is_organizer: true },
        {id: 16, person_id: 1, event_id: 5, is_organizer: false },
        {id: 17, person_id: 2, event_id: 5, is_organizer: false },
        {id: 18, person_id: 3, event_id: 6, is_organizer: false },
        {id: 19, person_id: 4, event_id: 6, is_organizer: false },
        {id: 20, person_id: 5, event_id: 7, is_organizer: false },
        {id: 21, person_id: 5, event_id: 7, is_organizer: false },
        {id: 22, person_id: 7, event_id: 8, is_organizer: false },
        {id: 23, person_id: 8, event_id: 8, is_organizer: false },
        {id: 24, person_id: 9, event_id: 9, is_organizer: false },
        {id: 25, person_id: 10, event_id: 10, is_organizer: false },
      ]);
    });
};
