
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE comment CASCADE; ALTER SEQUENCE comment_id_seq restart with 4')
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          id: 1,
          person_id: 1,
          event_id: 1,
          comment: 'I cant wait to learn to kayak down clear creek canyon, I\'ve been practicing in my bathtub all week!'
        },
        {
          id: 2,
          person_id: 2,
          event_id: 2,
          comment: 'biking up that damn hill is going hurt like 8 bitches on a bitch boat!!'
        },
        {
          id: 3,
          person_id: 3,
          event_id: 3,
          comment: 'I had ribs for lunch... that\'s why I\'m doing this'
        },
        {
          id: 4,
          person_id: 2,
          event_id: 2,
          comment: 'Cannot wait'
        },
        {
          id: 5,
          person_id: 3,
          event_id: 2,
          comment: 'Lets\'s do this'
        }
      ]);
    });
};
