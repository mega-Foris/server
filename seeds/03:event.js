

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE event CASCADE; ALTER SEQUENCE event_id_seq restart with 11')
    .then(function () {
      // Inserts seed entries
      return knex('event').insert([
        {
          id: 1,
          title: 'Kayak Trip',
          main_sport:'Kayaking',
          difficulty:'Beginner',
          location_id:1,
          capacity:12,
          description:'Kayaking trip down the clear creek canyon, helmets advised!',
          image_url:'http://www.momentumriverexpeditions.com/wp-content/uploads/2016/01/Clear-creek.jpg',
          duration: '8 hours',
          organizer_id: 1,
          date_time: '2017-01-09'
          },
          {
          id: 2,
          title: 'Climbing Trip',
          main_sport:'Climbing',
          difficulty:'Expert',
          location_id:2,
          capacity:8,
          description:'Climbing trip in clear creek canyon, gear provided',
          image_url:'https://nomadinrifle.files.wordpress.com/2011/12/img_0200a-edit.jpg',
          duration: '5 hours',
          organizer_id: 2,
          date_time: '2017-10-01'
          },
          {
          id: 3,
          title: 'Biking Trip',
          main_sport:'Biking',
          difficulty:'Intermediate',
          location_id:3,
          capacity:10,
          description:'Biking trip up the clear creek canyon trail, helmets advised! 12 mile trip up the trail. Elevation change will be about 1000 feet per mile. Bring lots fo water. Snacks will be provided. We will not stop and wait for you if you suck at this.',
          image_url:'https://d3mwixoltfm4xv.cloudfront.net/wp-content/uploads/2017/03/p2-1024x683.jpg',
          duration: '8 hours',
          organizer_id: 3,
          date_time: '2017-09-10'
        },
        {
          id: 4,
          title: 'Awesome hike through the woods',
          main_sport:'Hiking',
          difficulty:'Beginner',
          location_id:4,
          capacity:5,
          description:'Let yourself be led through the gread outdoors',
          image_url:'https://crystalmountain.scdn3.secure.raxcdn.com/wp-content/uploads/2014/10/Summer_Hiking.jpg',
          duration: '5 hours',
          organizer_id: 1,
          date_time: '2017-09-09'
          },
          {
          id: 5,
          title: 'Climb up castle rock!',
          main_sport:'Climbing',
          difficulty:'Advanced',
          location_id:2,
          capacity:4,
          description:'Advanced climbing trip - I have gear for 4 but feel free to bring your own',
          image_url:'http://farm7.staticflickr.com/6086/6100751203_9b27060317_b.jpg',
          duration: '7 hours',
          organizer_id: 5,
          date_time: '2017-8-01'
          },
          {
          id: 6,
          title: 'Biking Trip',
          main_sport:'Biking',
          difficulty:'Beginner',
          location_id:4,
          capacity:15,
          description:'Learn to mountain bike with a supportive group! We will stop for lots of snacks',
          image_url:'http://cdn.michigan.org/cdn/farfuture/oWxZZ8vIJAYuHSKBqbyxQyMVM1p3IbJCaGccwohqkzM/mtime:1484043146/sites/default/files/styles/5_3_medium/public/teasers/biking.jpeg?itok=mVg91K0g',
          duration: '4 hours',
          organizer_id: 7,
          date_time: '2017-11-10'
          },
          {
          id: 7,
          title: 'Kayaks rule',
          main_sport:'Kayaking',
          difficulty:'Beginner',
          location_id:2,
          capacity:8,
          description:'All day flatwater kayaking trip with unlimited vistas!',
          image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Kayaking_in_Alaska_P1010034.JPG/1200px-Kayaking_in_Alaska_P1010034.JPG',
          duration: '10 hours',
          organizer_id: 8,
          date_time: '2017-07-01'
          },
          {
          id: 8,
          title: 'Learn to kayak',
          main_sport:'Kayaking',
          difficulty:'Beginner',
          location_id:3,
          capacity:12,
          description:'Try out kayaking for the first time and I promise you will not be disappointed! Bring a quick dry jacket as the mornings on the water can be chilly!',
          image_url:'https://22677-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2013/11/cwpage.jpg',
          duration: '4 hours',
          organizer_id: 9,
          date_time: '2017-10-10'
          },
          {
          id: 9,
          title: 'Friends and kayaks',
          main_sport:'Kayaking',
          difficulty:'Beginner',
          location_id:4,
          capacity:15,
          description:'Join us for a social kayak on the Colorado river! Bring drinks.',
          image_url:'http://excursionsbarcelona.com/wp-content/uploads/2016/01/Kayaking-small-group.jpg',
          duration: '4 hours',
          organizer_id: 10,
          date_time: '2017-08-10'
          },
          {
          id: 10,
          title: 'Relaxing day of kayaking',
          main_sport:'Kayaking',
          difficulty:'Beginner',
          location_id:1,
          capacity:16,
          description:'Enjoy some fun in the sun while brushing up on your kayaking basics',
          image_url:'http://www.my-photo-blog.com/wp-content/uploads/2010/11/Colorado-River.jpg',
          duration: '5 hours',
          organizer_id: 4,
          date_time: '2017-08-20'
          }
      ]);
    });
};
