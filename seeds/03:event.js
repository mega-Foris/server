

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE event CASCADE; ALTER SEQUENCE event_id_seq restart with 4')
    .then(function () {
      // Inserts seed entries
      return knex('event').insert([
        {
          id: 1,
          title: 'Kayak Trip',
          main_sport:'kayaking',
          difficulty:'beginner',
          location_id:1,
          capacity:12,
          description:'Kayaking trip down the clear creek canyon, helmets advised!',
          image_url:'http://www.momentumriverexpeditions.com/wp-content/uploads/2016/01/Clear-creek.jpg',
          duration: '8 hours',
          organizer_id: 1,
          date_time: '11/12/17'
          },
          {
          id: 2,
          title: 'Climing Trip',
          main_sport:'climbing',
          difficulty:'expert',
          location_id:2,
          capacity:8,
          description:'climbing trip in clear creek canyon, gear provided',
          image_url:'https://nomadinrifle.files.wordpress.com/2011/12/img_0200a-edit.jpg',
          duration: '5 hours',
          organizer_id: 2,
          date_time: '11/14/17'
          },
          {
          id: 3,
          title: 'Biking Trip',
          main_sport:'biking',
          difficulty:'intermediate',
          location_id:3,
          capacity:10,
          description:'biking trip up the clear creek canyon trail, helmets advised! 12 mile trip up the trail. Elevation change will be about 1000 feet per mile. Bring lots fo water. Snacks will be provided. We will not stop and wait for you if you suck at this.',
          image_url:'http://www.momentumriverexpeditions.com/wp-content/uploads/2016/01/Clear-creek.jpg',
          duration: '8 hours',
          organizer_id: 3,
          date_time: '11/12/17'
          }
      ]);
    });
};
