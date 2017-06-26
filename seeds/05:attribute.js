
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex.raw('TRUNCATE attribute CASCADE; ALTER SEQUENCE attribute_id_seq restart with 4')
    .then(function () {
      // Inserts seed entries
      return knex('attribute').insert([
        {
          id:1,
          name: 'Profile Picture',
          type: 'string'
        },
        {
          id:2,
          name: 'Birth Year',
          type: 'integer'
        },{
          id:3,
          name: 'Favorite Sport',
          type: 'string'
        }
      ]);
    });
};
