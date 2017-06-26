
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE person_attribute CASCADE; ALTER SEQUENCE person_attribute_id_seq restart with 10')
    .then(function () {
      // Inserts seed entries
      return knex('person_attribute').insert([
        {
          id:1,
          person_id: 1,
          attribute_id: 1,
          value: 'https://pbs.twimg.com/media/C89QtDzV0AAIMve.jpg'
        },
        {
          id:2,
          person_id: 1,
          attribute_id: 2,
          value: '1986'
        },
        {
          id:3,
          person_id: 1,
          attribute_id: 3,
          value: 'biking'
        },
        {
          id:4,
          person_id: 2,
          attribute_id: 1,
          value: 'https://s3.amazonaws.com/pq-imgs/images/bios/kristen-johnston.j-11349.jpg'
        },
        {
          id:5,
          person_id: 2,
          attribute_id: 2,
          value: '1995'
        },
        {
          id:6,
          person_id: 2,
          attribute_id: 3,
          value: 'kayaking'
        },
        {
          id:7,
          person_id: 3,
          attribute_id: 1,
          value: 'http://cdnak1.psbin.com/img/mw=300/cr=n/d=jbf18/yy2zjwqv59zlzy63.jpg'
        },
        {
          id:8,
          person_id: 3,
          attribute_id: 2,
          value: '1991'
        },
        {
          id:9,
          person_id: 3,
          attribute_id: 3,
          value: 'climbing'
        }
      ]);
    });
};
