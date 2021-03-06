
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE location CASCADE; ALTER SEQUENCE location_id_seq restart with 5')
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {
          id: 1,
          city: 'Golden',
          state: 'Colorado',
          zip: '80216',
          google_id: 'werty'
        },
        {
          id: 2,
          city: 'Golden',
          state: 'Colorado',
          zip: '80217',
          google_id: 'jerky'
        },
        {
          id: 3,
          city: 'Denver',
          state: 'Colorado',
          zip: '80211',
          google_id: 'flerty'
        },
        {
          id: 4,
          city: 'Vail',
          state: 'Colorado',
          zip: '81658',
          google_id: 'xhlasdhflk'
        }
      ]);
    });
};
